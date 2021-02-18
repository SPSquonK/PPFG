
// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================


// Populate the list
let list = document.getElementById("ListOfSaveFiles");

for (let game of games) {
    let trElement = document.createElement("tr");

    function add(func) {
        let tdElement = document.createElement("td");
        func(tdElement);
        trElement.appendChild(tdElement);
    }

    function addText(text) {
        add(tdElement => tdElement.appendChild(document.createTextNode(text)));
    }

    addText("Pokemon " + game.game);
    addText(game.version);
    addText(game.date);
    addText(game.player);

    add(tdElement => {
        if (game.path === undefined) {
            tdElement.appendChild(document.createTextNode(game.save_file));
        } else {
            let aElement = document.createElement("a");
            aElement.setAttribute("href", game.path);
            aElement.appendChild(document.createTextNode("Save file"));
            tdElement.appendChild(aElement);
        }
    })

    add(tdElement => {
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

    list.appendChild(trElement);
}



// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================




let count = {};
let countMergedForms = {};

function addCount(name, form) {
    let addOne = (dict, n) => {
        if (dict[n] === undefined) {
            dict[n] = 0;
        }
        
        dict[n] += 1;
    };

    addOne(countMergedForms, name);

    if (form !== undefined) {
        name = name + " " + form;
    }

    addOne(count, name);
}

/** Populates the teams table with an image of every pokemon of the team */
function addTeam(title, team) {
    let table = document.getElementById("teams");
    
    let titleNode = document.createTextNode(title);
    
    let titleCell = document.createElement("th");
    titleCell.appendChild(titleNode);
    
    let titleRow = document.createElement("tr");
    titleRow.appendChild(titleCell);
    
    table.appendChild(titleRow);
    
    let teamNode = document.createElement("td");
    
    for (let pokemon of team) {
        let imgElement = document.createElement("img");
        imgElement.setAttribute('src', 'image/' + pokemon + '.png');
        teamNode.appendChild(imgElement);
    }
    
    let teamRow = document.createElement("tr");
    teamRow.appendChild(teamNode);
    table.appendChild(teamRow);
}

function addTeamDict(title, team) {
    let x = [];
    for (let pokemonSurname in team) {
        let pkmn = team[pokemonSurname];

        if (typeof pkmn === 'string' || pkmn instanceof String) x.push(pkmn)
        else if (pkmn.battler !== undefined) x.push(pkmn.battler);
        else if (pkmn.image !== undefined) x.push(pkmn.image);
        else {
            let name = pkmn.specie;
            if (pkmn.form !== undefined) name += "_" + pkmn.form;

            x.push(name);
        }

        // Stop the count
        if (typeof pkmn === 'string' || pkmn instanceof String) {
            addCount(pkmn);
        } else if (Array.isArray(pkmn.specie)) {
            for (let subPokemon of pkmn.specie) {
                addCount(subPokemon);
            }
        } else {
            addCount(pkmn.specie, pkmn.form);
        }
    }

    addTeam(title, x);
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
            if (a[1] < b[1]) return 1;
            if (a[1] > b[1]) return -1;
            return a[0] < b[1];
        })
    }

    let table = document.getElementById("cnt");

    for (let i = 0 ; i < arry.length ; ++i) {
        let row = document.createElement("tr");

        function app(x) {
            let name = document.createElement("td");
            let number = document.createElement("td");
            if (i < x.length) {
                name.appendChild(document.createTextNode(x[i][0]));
                number.appendChild(document.createTextNode(x[i][1]));
            }
        
            row.appendChild(name);
            row.appendChild(number);
        }

        app(arry);
        row.appendChild(document.createElement("td"));
        app(arry2)
        
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