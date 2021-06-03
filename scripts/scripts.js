const scripts = [
    {
        name: "Speedup",
        author: "KleinStudio",
        path: "speedup.rb",
        description: "Alt speeds up the game",
        reason: "Pokemon games are slow."
    },
    {
        name: "Show Hidden Items",
        author: "Reborn SWM",
        path: "hidden_items.rb",
        description: "Shows Hidden Items, without the use of Item Finder",
        reason: "Hiddens Items are boring: either you waste time looking for items, or you don't bother at all about this aspect (with the exception of some Hiddens Items that are obvious). Most of the time, hidden items are balanced items (like X Items, potions, ...) so it doesn't hurt to collect all of them."
    },
    {
        name: "Skip HP bar animation",
        author: "Reborn SWM",
        path: "no_hp_animation.rb"
    },
    {
        name: "Smoother Grinding",
        author: "SquonK",
        path: "faster_.rb",
        description: "Less text boxes when a Pokemon tries to learn a move. No level up scene.",
        reason: "To complete a living dex, lots of Pokemon have to be leveled up. But for these Pokemon, stats and moves are not important. This script removes useless textboxes without hindering the regular party ability to learns moves."
    },
    {
        name: "Diffs",
        author: "SquonK",
        path: "diffs.diff",
        description: "Various modifications"
    }
]

function wrapElement_(name, element) {
    let el = document.createElement(name);
    el.appendChild(element);
    return el;
}


for (const script of scripts) {
    const script_sections = document.getElementById("scripts_section");

    let scriptName = document.createTextNode(script.name + " (" + script.author + ")");
    let authorName = document.createTextNode(script.author);
    let description = script.description ? document.createTextNode(script.description) : undefined;
    let reason = script.reason ? document.createTextNode(script.reason) : undefined;

    let block = document.createElement("div");
    block.appendChild(wrapElement_("h3", scriptName));

    fetch("scripts/" + script.path)
        .then(response => response.text())
        .then((data) => {
            let textarea = document.createElement("textarea");
            textarea.setAttribute("cols", "80");
            textarea.setAttribute("rows", "10");
            textarea.appendChild(document.createTextNode(data));
            block.appendChild(textarea);
        });
    
    script_sections.appendChild(block);
}
