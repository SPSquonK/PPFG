const fs  = require("fs");
const PNG = require("pngjs").PNG;

function readImage(path) {
    let data = fs.readFileSync(path);
    return PNG.sync.read(data);
}

class ImageWatcher {
    /**
     * @param {number[]} data 
     * @param {number} slotSize 
     * @param {number} width 
     */
    constructor(data, slotSize, width) {
        this.data = data;
        this.slotSize = slotSize;
        this.width = width;
        this.row = 0;
        this.col = 0;
        this.colMax = Math.ceil(width / slotSize);
        this.rowMax = width === 0 ? 0 : data.length / (4 * width * slotSize);

        if (Math.floor(this.rowMax) !== this.rowMax) {
            throw "Invalid image";
        }
    }

    currentPosition() { return this.row * this.colMax + this.col; }

    canWatch() { return this.row !== this.rowMax; }

    advance() {
        if (this.colMax === this.col + 1) {
            this.col = 0;
            ++this.row;
        } else {
            ++this.col;
        }
    }

    /**
     * @param {PNG} searchedPNG 
     */
    see(searchedPNG) {
        let allWhite = true;
        let areSame = true;

        for (let y = 0 ; y < this.slotSize ; ++y) {
            const offsetYSrc =                             y  * searchedPNG.width;
            const offsetYDst = (this.row * this.slotSize + y) * this.width;

            for (let x = 0 ; x < this.slotSize ; ++x) {
                const offsetXYSrc = 4 * (offsetYSrc + x);
                const offsetXYDst = 4 * (offsetYDst + x + this.col * this.slotSize);

                for (let i = 0 ; i < 4 ; ++i) {
                    if (this.data[offsetXYDst + i] !== 0) allWhite = false;

                    if (y < searchedPNG.height && x < searchedPNG.width) {
                        if (this.data[offsetXYDst + i] !== searchedPNG.data[offsetXYSrc + i]) {
                            areSame = false;
                        }
                    }
                }
            }
        }

        if (areSame) {
            return 'found';
        } else if (allWhite) {
            return 'empty';
        } else {
            return 'bad';
        }
    }
}

function findImageIn(existingPixels, imagesPerRow, slotSize, toAdd) {
    let imageWatcher = new ImageWatcher(existingPixels, slotSize, imagesPerRow * slotSize);

    while (imageWatcher.canWatch()) {
        let result = imageWatcher.see(toAdd);

        if (result === 'empty') {
            return { position: imageWatcher.currentPosition(), isEmpty: true };
        }

        if (result === 'found') {
            return { position: imageWatcher.currentPosition(), isEmpty: false };
        }

        imageWatcher.advance();
    }

    return {
        position: imageWatcher.currentPosition(),
        isEmpty: true
    };
}

function writeImageAt(destination, row, column, rowOffset, spriteSize, pngToAdd) {
    const yMax = Math.min(spriteSize, pngToAdd.height);
    const xMax = Math.min(spriteSize, pngToAdd.width);

    for (let ySrc = 0 ; ySrc < yMax ; ++ySrc) {
        for (let xSrc = 0 ; xSrc < xMax ; ++xSrc) {
            const srcOffset = 4 * (xSrc          +  ySrc        * pngToAdd.width);
            const dstOffset = 4 * (xSrc + column + (ySrc + row) * rowOffset     );

            destination[dstOffset + 0] = pngToAdd.data[srcOffset + 0];
            destination[dstOffset + 1] = pngToAdd.data[srcOffset + 1];
            destination[dstOffset + 2] = pngToAdd.data[srcOffset + 2];
            destination[dstOffset + 3] = pngToAdd.data[srcOffset + 3];
        }
    }
}

function addImageIn(existingPixels, imagesPerRow, slotSize, toAdd) {
    const numberOfRows = existingPixels.length / (imagesPerRow * slotSize * slotSize * 4);

    let { position, isEmpty } = findImageIn(existingPixels, imagesPerRow, slotSize, toAdd)
    if (!isEmpty) {
        // We found it
        return position;
    }

    const requiredRow = Math.floor(position / imagesPerRow);
    if (requiredRow >= numberOfRows) {
        for (let i = 0 ; i != imagesPerRow * slotSize * slotSize ; ++i) {
            existingPixels.push(0);
            existingPixels.push(0);
            existingPixels.push(0);
            existingPixels.push(0);
        }
    }

    writeImageAt(
        existingPixels,
        slotSize * Math.floor(position / imagesPerRow),
        slotSize *           (position % imagesPerRow),
        slotSize * imagesPerRow,
        slotSize,
        toAdd
    );

    return position;
}

/**
 * @param {PNG} png 
 * @param {number} factor 
 */
function reduceImage(png, factor) {
    const r = new PNG({
        width: Math.ceil(png.width / factor),
        height: Math.ceil(png.height / factor),
        inputHasAlpha: true
    });

    for (let y = 0 ; y < r.height ; ++y) {
        for (let x = 0 ; x < r.width ; ++x) {
            const dst = (y * r.width   + x) * 4;
            const src = (y * png.width + x) * 4 * factor;

            r.data[dst + 0] = png.data[src + 0];
            r.data[dst + 1] = png.data[src + 1];
            r.data[dst + 2] = png.data[src + 2];
            r.data[dst + 3] = png.data[src + 3];
        }
    }

    return r;
}

/**
 * 
 * @param {*} destinationImage Path to the spritesheet
 * @param {*} destinationJSON Path to the json file that describes the spritesheets
 * @param {*} categoryName The name of the spritesheet in the json document
 * @param {*} source The path to the image to add to the spritesheet
 * @param {*} imageName The name of the image in the JSON document
 * @param {*} imagesPerRow The number of images par row in the spritesheet
 * @param {*} slotSize The size (both width and height) of a sprite
 * @param {*} reduceFactor Factor to use to eventually reduce the size of the sprite
 */
function completeSpritesheet(
    destinationImage, destinationJSON, categoryName, source,
    imageName, imagesPerRow, slotSize, reduceFactor = 1) {

    let existingPixels;
    let existingSprites;

    if (fs.existsSync(destinationImage)) {
        existingPixels = [... readImage(destinationImage).data];
        existingSprites = JSON.parse(fs.readFileSync(destinationJSON));
    } else {
        existingPixels = [];
        existingSprites = { '@spritesize' : {} };
    }

    existingSprites['@spritesize'][categoryName] = slotSize;

    if (existingSprites[imageName] === undefined) {
        existingSprites[imageName] = {};
    }

    let toAdd = readImage(source);

    if (reduceFactor !== 1) {
        toAdd = reduceImage(toAdd, reduceFactor);
    }

    let imageIn = addImageIn(existingPixels, imagesPerRow, slotSize, toAdd);
    
    if (existingSprites[imageName][categoryName] !== undefined) {
        if (existingSprites[imageName][categoryName].slot !== imageIn) {
            throw Error(`${imageName} already have an entry for ${categoryName}`);
        } else {
            return;
        }
    }

    existingSprites[imageName][categoryName] = {
        slot: imageIn,
        width: toAdd.width,
        height: toAdd.height
    };

    const result = new PNG({
        width: slotSize * imagesPerRow,
        height: existingPixels.length / (slotSize * imagesPerRow * 4),
        inputHasAlpha: true
    });

    result.data = existingPixels;
    
    let bufferPng = PNG.sync.write(result, { inputHasAlpha: true });
    fs.writeFileSync(destinationImage, bufferPng);
    fs.writeFileSync(destinationJSON, JSON.stringify(existingSprites, null, 2));
}

if (require.main === module) {
    fs.unlinkSync("output.png");
    fs.unlinkSync("output.json");

    let pathToGame = process.argv[2];
    console.error(pathToGame);

    let todo = [
        ["006.png", "Charizard"],
        ["006_1.png", "Charizard X"],
        ["006_2.png", "Charizard Y"],
        ["009.png", "Blastoise"]
    ]

    for (const tod of todo) {
        completeSpritesheet(
            "output.png",
            "output.json",
            "battler",
            pathToGame + tod[0],
            tod[1],
            3,
            128,
            2
        );
    }
}

module.exports = completeSpritesheet;
