const pokemons = {
    // Main = Played a significant role (no value implies true)
    // Not main = Was used but does not fit the 6 displayed slots
    // Commentated = Trained but either unused because end of the game or was bad or anything
    Reborn: {
        Anna: {
            // Every name refers to a friend (if we suppose that I'm a friend of myself)
            "JuJu": { specie: "Sceptile", image: "Sceptile_Mega" },
            "Sguel": { specie: "Swoobat", main: false },
            "Vignefranche": { specie: "Magcargo" },
            "Big Mac": { specie: "Ampharos", image: "Ampharos_Mega"},
            "Stehpen": { specie: "Pangoro", main: false },
            "Blondie": { specie: "Rapidash", main: false } /* Not sure if I should give the last main slot to her or Pietro */, 
            "VValid": "Typhlosion",
            "Maléfice": { specie: "Ninetales", form: "Alola", image: "Ninetales_Alola", main: false },
            "JoJo": { specie: "Greninja", battler: "Greninja_Reborn" },
            "Pietro": "Primarina",
            // -- Not actually used pokemons
            // "Rice Soul": "Serperior"
            // "Bocal": "Naganadel"
            // "Lulu": "Flygon"
        },
        Agathe: {
            "Burnout": "Delphox",           // Burnout 3
            "El magiciano": "Alakazam",
            "A girafe": { specie: "Girafarig", main: false },
            "Waifu": "Gardevoir",
            "Husbando": "Gallade",
            "Deus Ex": "Metagross",         // Machina
            "Fast Sis": "Slowbro"
        }
    },
    Insurgence: {
        // Notes:
        // - Every actually used pokemons are able to Mega Evolve
        // - Despite this, I don't even own the Ampharosite as it can function without it, and I considered it to be
        // more interesting to mega evolve a Pokemon able to sweep / a Hubris user
        // - Gallade also didn't mega evolve, because increasing Hypnosis precision was more interesting that increasing
        // its damages.
        "FlowerPower": { specie: "Venusaur", form: "Delta", image: "Venusaur_Delta_Mega" },
        "Jaw": { specie: "Feraligatr", image: "Feraligatr_Mega_Insurgence" },
        "Inferno": { specie: "Typhlosion", image: "Typhlosion_Mega_Insurgence" },
        // Name refers to the fact that I did half of the game with only FP / Jaw / Inferno, so he is almost the chosen one
        "The Fourth": "Ampharos",
        // Found in a nest of Ariados, but he is the fifth party member
        "Ariacinque": { specie: "Metagross", form: "Delta_Spider", image: "Metagross_DeltaSpider_Mega" },
        // One of the reason why I played Insurgence is because I thought we could use Crystal form + Mega evolution in
        // the same fight, and also because I thought Metagross Delta Ruin Crystal was awesome. Metagross Delta Ruin is
        // unvailable the whole game, and is kind of bad, so rip.
        // "SixSixSix": { specie: "Metagross", form: "Delta_Ruin", image: "Metagross_DeltaRuin_Crystal", main: false },
        // Mainly for battle frontier. This Metagross was still kind of used, but no to the extent of the five mains
        // party members. And the real 6th party member was used a lot so he deserves some credits.
        "Seventh Hvn": { specie: "Metagross", image: "Metagross_Mega", main: false },
        // -- Trained but not really used in practice
        // "No Weakness": { specie: "Volcarona", form: "Delta", image: "Volcarona_Delta_Armored", main: false },
        // "Scaling Dog": { specie: "Arcanine": form: "Delta", image: "Arnanine_Delta", main: false },
        // And this is the real 6th party member, which actually was mostly acting on its own as a Pokemon Catcher / trainer
        "The Voice": "Gallade"
    },
    Rejuvenation: {
        Anna: {
            // All the following Pokemon actually had good usage
            "Kuro Hàha": { specie: "Greninja", battler: "Greninja_Rejuvenation" },
            "Bravest": { specie: "Talonflame", main: false, battler: "Smogonbird" },
            "Niho Hahn": { specie: "Nidoking", main: true },
            "Ouho Uhaf": { specie: "Lycanroc", main: false, image: "Lycanroc_Dusk" },
            "The Bro": { specie: "Zebstrika", main: false },
            // Members of the Fuck Terrain Squad
            "NastyFlower": "Venusaur" /* Grassy Terrain */,
            "Fire Starter": "Torkoal" /* Sun to help Venusaur */,
            "Err Upsion": "Typhlosion", /* If I have Grassy Terrain and Sun, I can just burn the world */
            // Other pokemons
            "Mouh Thon": "Ampharos",
            // Was supposed to be used with False Swipe + Yawn. Dropped the idea
            // "Blatoise": "Blastoise",
            // Late Game Cleaners
            "TheRainMan": { specie: "Kingdra", main: false },
            "TFW No Mega": { specie: "Flygon", main: false },
            "Dataset": { specie: "Metagross", main: false },
            "Pyrite": { specie: "Ninetales", form: "Alola", image: "Ninetales_Alola", main: false },
            "Dogar": { specie: "Zygarde", form: "10%", image: "Zygarde_10", main: false },
            "Trinity": { specie: "Hydreigon", main: false } /* Trained by Anna but mostly unused by her, used by Lillia */
        },
        Lillia: {
            // Lillia was played with a set level cap to 85 on Hard Difficulty,
            // When I reached the max level on Serperior, I authorized myself
            // to use Anna's Pokemon using a SharedBox script.
            // AFAIR, Metagross, Kingdra and Hydreigon were the most used
            // Pokemon from Anna
            "Snivy West": "Serperior",
            // Ok so why do I have two Talonflame: this one kept the Quick Guard
            // move to beat Yveltal.
            "Guardian": { specie: "Talonflame", battler: "Smogonbird" },
            "Flip Flap": "Cinccino",
            "PewPew~": { specie: "Espeon", main: true },
            "Front-end": { specie: "Rapidash", main: false },
            "Tyrany": "Tyranitar",
            "Aqua 404": { specie: "Vaporeon", battler: "Vaporeon_Shiney" },
            // Fire Squad, mostly unused
            "Top Chef": { specie: "Rotom", form: "Heat", image: "Rotom_Heat", main: false },
            "Beast Killer": { specie: "Marowak", form: "Alola", image: "Marowak_Alola", main: false },
            // Did you know that +6 Charizard still couldn't one shot some Pokemons ?
            // "Dragon Feu": { specie: "Charizard", main: false },
            "Gang Master": { specie: "Krookodile", main: false },
        },
        Rounoi: {
            // Fighting avorted mono. Had to hack all the fighting starters
            // because there are no fighting pokemon available up to Venam and
            // Pulse Mushana.
            // Jangmo-o is the true starter.
            "MonteLeSon": "Hakamo-o",
            "Shiel": "Quilladin",
            "Roti": "Pignite",
            "Service RH": "Monferno",
            "Un poussin": "Combusken",
            "Yoga Girl": "Meditite",
            "Secret Box": "Hariyama"
        }
    },
    "Empyrean": {
        "Anna": {
            // I'm a bit salty to have lost them
            // Rox et Rouky
            "Rox": { specie: "Delphox", battler: "Delphox_Mega_Empyrean", sex: "Male" },
            // Discount Zapdos
            "Zaptres": { specie: "Swellow", form: "Omuran", sex: "Female" },
            // Discount Skarmory
            "SKaRM CReW": { specie: "Honchkrow", form: "Omuran", sex: "Female" },
            // Good / Bad
            "Bad Riz": { specie: "Goodra", battler: "Goodra_Empyrean", sex: "Male", main: false },
            "Tony H4wk": { specie: "Lucario", form: "Omuran", sex: "Male" },
            "Jardinier": { specie: "Ursaring", form: "Omuran", sex: "Male" },
            // THE WARUDO
            "Dio?!": { specie: "Celebi", form: "Omuran" }
        },
        "Océane": {
            // Primarina -> Lana -> Lana Rain
            "Rain": { specie: "Primarina", battler: "Primarina_Mega_Empyrean" },
            "Maximum": { specie: "Averat", main: false },
            "Fulgur": { specie: "Machamp", form: "Omuran" },
            "Laouni": { specie: "Mienshao", form: "Omuran", main: false },
            "Mario": "Krookodile",
            "Bene": "Typhlosion",
            "Ariane": { specie: "Lucario", form: "Omuran" },
            "Celebi": { specie: "Celebi", form: "Omuran" }
            // + Skarm Crew and Zap as the reincarnation of the fallen ones
        }
    },
    Shield: {
        "Cinderace": { specie: "Cinderace", battler: "Cinderace_Zero" },
        "Rillaboom": "Rillaboom",
        "Friday": "Blastoise",
        "Slowbro": { specie: "Slowbro", form: "Galar" },
        "Rapidash": { specie: "Rapidash", form: "Galar" },
        "Shirai": "Krookodile" // Krookodile was actually a solo run
    },
    InfiniteFusion: {
        // Charizard name : DragonFeu. True starter is Charizard
/* Charizard */ "DragonFeu": { specie: [ "Feraligatr", "Charizard" ], battler: "IF_Toto", icon: "Charizard_Feraligatr", main: false },
        "Top%": { specie: "Rattatac", main: false, battler: "IF_Top" },
        // "King": { specie: "Nidoqueen", battler: "IF_King" }
        "Queen": { specie: "Nidoking", battler: "IF_Queen" },
        "Magic": { specie: "Alakazam", battler: "IF_Magie" },
/* Gengar */ "Cui Cui": { specie: [ "Gengar", "Zapdos" ], battler: "IF_Cuicui", icon: "Gengar_Zapdos" },
/* Gengar */ "Gen2": { specie: [ "Gengar", "Mewtwo" ], battler: "IF_Gen2", icon: "Gengar_Mewtwo" },
        // Her main purpose was to serve as a fusion for Brule, but Brule ended up
        // possessed by a 3rd Gengar after seeing that the Typhlosion - Ninetales
        // cooperation wasn't bringing good results
        // "Leona": { specie: "Ninetales", battler: "IF_Leona" },
        // Brule is actually Typhlosion's name.
/* Typhlosion */ "Brule": { specie: [ "Typhlosion", "Gengar" ], battler: "IF_Brule", icon: "Typhlosion_Gengar" },
        // (Zapdos) -> Cuicui
        // (Feraligatr) (Toto) -> DragonFeu
        // (Mewtwo) -> Gen2
        // (Gengar) -> Brule
        /* Catcheur was temporarly fused to Rayquaza but it was better to actually let it alone */
        "Catcheur": { specie: "Scizor", battler: "IF_Catcheur", main: false },
        "Kyurem": { specie: [ "Kyurem", "Reshiram", "Zekrom" ], battler: "IF_Kyurem", icon: "Kyurem_100" }
    },
    SoulStone: {
        Agathe: {
            "Snowball": "Feraligatr",
            "Bzzt": "Galvantula",
            "BugCatcher": "Parasect",
            "Le Roi": "Nidoking",
            // Refers to the tail
            "Fractale": "Espeon",
            // I wanted 5000 IQ but the Q key is glitched with control remapping.
            "Super PC": { specie: "Metagross", battler: "Metagross_Mega_Soulstone", icon: "Metagross_Mega" },
            "Cash Money": { specie: "Smeargle", battler: "Smeargle_Shiny", main: false }
        },
        Nier: {
            "Dragonite": { specie: "Gastrodon", form: "Gastronite", ignore_specie_name: true, icon: "Gastronite", battler: "Gastronite_Shiney" },
            "Drampa"   : { specie: "Gastrodon", form: "Gastrampa" , ignore_specie_name: true, image: "Gastrampa"  },
            "Haxorus"  : { specie: "Gastrodon", form: "Haxodon"   , ignore_specie_name: true, image: "Haxodon"    },
            "Kommo-o"  : { specie: "Gastrodon", form: "Gastro-o"  , ignore_specie_name: true, image: "Gastroo"   },
            "Hydreigon": { specie: "Gastrodon", form: "Gastreigon", ignore_specie_name: true, image: "Gastreigon" },
            "Altaria"  : { specie: "Gastrodon", form: "Altaradon" , ignore_specie_name: true, icon: "Altaradon", battler: "Altaradon_Shiney"  }
        },
        Monoruns: {
/* Lillie */    "Cristal"   : {              specie: "Venusaur"  , form: "Epoch" },                              
/* Lillie */ // "Shiron"    : { main: false, specie: "Ninteales" , form: "Alola" }, - relevant only during 2 battles
/* Someone */   "Fishing"   : {              specie: "Gyarados"  , form: "Epoch" },               
/* Vivi */      "Agenoux"   : {              specie: "Alakazam"  , form: "Epoch" },           
/* Vivi */   // "Alakazam"  : { main: false, specie: "Alakazam"  , form: "Epoch" },   
/* Broke */     "Captain"   : {              specie: "Kingler"   , form: "Epoch" },        
/* Broke */     "Feros"     : { main: false, specie: "Rhydon"    , familiy: "Rhyperior" },
/* Broke */     "Toc"       : { main: false, specie: "Rhyperior"  },
/* Erika */     "Venufather": { main: true , specie: "Venusaur"   },
/* Erika */     "LE SOLEIL" : { main: true , specie: "Victreebel", battler: "Victreebel_Mega_Soulstones", icon: "Victreebel_Mega_Soulstones" },
/* Erika */     "Venuson"   : { main: false, specie: "Venusaur"   },
/* Claire */    "Minidraco" : { main: true , specie: "Gastrodon" , form: "Gastronite", ignore_specie_name: true, icon: "Gastronite", battler: "Gastronite" },
/* Claire */    "Hyporeine" : { main: false, specie: "Kingdra"    },
/* Zerus */     "Coxy"      : { main: true , specie: "Ledian"     },
/* Zerus */     "Beurre III": {              specie: "Butterfree" },
/* Zerus */     "4 Heures"  : { main: false, specie: "Scyther"   , family: "Scizor" },
/* Acerola */   "Blondie?!" : { main: true , specie: "Rapidash"  , form: "Epoch" },
/* Acerola */   ":("        : { main: false, specie: "Chandelure" },
/* Acerola */   ":>"        : { main: true , specie: "Dusknoir"  , form: "Epoch" },
/* SquonK */    "M E T A"   : {              specie: "Metagross" , battler: "Metagross_Mega_Soulstone", icon: "Metagross_Mega" },
/* SquonK */ // "Beldum"    : { main: false, specie: "Beldum" }
        },
        Kathleen: {
            "Metagross": "Metagross" , "Smeargle": "Smeargle"
        },
        KaineWest: {
            // Trainer name:
            // - It's my first (and probably only) savefile started in V2.0.0
            // / Season 3. The name is a reference to my first save file in
            // V1.5 / Season 2: Nier. Kaine is one of the companion of Nier
            // - Obviously a pun with Kanye West

            // Typhlosion learns Inferno -> Hell -> The Hell Song -> Sum 41
            "Four Thx I": { specie: "Typhlosion", image: "Typhlosion_Mega_Soulstones" },
            // ...
            "Knuckles"  : { specie: "Excadrill"                                       },
            // I somehow decided to refer to this group of 3 Magnemites as Magnemites (in french)
            "Magnétis"  : { specie: "Magneton"                                        },
            // MEEEEEGAAAAAAAAAA
            "Méga"      : { specie: "Metagross" , battler: "Metagross_Mega_Soulstone", icon: "Metagross_Mega"},
            // Marlène Schiappa
            "Marlène"   : { specie: "Ampharos"  , main: false              },
            // Noctali is Umbreon's french name, it is also the surname of Noctis in FF15
            "Noc"       : { specie: "Umbreon"                              },
            // Sounds like a dragon cry, mostly a reference to Sieur PC's stream
            "Agrougrou" : { specie: "Charizard", image: "Charizard_Mega_Y" }
        }
    },
    Zero: {
        // -- Adventure
        // Shell Smash
        "Smash": { specie: "Blastoise", battler: "Blastoise_Mega_Zero", icon: "Blatoise_Mega" },
        "Jean-Michel": { specie: "Parasect", battler: "Parasect_Zero" },
        "La Tank": { specie: "Ampharos", battler: "Ampharos_Mega_Zero", icon: "Ampharos_Mega" },
        "Donphan": { specie: "Donphan", battler: "Donphan_Zero", main: false },
        "Venusaur": { specie: "Venusaur", battler: "Venusaur_Zero" },
        "Metagross": { specie: "Metagross", battler: "Metagross_Mega_Zero", icon: "Metagross_Mega" },
        // -- Post game
        "Playboy": { specie: "Cinderace", battler: "Cinderace_Zero", main: false },
        // -- I used him instead of Metagross because I couldn't stand misses
        "Gym Trainer": { specie: "Mewtwo", battler: "Mewtwo_Zero" }
    },
    "Blue & White": {
        // It's written in his book.
        "Alain": "Vespyre",
        // Same kind of Pokemon as Omuran Swellow, so its nicknamed after his cousin.
        "Zapquadro": { specie: "Zap Zap", image: "Zap_Zap" },
        // Banana -> slip -> drift -> DEJA VU
        "Initial D": "Halakik",
        // Coon -> The Coon -> Mysterion -> Mysteria
        "Mysteria": "Fircoon",
        "Ouuh Ahaf": "Snowbreak",
        // I'm sorry but I kind of don't want to flat out write Israel (or any
        // real country beside France) on my website so I'll go with IL
        "To the top": { specie: "Kabutops", form: "IL" }
    },
    "The Camry Legend 2": {
        "Final D": "Leafeon",
        "Surprise": "Kricketune",
        "Biatch": "Rapidash",
        "Majo": "Mismagius",
        "Fluff": "Altaria",
        // It was basically a Surf slave
        // "Jhin": "Slowking"
    },
    "Round": {
        "Bowling": "Golem",
        "Electrocute": {specie: "Magneton", family: "Magnezone" },
        "Bouh": { specie: "Haunter", battler: "Haunter_Shiney", family: "Gengar" }
    },
    "Bushido": {
        "Jungle": { specie: "Sceptile", image: "Sceptile_Bushido" },
        "The fast": { specie: "Slowbro", form: "Galar" },
        "Doggo": "Lucario",
        "Mewblue": "Manaphy"
    },
    SolarLight: {
        "Salade": "Salaslam",   // Salade carried hard
        "Buggy": "Casspring",
        "Tiloup": "Werehide",
        "Pownii": "Horshush",
        "Titewaf": "Rushot",
        "Tifan": "Elestomp"
    }
};


// Save Files
const games = [
    {
        game: "Reborn",
        version: "V18.1",
        date: "2019-09/10",
        player: "Anna",
        path: "Reborn_Anna.rxdata",
        living_dex: "Available",
        pokemons: pokemons.Reborn.Anna,
        comments: "https://gist.github.com/SPSquonK/e76abcca96ffdd6dc518525e692cd351"
    },
    {
        game: "Reborn",
        version: "V18.1",
        date: "2019-12",
        player: "Agathe",
        path: "Reborn_Agathe.rxdata",
        living_dex: "Shared",
        pokemons: pokemons.Reborn.Agathe
    },
    {
        game: "Insurgence",
        version: "1.2.7",
        date: "2020-07",
        player: "Anna",
        path: "Insurgence.rxdata",
        comments: "https://gist.github.com/SPSquonK/584e3208451fd4ae5e887641e0fd35aa#file-pokemoninsurgence-md",
        living_dex: "Full",
        pokemons: pokemons.Insurgence
    },
    {
        game: "Rejuvenation",
        version: "V12",
        date: "2020-07",
        player: "Anna",
        path: "Rejuvenation_Anna.rxdata",
        comments: "https://gist.github.com/SPSquonK/2a010fd6448cf80c72df3e838b34cde3#file-pokemonrejuvenation-md",
        living_dex: "Available - Magby+",
        pokemons: pokemons.Rejuvenation.Anna
    },
    {
        game: "Rejuvenation",
        version: "V12",
        date: "2020-08",
        player: "Lillia",
        path: "Rejuvenation_Lillia.rxdata",
        living_dex: "Shared",
        pokemons: pokemons.Rejuvenation.Lillia
    },
    {
        game: "Shield",
        version: "",
        date: "2020-09",
        player: "Anna",
        save_file: "",
        comments: "https://gist.github.com/SPSquonK/8935b20656865207f6860f25e31fb5d8",
        living_dex: "New Pokemon - No Zacian but 2 Zamazenta",
        pokemons: pokemons.Shield
    },
    {
        game: "Empyrean",
        version: "V1.0.0",
        date: "2020-09",
        player: "Anna",
        comment: "Lost my save because it was not stored in the Saved Games folder",
        save_file: "RIP",
        comments_d: {
            "Small Comments": "https://gist.github.com/SPSquonK/67de420974560efa8062c410704bc9a8"
        },
        living_dex: "Catchable",
        pokemons: pokemons.Empyrean.Anna
    },
    {
        game: "Empyrean",
        version: "V1.0.1",
        date: "2020-09",
        player: "Océane",
        path: "Empyrean_Oceane.rxdata",
        comments_d: {
            "Rainbow Notes": "https://gist.github.com/SPSquonK/85b204466680ca6d48e30c05442f0096"
        },
        living_dex: "No",
        pokemons: pokemons.Empyrean["Océane"]
    },
    {
        game: "Infinite Fusion",
        version: "V4.8",
        date: "2020-10",
        player: "J'ai Six Cas",
        path: "InfiniteFusion_Jessica.rxdata",
        comments: "https://gist.github.com/SPSquonK/d769ca9cd6b5e611a3ae1d4631c12aca#file-infinitefusion-md",
        living_dex: "No",
        pokemons: pokemons.InfiniteFusion
    },
    {
        game: "Soulstones",
        player: "Agathe",
        history: [
            { version: "V1.0.17", date: "2021-01"   , path: "Soulstones_01_Agathe_V1-0-17.rxdata" },
            { version: "V1.5"   , date: "2021-02-27", path: "Soulstones_01_Agathe_V1-5-0.rxdata"  },
            { version: "V1.5.3" , date: "2021-04-03", path: "Soulstones_01_Agathe_V1-5-3.rxdata"  }
        ],
        comments: "https://gist.github.com/SPSquonK/797d222a45987a13a2e63e087a8ca849#file-pokemonsoulstone-md",
        living_dex: "Available",
        pokemons: pokemons.SoulStone.Agathe
    },
    {
        game: "Zero",
        version: "V0.10.2",
        date: "2021-01",
        player: "Anna",
        path: "Zero_Anna.rxdata",
        comments: "https://gist.github.com/SPSquonK/6f21c3e30dd3a884becff5f4f3d90f34#file-pokemonzero-md",
        living_dex: "Available",
        pokemons: pokemons.Zero
    },
    {
        game: "Blue And White",
        version: "",
        date: "2021-02",
        player: "Marion",
        path: "BlueWhite_Marion.rxdata",
        living_dex: "Full",
        pokemons: pokemons["Blue & White"],
        comments: "https://gist.github.com/SPSquonK/98dbbc9745966eb387d8cdc3515273c7"
    },
    {
        game: "The Camry Legend 2",
        version: "V1.2",
        date: "2021-02",
        player: "Anna",
        path: "CamryLegend2.rxdata",
        comments_d: { "Bugs / Issues": "https://gist.github.com/SPSquonK/82e728a785354b196ebedbc220e5b9a6#file-pokemoncamrylegend2-md" },
        living_dex: "Final Clean Up",
        pokemons: pokemons["The Camry Legend 2"]
    },
    {
        game: "Round Edition - The Redux",
        version: "",
        date: "2021-02",
        player: "Cindy",
        path: "Round_Cindy.rxdata",
        pokemons: pokemons["Round"]
    },
    {
        game: "Soulstones",
        player: "Nier",
        version: "V1.5"   , date: "2021-02-27/28", path: "Soulstones_02_Nier_V1-5-0.rxdata",
	    comments_d: { "More": "https://gist.github.com/SPSquonK/0984052b2554cbc842a8257b5c54bbe6" },
        pokemons: pokemons.SoulStone.Nier
    },
    {
        game: "Bushido",
        player: "Jess",
        history: [

            { version: "V1.0.15"     , date: "2021-03-20~21"   , path: "Bushido_Jess_V1-0-17.rxdata" },
            { version: "V1.1.1"      , date: "2021-03-22~23"   , path: "Bushido_Jess_V1-5-0.rxdata"  },
            { version: "V1.1.1-Retro", date: "2021-03-23"      , path: "Bushido_Jess_V1-5-0.rxdata", comment: "Difference with non retro is that I loaded my save in a former version to get Hoennian Zigzagoon" },
            { version: "V1.1.6"      , date: "2021-03-26"      , path: "Bushido_Jess_V1-1-6.rxdata"  },
            { version: "V1.1.7"      , date: "2021-03-26"      , path: "Bushido_Jess_V1-1-7.rxdata"  }
        ],
        pokemons: pokemons.Bushido,
        comments: "https://gist.github.com/SPSquonK/0a329aa89ea30e3977e26155bae8fa83"
    },
    {
        game: "Soulstones",
        player: "Multiple",
        version: "V1.5.3-4",
        date: "2021-04",
        pokemons: pokemons.SoulStone.Monoruns,
        path: "Soulstones/monoruns.html"
    },
    {
        game: "Solar Light & Lunar Dark",
        player: "Annie",
        version: "V1.0.1",
        date: "2021-04-17/18",
        pokemons: pokemons.SolarLight,
        path: "SolarLight.rxdata"
    },
    {
        game: "Soulstones",
        player: "Kaine West",
        version: "V2.0.0-1",
        date: "2021-05",
        pokemons: pokemons.SoulStone.KaineWest,
        path: "Soulstones/Soulstones_19_KaineWest_V2_0_1.rxdata"
    },
];
