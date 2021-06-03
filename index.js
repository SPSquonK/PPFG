
const templates = {
    sprite: document.getElementById("template_sprite").innerHTML,
    savehub_line: document.getElementById("template_savehub").innerHTML,
    fullteam: document.getElementById("template_fullteam").innerHTML
};

// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================

class Pokemon {
    constructor(content) {
        this.content = content;

        if (typeof content === 'string' || content instanceof String) {
            this.main    = true;

            this.icon    = content;
            this.battler = content;
            this.specie  = content;
        } else {
            this.main    = content.main !== false;
            this.specie  = content.specie;

            if (content.image !== undefined) {
                this.icon    = content.image;
                this.battler = content.image;
            } else {
                let url = content.specie;
                if (url !== undefined && content.form !== undefined) {
                    url += "_" + this.content.form;
                }

                this.icon = url;
                this.battler = url;
            }

            if (content.icon !== undefined) {
                this.icon = content.icon;
            }

            if (content.battler !== undefined) {
                this.battler = content.battler;
            }
        }
    }

    isMain() { return this.main; }

    toHtmlIcon() { return makeElementForSprite(this.icon); }

    /**
     * Return a list of Pokemon that composes this Pokemon
     * Most of the time, it is this Pokemon.
     * 
     * "Unfuses" Kyurem, Necrozma, Calyrex and Infinite Fusion pokemons.
     */
    getIndividualSpecies() {
        if (typeof this.content === 'string' || this.content instanceof String) {
            return [this];
        } else if (Array.isArray(this.specie)) {
            let list = [];

            for (let subPokemon of this.specie) {
                let pkmn = {... this.content};
                pkmn.specie = subPokemon;
                list.push(new Pokemon(pkmn));
            }

            return list;
        } else {
            return [this];
        }
    }

}



function makeElementForSprite(spriteUrl) {
    return Mustache.render(templates.sprite, spriteUrl);
}


// Populate the list
let list = document.getElementById("ListOfSaveFiles");

for (let game of games) {
    if (game.history !== undefined) {
        game.version = game.history[0].version + " > " + game.history[game.history.length - 1].version;
        game.date = game.history[0].date + "+";
        game.path = game.history[game.history.length - 1].path;
    }

    let content = {
        team: Object.keys(game.pokemons || {})
                .map(key => new Pokemon(game.pokemons[key]))
                .filter(pokemon => pokemon.isMain())
                .map(pokemon => pokemon.toHtmlIcon())
                .join(''),
        game: game.game,
        date: game.date,
        version: game.version,
        player: game.player
    };

    function add(func) {
        let tdElement = document.createElement("td");
        func(tdElement);
        return tdElement.innerHTML;
    }

    content.savefile = add(tdElement => {
        if (game.path === undefined) {
            tdElement.appendChild(document.createTextNode(game.save_file));
        } else {
            let aElement = document.createElement("a");
            aElement.setAttribute("href", "saves/" + game.path);
            aElement.appendChild(document.createTextNode("Save file"));
            tdElement.appendChild(aElement);
        }
    })

    content.comment = add(tdElement => {
        if (game.comments === undefined) {
            if (game.comments_d === undefined) {
                tdElement.appendChild(document.createTextNode(""));
            } else {
                let first = true;
                for (let d in game.comments_d) {
                    if (!first) {
                        tdElement.appendChild(document.createTextNode(" / "));
                    } else {
                        first = false;
                    }

                    let aElement = document.createElement("a");
                    aElement.setAttribute("href", game.comments_d[d]);
                    aElement.appendChild(document.createTextNode(d));
                    tdElement.appendChild(aElement);
                }
            }
        } else {
            let aElement = document.createElement("a");
            aElement.setAttribute("href", game.comments);
            aElement.appendChild(document.createTextNode("Comments"));
            tdElement.appendChild(aElement);
        }
    })

    let render = Mustache.render(templates.savehub_line, content);
    list.insertAdjacentHTML('beforeend', render);
}



// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================




let count = {};
let countMergedForms = {};

function addCount(icon, name, form, family, ignore_specie_name) {
    let addOne = (dict, n, icon) => {
        if (dict[n] === undefined) {
            dict[n] = [];
        }
        
        dict[n].push(icon);
    };

    function toBase(pkmn) {
        if (families[pkmn] === undefined) {
            return "$" + pkmn;
        } else {
            return families[pkmn];
        }
    }

    addOne(countMergedForms, toBase(family || name), icon);

    if (form !== undefined) {
        if (ignore_specie_name) {
            name = form;
        } else {
            name = name + " " + form;
        }
    }

    addOne(count, name, icon);
}

function addTeamDict(title, team) {
    let x = [];
    for (let pokemonSurname in team) {
        let pkmn = new Pokemon(team[pokemonSurname]);

        x.push(pkmn.battler);

        for (let specie of pkmn.getIndividualSpecies()) {
            let c = specie.content;
            addCount(specie.icon, specie.specie, c.form, c.family, c.ignore_specie_name);
        }
    }

    // Populates the teams table with an image of every pokemon of the team
    let table = document.getElementById("teams");
    let content = Mustache.render(templates.fullteam, { title, team: x });
    table.insertAdjacentHTML('beforeend', content);
}

function fillCounts() {
    let arry = [];
    let arry2 = [];
    
    for (let pokemon in count) {
        arry.push([pokemon, count[pokemon]]);
    }
    for (let pokemon in countMergedForms) {
        arry2.push([pokemon, countMergedForms[pokemon]]);
    }
    
    for (let x of [arry, arry2]) {
        x.sort((a, b) => {
            if (a[1].length < b[1].length) return 1;
            if (a[1].length > b[1].length) return -1;
            return a[0] > b[0];
        })
    }

    let table = document.getElementById("cnt");

    for (let i = 0 ; i < arry.length ; ++i) {
        let row = document.createElement("tr");

        function app(x, numberMaker) {
            let name = document.createElement("td");
            let number = document.createElement("td");
            if (i < x.length) {
                name.appendChild(document.createTextNode(x[i][0]));
                number.appendChild(numberMaker(x[i][1]));
                // number.appendChild(document.createTextNode(x[i][1].length));
            }
        
            row.appendChild(name);
            row.appendChild(number);
        }

        app(arry, pkmnList => document.createTextNode(pkmnList.length));

        row.appendChild(document.createElement("td"));

        app(arry2,
            pkmnList => {
                let iconLine = document.createElement("span");
                for (let icon of pkmnList) {
                    iconLine.insertAdjacentHTML('beforeend', makeElementForSprite(icon));
                }
                return iconLine;
            }
        );
        
        table.appendChild(row);
    }
    
}

function main() {
    for (const saveFile of games) {
        if (saveFile["pokemons"] !== undefined) {
            addTeamDict(
                saveFile["game"] + " - " + saveFile["player"],
                saveFile["pokemons"]
            );
        }
    }
    
    fillCounts();
}

main();
