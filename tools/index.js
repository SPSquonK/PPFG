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
                type: 'fuzzypath',
                name: 'path',
                message: 'Where is the game folder?',
                itemType: 'directory',
                default: "B:\\JeuxPokemon\\Rejuvenation - V12",
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

                spritesheetCompleterHandler(battlers, icons);
            }
        });
    }

    function spritesheetCompleterHandler(battlers, icons) {
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
                when(answers) { return answers.name !== ''; }
            }
        ]).then(answers => {
            if (answers.name === '' || answers.name === undefined) {
                mainMenu();
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

            let iconPath = path.join(icons, "icon" + answers.number + ".png");
            if (!fs.existsSync(iconPath)) {
                let without_ = answers.number.indexOf("_");
                if (without_ === -1) {
                    console.log(iconPath + " does not exist");
                    return;
                }

                const oldPath = iconPath;

                let newNumber = answers.number.substr(0, without_);
                iconPath = path.join(icons, "icon" + newNumber + ".png");
                if (!fs.existsSync(iconPath)) {
                    console.log(oldPath + " does not exist");
                    console.log(iconPath + " does not exist");
                    return;
                }
            }

            console.log("= " + answers.name);
            console.log(battlerPath);
            console.log(iconPath);
            
            spritesheetMaker(
                spritesheetBattler.path,
                spritesheetJson,
                "battler",
                battlerPath,
                answers.name,
                spritesheetBattler.size,
                128,
                2
            );
            
            spritesheetMaker(
                spritesheetIcon.path,
                spritesheetJson,
                "icon",
                iconPath,
                answers.name,
                spritesheetIcon.size,
                128,
                1
            );
        })
        .catch(err => console.error(err))
        .finally(() => spritesheetCompleterHandler(battlers, icons));
    }

    mainMenu();
}

if (require.main === module) {
    main();
}
