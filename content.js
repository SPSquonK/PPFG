const pokemons = {
    // Main = Played a significant role (no value implies true)
    // Not main = Was used but does not fit the 6 displayed slots
    // Commentated = Trained but either unused because end of the game or was bad or anything
    Reborn: {
        Anna: {
            // Not sure if I should give the last main slot to Blondie or Pietro
            "JuJu"        : { $: "Sceptile-Mega"  },
            "Sguel"       : { $: "Swoobat"        , main: false },
            "Vignefranche": { $: "Magcargo"       },
            "Big Mac"     : { $: "Ampharos-Mega"  },
            "Stehpen"     : { $: "Pangoro"        , main: false },
            "Blondie"     : { $: "Rapidash"       , main: false },
            "VValid"      : { $: "Typhlosion"     },
            "Maléfice"    : { $: "Ninetales-Alola", main: false },
            "JoJo"        : { $: "Greninja"       },
            "Pietro"      : { $: "Primarina"      }
        },
        Agathe: {
            "Burnout"     : { $: "Delphox"   }, // Burnout 3
            "El magiciano": { $: "Alakazam"  },
            "A girafe"    : { $: "Girafarig", main: false },
            "Waifu"       : { $: "Gardevoir" },
            "Husbando"    : { $: "Gallade"   },
            "Deus Ex"     : { $: "Metagross" }, // Machina
            "Fast Sis"    : { $: "Slowbro"   }
        }
    },
    Insurgence: {
        // Notes:
        // - Every actually used pokemons are able to Mega Evolve
        // - Despite this, I don't even own the Ampharosite as it can function without it, and I considered it to be
        // more interesting to mega evolve a Pokemon able to sweep / a Hubris user
        // - Gallade also didn't mega evolve, because increasing Hypnosis precision was more interesting that increasing
        // its damages.
        "FlowerPower": { $: "Venusaur-Delta-Mega" },
        "Jaw"        : { $: "Feraligatr-Mega"     },
        "Inferno"    : { $: "Typhlosion-Mega"     },
        // Name refers to the fact that I did half of the game with only FP / Jaw / Inferno, so he is almost the chosen one
        "The Fourth" : { $: "Ampharos"            },
        // Found in a nest of Ariados, but he is the fifth party member
        "Ariacinque" : { $: "Metagross-Delta Spider-Mega" },
        // One of the reason why I played Insurgence is because I thought we could use Crystal form + Mega evolution in
        // the same fight, and also because I thought Metagross Delta Ruin Crystal was awesome. Metagross Delta Ruin is
        // unvailable the whole game, and is kind of bad, so rip.
        // "SixSixSix": { specie: "Metagross", form: "Delta_Ruin", image: "Metagross_DeltaRuin_Crystal", main: false },
        // Mainly for battle frontier. This Metagross was still kind of used, but no to the extent of the five mains
        // party members. And the real 6th party member was used a lot so he deserves some credits.
        "Seventh Hvn": { $: "Metagross-Mega", main: false },
        // -- Trained but not really used in practice
        // "No Weakness": { specie: "Volcarona", form: "Delta", image: "Volcarona_Delta_Armored", main: false },
        // "Scaling Dog": { specie: "Arcanine": form: "Delta", image: "Arnanine_Delta", main: false },
        // And this is the real 6th party member, which actually was mostly acting on its own as a Pokemon Catcher / trainer
        "The Voice": { $: "Gallade" }
    },
    Rejuvenation: {
        Anna: {
            // All the following Pokemon actually had good usage
            "Kuro Hàha": { $: "Greninja" },
            "Bravest"  : { $: "Talonflame", main: false},
            "Niho Hahn": { $: "Nidoking", main: true },
            "Ouho Uhaf": { $: "Lycanroc-Dusk", main: false },
            "The Bro"  : { $: "Zebstrika", main: false },
            // Members of the Fuck Terrain Squad
            "NastyFlower" : { $: "Venusaur" } /* Grassy Terrain */,
            "Fire Starter": { $: "Torkoal" } /* Sun to help Venusaur */,
            "Err Upsion"  : { $: "Typhlosion" }, /* If I have Grassy Terrain and Sun, I can just burn the world */
            // Other pokemons
            "Mouh Thon":    { $: "Ampharos" },
            // Was supposed to be used with False Swipe + Yawn. Dropped the idea
            // "Blatoise": "Blastoise",
            // Late Game Cleaners
            "TheRainMan" : { $: "Kingdra"        , main: false },
            "TFW No Mega": { $: "Flygon"         , main: false },
            "Dataset"    : { $: "Metagross"      , main: false },
            "Pyrite"     : { $: "Ninetales-Alola", main: false },
            "Dogar"      : { $: "Zygarde-10"     , main: false },
            "Trinity"    : { $: "Hydreigon"      , main: false } /* Trained by Anna but mostly unused by her, used by Lillia */
        },
        Lillia: {
            // Lillia was played with a set level cap to 85 on Hard Difficulty,
            // When I reached the max level on Serperior, I authorized myself
            // to use Anna's Pokemon using a SharedBox script.
            // AFAIR, Metagross, Kingdra and Hydreigon were the most used
            // Pokemon from Anna
            "Snivy West": { $: "Serperior" },
            // Ok so why do I have two Talonflame: this one kept the Quick Guard
            // move to beat Yveltal.
            "Guardian" : { $: "Talonflame", },
            "Flip Flap": { $: "Cinccino" },
            "PewPew~"  : { $: "Espeon"  , main: true },
            "Front-end": { $: "Rapidash", main: false },
            "Tyrany"   : { $: "Tyranitar" },
            "Aqua 404" : { $: "Vaporeon-Shiny" },
            // Fire Squad, mostly unused
            "Top Chef" : { $: "Rotom-Heat", main: false },
            "Beast Killer": { $: "Marowak-Alola", main: false },
            // Did you know that +6 Charizard still couldn't one shot some Pokemons ?
            // "Dragon Feu": { specie: "Charizard", main: false },
            "Gang Master": { $: "Krookodile", main: false },
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
            "Rox"       : { $: "Delphox-Mega"    , sex: "Male"   }, // Rox et Rouky
            "Zaptres"   : { $: "Swellow-Omuran"  , sex: "Female" }, // Discount Zapdos
            "SKaRM CReW": { $: "Honchkrow-Omuran", sex: "Female" }, // Discount Skarmory
            "Bad Riz"   : { $: "Goodra", sex: "Male", main: false }, // Good / Bad
            "Tony H4wk" : { $: "Lucario-Omuran"  , sex: "Male" },
            "Jardinier" : { $: "Ursaring-Omuran" , sex: "Male" },
            "Dio?!"     : { $: "Celebi-Dark"                   }    // THE WARUDO
        },
        "Océane": {
            // Primarina -> Lana -> Lana Rain
            "Rain"   : { $: "Primarina-Mega" },
            "Maximum": { $: "Averat"         , main: false },
            "Fulgur" : { $: "Machamp-Omuran" },
            "Laouni" : { $: "Mienshao-Omuran", main: false },
            "Mario"  : { $: "Krookodile"     },
            "Bene"   : { $: "Typhlosion"     },
            "Ariane" : { $: "Lucario-Omuran" },
            "Celebi" : { $: "Celebi-Dark"    }
            // + Skarm Crew and Zap as the reincarnation of the fallen ones
        }
    },
    Shield: {
        "Cinderace": { $: "Cinderace"      },
        "Rillaboom": { $: "Rillaboom"      },
        "Friday"   : { $: "Blastoise"      },
        "Slowbro"  : { $: "Slowbro-Galar"  },
        "Rapidash" : { $: "Rapidash-Galar" },
        "Shirai"   : { $: "Krookodile"     } // Krookodile was actually a solo run
    },
    InfiniteFusion: {
        // Charizard name : DragonFeu. True starter is Charizard
/* Charizard */ "DragonFeu": { $: "Charizard+Feraligatr", main: false },
        "Top%":  { $: "Raticate", main: false },
        // "King": { specie: "Nidoqueen", battler: "IF_King" }
        "Queen": { $: "Nidoking" },
        "Magic": { $: "Alakazam" },
/* Gengar */ "Cui Cui": { $: "Gengar+Zapdos"},
/* Gengar */ "Gen2"   : { $: "Gengar+Mewtwo" },
        // Her main purpose was to serve as a fusion for Brule, but Brule ended up
        // possessed by a 3rd Gengar after seeing that the Typhlosion - Ninetales
        // cooperation wasn't bringing good results
        // "Leona": { $: "Ninetales", battler: "IF_Leona" },
        // Brule is actually Typhlosion's name.
/* Typhlosion */ "Brule": { $: "Gengar+Typhlosion" },
        // (Zapdos) -> Cuicui
        // (Feraligatr) (Toto) -> DragonFeu
        // (Mewtwo) -> Gen2
        // (Gengar) -> Brule
        /* Catcheur was temporarly fused to Rayquaza but it was better to actually let it alone */
        "Catcheur": { $: "Scizor", main: false },
        "Kyurem"  : { $: "Kyurem-Complete" }
    },
    SoulStone: {
        Agathe: {
            "Snowball"  : { $: "Feraligatr"     },
            "Bzzt"      : { $: "Galvantula"     },
            "BugCatcher": { $: "Parasect"       },
            "Le Roi"    : { $: "Nidoking"       },
            "Fractale"  : { $: "Espeon"         },  // Refers to the tail
            "Super PC"  : { $: "Metagross-Mega" },  // I wanted 5000 IQ but the Q key is glitched with control remapping.
            "Cash Money": { $: "Smeargle-Shiny", main: false }
        },
        Nier: {
            "Dragonite": { $: "Gastronite-Shiny" },
            "Drampa"   : { $: "Gastrampa"        },
            "Haxorus"  : { $: "Haxodon"          },
            "Kommo-o"  : { $: "Gastro-o"         },
            "Hydreigon": { $: "Gastreigon"       },
            "Altaria"  : { $: "Altaradon-Shiny"  }
        },
        Monoruns: {
/* Lillie */    "Cristal"   : {              $: "Venusaur-Epoch"  },
/* Lillie */ // "Shiron"    : { main: false, $: "Ninetales-Alola" }, - relevant only during 2 battles
/* Someone */   "Fishing"   : {              $: "Gyarados-Epoch"  },
/* Vivi */      "Agenoux"   : {              $: "Alakazam-Epoch"  },
/* Vivi */   // "Alakazam"  : { main: false, $: "Alakazam-Epoch"  },
/* Broke */     "Captain"   : {              $: "Kingler-Epoch"   },
/* Broke */     "Feros"     : { main: false, $: "Rhydon"          },
/* Broke */     "Toc"       : { main: false, $: "Rhyperior"       },
/* Erika */     "Venufather": { main: true , $: "Venusaur"        },
/* Erika */     "LE SOLEIL" : { main: true , $: "Victreebel-Mega" },
/* Erika */     "Venuson"   : { main: false, $: "Venusaur"        },
/* Claire */    "Minidraco" : { main: true , $: "Gastronite"      },
/* Claire */    "Hyporeine" : { main: false, $: "Kingdra"         },
/* Zerus */     "Coxy"      : { main: true , $: "Ledian"          },
/* Zerus */     "Beurre III": {              $: "Butterfree"      },
/* Zerus */     "4 Heures"  : { main: false, $: "Scyther"         },
/* Acerola */   "Blondie?!" : { main: true , $: "Rapidash-Epoch"  },
/* Acerola */   ":("        : { main: false, $: "Chandelure"      },
/* Acerola */   ":>"        : { main: true , $: "Dusknoir-Epoch"  },
/* SquonK */    "M E T A"   : {              $: "Metagross-Mega"  },
/* SquonK */ // "Beldum"    : { main: false, $: "Beldum" }
        },
        Kathleen: {
            "Metagross": "Metagross" , "Smeargle": { $: "Smeargle" }
        },
        KaineWest: {
            // Trainer name:
            // - It's my first (and probably only) savefile started in V2.0.0
            // / Season 3. The name is a reference to my first save file in
            // V1.5 / Season 2: Nier. Kaine is one of the companion of Nier
            // - Obviously a pun with Kanye West

            "Four Thx I": { $: "Typhlosion-Mega" },               // Typhlosion learns Inferno -> Hell -> The Hell Song -> Sum 41
            "Knuckles"  : { $: "Excadrill"       },               // ...
            "Magnétis"  : { $: "Magneton"        },               // I somehow decided to refer to this group of 3 Magnemites as Magnemites (in french)
            "Méga"      : { $: "Metagross-Mega"  },               // MEEEEEGAAAAAAAAAA
            "Marlène"   : { $: "Ampharos"        , main: false }, // Marlène Schiappa
            "Noc"       : { $: "Umbreon"         },               // Noctali is Umbreon's french name, it is also the surname of Noctis in FF15
            "Agrougrou" : { $: "Charizard-MegaY" }                // Sounds like a dragon cry, mostly a reference to Sieur PC's stream
        }
    },
    Zero: {
        // -- Adventure
        // Shell Smash
        "Smash"      : { $: "Blastoise-Mega" },
        "Jean-Michel": { $: "Parasect"       },
        "La Tank"    : { $: "Ampharos-Mega"  },
        "Donphan"    : { $: "Donphan"        , main: false },
        "Venusaur"   : { $: "Venusaur"       },
        "Metagross"  : { $: "Metagross-Mega" },
        // -- Post game
        "Playboy"    : { $: "Cinderace"      , main: false },
        // -- I used him instead of Metagross because I couldn't stand misses
        "Gym Trainer": { $: "Mewtwo" }
    },
    "Blue & White": {
        "Alain"     : { $: "Vespyre"     }, // It's written in his book.
        "Zapquadro" : { $: "Zap Zap"     }, // Same kind of Pokemon as Omuran Swellow, so its nicknamed after his cousin.
        "Initial D" : { $: "Halakik"     }, // Banana -> slip -> drift -> DEJA VU
        "Mysteria"  : { $: "Fircoon"     }, // Coon -> The Coon -> Mysterion -> Mysteria
        "Ouuh Ahaf" : { $: "Snowbreak"   },
        "To the top": { $: "Kabutops-IL" }
    },
    "The Camry Legend 2": {
        "Final D" : { $: "Leafeon"    },
        "Surprise": { $: "Kricketune" },
        "Biatch"  : { $: "Rapidash"   },
        "Majo"    : { $: "Mismagius"  },
        "Fluff"   : { $: "Altaria"    },
        // "Jhin": "Slowking"   // It was basically a Surf slave
    },
    "Round": {
        "Bowling"    : { $: "Golem" },
        "Electrocute": { $: "Magneton" },
        "Bouh"       : { $: "Haunter-Shiny" }
    },
    "Bushido": {
        "Jungle"  : { $: "Sceptile"      },
        "The fast": { $: "Slowbro-Galar" },
        "Doggo"   : { $: "Lucario"       },
        "Mewblue" : { $: "Manaphy"       }
    },
    SolarLight: {
        "Salade" : { $: "Salaslam"  },   // Salade carried hard
        "Buggy"  : { $: "Casspring" },
        "Tiloup" : { $: "Werehide"  },
        "Pownii" : { $: "Horshush"  },
        "Titewaf": { $: "Rushot"    },
        "Tifan"  : { $: "Elestomp"  }
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
        sprite_key: "Zero",
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
        sprite_key: "Blue & White",
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
        sprite_key: "Round Edition",
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
        path: "SolarLight.rxdata",
		comments: "https://gist.github.com/SPSquonK/16971fd3e9f17d3e310b6e953aa64732"
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
