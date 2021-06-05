'use strict';

const spritesheetMaker = require('./spritesheet-maker.js');
const fs = require('fs');

const spritesheetJson = '../assets/spritesheets.json';
const spritesheetBattler = { path: '../assets/battlers.png', size:  6 };
const spritesheetIcon    = { path: '../assets/icons.png'   , size: 12 };

const pokemonNames = require('./pokemon_names.json');

function main() {
    const inquirer = require('inquirer');
    const path = require('path');

    inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

    let prompt = inquirer.createPromptModule();

    function mainMenu() {
        prompt([
            {
                type: 'list',
                name: 'menu',
                message: "What do you want to do?",
                choices: ['Spritesheet completer', 'Exit']
            },
            {
                type: 'input',
                name: 'gamename',
                message: 'What is the game name? ',
                when(answers) {
                    return answers.menu === 'Spritesheet completer'
                }
            },
            {
                type: 'fuzzypath',
                name: 'path',
                message: 'Where is the game folder? ',
                itemType: 'directory',
                excludeFilter: nodePath => nodePath == '.',
                when(answers) {
                    return answers.menu === 'Spritesheet completer'
                }
            }
        ]).then(answers => {
            if (answers.menu === 'Exit') return;
            if (answers.menu === 'Spritesheet completer') {
                const battlers = path.join(answers.path, "Graphics", "Battlers");
                const icons = path.join(answers.path, "Graphics", "Icons");

                spritesheetCompleterHandler(answers.gamename, battlers, icons);
            }
        });
    }

    function spritesheetCompleterHandler(gamename, battlers, icons) {
        prompt([
            {
                type: 'input',
                message: 'Name of the pokemon/form',
                name: 'name'
            },
            {
                type: 'input',
                name: 'number',
                message: "Number (with eventually the form number)",
                when(answers) {
                    if (answers.name === undefined) return false;
                    if (answers.name === '') return false;
                    let c = answers.name;
                    c = c.toUpperCase();
                    return pokemonNames[c] === undefined;
                }
            }
        ]).then(answers => {
            if (answers.name === '' || answers.name === undefined) {
                mainMenu();
            }
            
            if (pokemonNames[answers.name.toUpperCase()] !== undefined) {
                answers.number = pokemonNames[answers.name.toUpperCase()];
            }

            if (answers.number[0] < '0' || answers.number[0] > '9') {
                let s = answers.number.split(" ");
                let name = s[0].toUpperCase();
                let number = pokemonNames[name];
                if (number === undefined) {
                    console.log(name + " does not exist");
                }

                if (s.length > 1) {
                    answers.number = number + "_" + s[1];
                } else {
                    answers.number = "" + number;
                }
            }

            let battlerPath = path.join(battlers, answers.number + ".png");
            if (!fs.existsSync(battlerPath)) {
                console.log(battlerPath + " does not exist");
                return;
            }

            let failed = [];
            let iconPath = testIconName(icons, answers.number, failed);

            let formNumberIfRemoved = null;
            if (iconPath === null) {
                // Try removing form number
                let positionOf_ = answers.number.indexOf("_");
                if (positionOf_ !== -1) {
                    formNumberIfRemoved = answers.number.substr(positionOf_);
                    answers.number = answers.number.substr(0, positionOf_);
                    iconPath = testIconName(icons, answers.number, failed);
                }
            }

            if (iconPath === null) {
                // Try removing shiny
                if (answers.number[answers.number.length - 1] === "s") {
                    answers.number = answers.number.substr(0, answers.number.length - 1);
                    
                    let comeBack = answers.number;
                    if (formNumberIfRemoved !== null) {
                        answers.number = answers.number + formNumberIfRemoved;
                        iconPath = testIconName(icons, answers.number, failed);
                    }

                    if (iconPath === null) {
                        answers.number = comeBack;
                        iconPath = testIconName(icons, answers.number, failed);
                    }
                }
            }

            if (iconPath === null) {
                failed.forEach(path => console.log(path + " does not exist"));
                return;
            }
            
            console.log("= " + answers.name);
            console.log(battlerPath);
            console.log(iconPath);
            
            spritesheetMaker(
                spritesheetBattler.path, spritesheetJson, "battler",
                battlerPath, gamename + "/" + answers.name,
                spritesheetBattler.size, 128, 2
            );
            
            spritesheetMaker(
                spritesheetIcon.path   , spritesheetJson, "icon",
                iconPath   , gamename + "/" + answers.name,
                spritesheetIcon.size   ,  64, 1
            );
        })
        .catch(err => console.error(err))
        .finally(() => spritesheetCompleterHandler(gamename, battlers, icons));
    }

    function testIconName(iconFolder, iconName, tried) {
        let iconPath = path.join(iconFolder, "icon" + iconName + ".png");
        if (fs.existsSync(iconPath)) {
            return iconPath;
        }

        if (tried.find(x => x === iconName) === undefined) {
            tried.push(iconPath);
        }

        return null;
    }

    mainMenu();
}


if (require.main === module) {
    main();
}
