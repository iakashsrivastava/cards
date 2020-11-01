import {QueryParametersType} from "./../utilities/Cards.type";
const headers = {mode: 'cors'};
const requestOptions = {method: 'GET', headers};

export const get = async (queryParameters: QueryParametersType) => {
  let output = [];
  try {
      const queryParameterString = Object.entries(queryParameters).map(queryParameter => queryParameter.join('=')).join('&'); 
      const response = await fetch('https://api.elderscrollslegends.io/v1/cards'+`?${queryParameterString}`, requestOptions);
      const cardsData = await response.json();
      output = cardsData.cards;
  } catch{};
  return output;
};

// export const get = () => {

//     let obj = {
//         "cards": [
//           {
//             "name": "Raise Dead",
//             "rarity": "Legendary",
//             "type": "Action",
//             "cost": 2,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": false,
//             "text": "Summon a random creature from each discard pile.",
//             "attributes": [
//               "Endurance"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/raise_dead.png",
//             "id": "ce7be2e72d6b06a52e50bed01952801ca4ecfade"
//           },
//           {
//             "name": "Reachman Shaman",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Reachman"
//             ],
//             "cost": 2,
//             "power": 2,
//             "health": 2,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 50,
//             "soulTrap": 5,
//             "text": "At the start of your turn, give another random friendly creature +1/+1.",
//             "attributes": [
//               "Neutral"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/reachman_shaman.png",
//             "id": "15d9c10821d4033fb045ed2cb4599ac76288ac67"
//           },
//           {
//             "name": "Redoran Enforcer",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Dark Elf"
//             ],
//             "cost": 2,
//             "power": 2,
//             "health": 3,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 50,
//             "soulTrap": 5,
//             "attributes": [
//               "Intelligence"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/redoran_enforcer.png",
//             "id": "ebbd44e57df2df1c46f7eaeb7e7847d3c1b2ed46"
//           },
//           {
//             "name": "Rift Thane",
//             "rarity": "Epic",
//             "type": "Creature",
//             "subtypes": [
//               "Nord"
//             ],
//             "cost": 2,
//             "power": 2,
//             "health": 2,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 400,
//             "soulTrap": 100,
//             "text": "Summon: If you have less health than your opponent, +0/+2 and Guard. Otherwise, +2/+0 and Breakthrough.",
//             "attributes": [
//               "Strength",
//               "Willpower"
//             ],
//             "keywords": [
//               "Breakthrough",
//               "Guard"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/rift_thane.png",
//             "id": "b3a743a36b1e0139954cc57c06ceae18b8d89f19"
//           },
//           {
//             "name": "Rihad Horseman",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Redguard"
//             ],
//             "cost": 2,
//             "power": 2,
//             "health": 2,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 50,
//             "soulTrap": 5,
//             "text": "Rihad Horseman has +3/+0 and Breakthrough while equipped with an item.",
//             "attributes": [
//               "Strength"
//             ],
//             "keywords": [
//               "Breakthrough"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/rihad_horseman.png",
//             "id": "958e2558d186c971bc1ced6071090498215e0449"
//           },
//           {
//             "name": "Rihad Nomad",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Redguard"
//             ],
//             "cost": 2,
//             "power": 2,
//             "health": 2,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 50,
//             "soulTrap": 5,
//             "attributes": [
//               "Strength"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/rihad_nomad.png",
//             "id": "c5ba5c67decffee9c3ddc1f8a4ab908498ea05c7"
//           },
//           {
//             "name": "Shimmerene Peddler",
//             "rarity": "Epic",
//             "type": "Creature",
//             "subtypes": [
//               "High Elf"
//             ],
//             "cost": 2,
//             "power": 2,
//             "health": 2,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 400,
//             "soulTrap": 100,
//             "text": "At the end of each turn, if you played two actions, draw a card.",
//             "attributes": [
//               "Intelligence"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/shimmerene_peddler.png",
//             "id": "ef8bc11591df723e127b9f825055ca4eab319f86"
//           },
//           {
//             "name": "Priest of the Moons",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Khajiit"
//             ],
//             "cost": 2,
//             "power": 2,
//             "health": 2,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 50,
//             "soulTrap": 5,
//             "text": "Prophecy. Summon: Gain 2 health.",
//             "attributes": [
//               "Willpower"
//             ],
//             "keywords": [
//               "Prophecy"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/priest_of_the_moons.png",
//             "id": "326d90bb4cfce93a5502b38f74e1f6e23c271d01"
//           },
//           {
//             "name": "Protective Spider",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Spider"
//             ],
//             "cost": 2,
//             "power": 1,
//             "health": 1,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": false,
//             "text": "Guard|",
//             "attributes": [
//               "Agility"
//             ],
//             "keywords": [
//               "Guard"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/protective_spider.png",
//             "id": "1b41e4e0529947c755b77849510fe2c713e71c5d"
//           },
//           {
//             "name": "Imperial Camp",
//             "rarity": "Rare",
//             "type": "Support",
//             "cost": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 100,
//             "soulTrap": 20,
//             "text": "Ongoing. Summon: Put a 1/2 Septim Guardsman with Guard into your hand. Friendly Guards have +1/+0.",
//             "attributes": [
//               "Willpower"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/imperial_camp.png",
//             "id": "dbdea0cbfd2cb85b11dffbd2febc8e9c3d4ac702"
//           },
//           {
//             "name": "J'zargo",
//             "rarity": "Legendary",
//             "type": "Creature",
//             "subtypes": [
//               "Khajiit"
//             ],
//             "cost": 4,
//             "power": 3,
//             "health": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 1200,
//             "soulTrap": 400,
//             "text": "Summon: Put an Experimental Scroll into your hand.",
//             "attributes": [
//               "Intelligence"
//             ],
//             "unique": true,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/jzargo.png",
//             "id": "adbf6c7782e052098f479f774ff715f86a35565f"
//           },
//           {
//             "name": "Lay Down Arms",
//             "rarity": "Rare",
//             "type": "Action",
//             "cost": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 100,
//             "soulTrap": 20,
//             "text": "Set a creature's power and health to 1.",
//             "attributes": [
//               "Endurance"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/lay_down_arms.png",
//             "id": "7df7b329639d62a22dbc186a23a6e622ae388d76"
//           },
//           {
//             "name": "Legate Rikke",
//             "rarity": "Legendary",
//             "type": "Creature",
//             "subtypes": [
//               "Nord"
//             ],
//             "cost": 4,
//             "power": 3,
//             "health": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 1200,
//             "soulTrap": 400,
//             "text": "When you summon an Imperial, summon a 1/1 Imperial Grunt in the other lane.",
//             "attributes": [
//               "Willpower"
//             ],
//             "unique": true,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/legate_rikke.png",
//             "id": "d6a7f917460de639b0493925f098bf82e9b31b83"
//           },
//           {
//             "name": "Mistveil Enchanter",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Breton"
//             ],
//             "cost": 4,
//             "power": 2,
//             "health": 2,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 50,
//             "soulTrap": 5,
//             "text": "Ward. Summon: +2/+0 if you have another creature with Ward.",
//             "attributes": [
//               "Intelligence"
//             ],
//             "keywords": [
//               "Ward"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/mistveil_enchanter.png",
//             "id": "127a19dfe9f70e21c2174d2cc6adf8eb6d5ea7f9"
//           },
//           {
//             "name": "Monk's Strike",
//             "rarity": "Rare",
//             "type": "Action",
//             "cost": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 100,
//             "soulTrap": 20,
//             "text": "Move a friendly creature and give it +3/+0 and Drain this turn.",
//             "attributes": [
//               "Willpower",
//               "Agility"
//             ],
//             "keywords": [
//               "Drain"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/monks_strike.png",
//             "id": "70293afa570c18ef788bae9dd9e2b70b31f96363"
//           },
//           {
//             "name": "Mystic Dragon",
//             "rarity": "Common",
//             "type": "Creature",
//             "subtypes": [
//               "Dragon"
//             ],
//             "cost": 4,
//             "power": 4,
//             "health": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 50,
//             "soulTrap": 5,
//             "text": "Prophecy",
//             "attributes": [
//               "Intelligence"
//             ],
//             "keywords": [
//               "Prophecy"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/mystic_dragon.png",
//             "id": "a6d5da4720701e467e8750448ca336aea7b0f9ba"
//           },
//           {
//             "name": "Brilliant Experiment",
//             "rarity": "Epic",
//             "type": "Action",
//             "cost": 3,
//             "set": {
//               "id": "cs",
//               "name": "Core Set",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//             },
//             "collectible": true,
//             "soulSummon": 400,
//             "soulTrap": 100,
//             "text": "Draw a copy of a friendly creature.",
//             "attributes": [
//               "Intelligence"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/cs/brilliant_experiment.png",
//             "id": "ec73615dd8a14e480a0cf8f13067cb2c5c6e2fca"
//           },
//           {
//             "name": "High Hrothgar",
//             "rarity": "Legendary",
//             "type": "Support",
//             "cost": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 1200,
//             "soulTrap": 400,
//             "text": "Ongoing. When you summon a creature, its power becomes equal to its health.",
//             "attributes": [
//               "Endurance"
//             ],
//             "unique": true,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/high_hrothgar.png",
//             "id": "ff56c7b72d949e90dedf333f82eba98e3c45940f"
//           },
//           {
//             "name": "Hit and Run",
//             "rarity": "Epic",
//             "type": "Action",
//             "cost": 4,
//             "set": {
//               "id": "hos",
//               "name": "Heroes of Skyrim",
//               "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//             },
//             "collectible": true,
//             "soulSummon": 400,
//             "soulTrap": 100,
//             "text": "Draw five cards. Discard your hand at the end of the turn.",
//             "attributes": [
//               "Strength"
//             ],
//             "unique": false,
//             "imageUrl": "https://images.elderscrollslegends.io/hos/hit_and_run.png",
//             "id": "86f829c80e6a6a4988aef2a9812314894def060d"
//           },
//         //   {
//         //     "name": "Mages Guild Retreat",
//         //     "rarity": "Epic",
//         //     "type": "Support",
//         //     "cost": 7,
//         //     "set": {
//         //       "id": "cs",
//         //       "name": "Core Set",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "At the end of each turn, if you played two actions, summon a random Atronach.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/cs/mages_guild_retreat.png",
//         //     "id": "5fe78c87fc4c52b7ab914924d0a6f23707267b8c"
//         //   },
//         //   {
//         //     "name": "Sightless Skulk",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Falmer"
//         //     ],
//         //     "cost": 4,
//         //     "power": 4,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Draw a card if you have two other (agility) creatures.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/sightless_skulk.png",
//         //     "id": "c230e52b99e10acdaa8210d836bee60456a03092"
//         //   },
//         //   {
//         //     "name": "Stormcloak Avenger",
//         //     "rarity": "Epic",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Nord"
//         //     ],
//         //     "cost": 4,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "At the end of your turn, if three or more friendly creatures died this turn, summon a 2/2 Rallying Stormcloak.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/stormcloak_avenger.png",
//         //     "id": "f0e6768dddb45792a387de3eb69ddc5d5ecb12c1"
//         //   },
//         //   {
//         //     "name": "Stormcloak Battalion",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Nord"
//         //     ],
//         //     "cost": 4,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": false,
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/stormcloak_battalion.png",
//         //     "id": "1901fe0c721f4e9f61adaf6270254a7beb9d8fb0"
//         //   },
//         //   {
//         //     "name": "Ulfric's Zealot",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Nord"
//         //     ],
//         //     "cost": 4,
//         //     "power": 5,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Last Gasp: Put a Heavy Battleaxe into your hand.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Last Gasp"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/ulfrics_zealot.png",
//         //     "id": "562440f9a4ceed7f2d213fa9cd75e6b0e956ea26"
//         //   },
//         //   {
//         //     "name": "Barbas",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Daedra",
//         //       "Beast"
//         //     ],
//         //     "cost": 5,
//         //     "power": 3,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Summon: Choose one: -Stay: Gains +1/+1 and Guard. Fetch: Put a random Daedra into your hand. Roll Over: Gains Charge.",
//         //     "attributes": [
//         //       "Neutral"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/barbas.png",
//         //     "id": "7c8e08acfb7d417044e27fa97a3567cc30f32d48"
//         //   },
//         //   {
//         //     "name": "Battlefield Scrounger",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Redguard"
//         //     ],
//         //     "cost": 5,
//         //     "power": 3,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Charge. Slay: Put a random item into your hand.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Charge",
//         //       "Slay"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/battlefield_scrounger.png",
//         //     "id": "e2f4743ecd7799bf76b7ad5e8a249b8e4b619e79"
//         //   },
//         //   {
//         //     "name": "Brynjolf",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Nord"
//         //     ],
//         //     "cost": 5,
//         //     "power": 4,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Drain, When a friendly creature Pilfers or Drain, gain +1 magicka this turn.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "keywords": [
//         //       "Drain",
//         //       "Pilfer"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/brynjolf.png",
//         //     "id": "42299da08ed0f5a170bbf57512b7d196b5630535"
//         //   },
//         //   {
//         //     "name": "Revered Guardian",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 4,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Guard",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "keywords": [
//         //       "Guard"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/revered_guardian.png",
//         //     "id": "e389f0cee1c76d66adc53dab029224a511f733f3"
//         //   },
//         //   {
//         //     "name": "Serpentine Stalker",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 4,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Slay: +2/+0. May move to attack creatures in the other lane.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "keywords": [
//         //       "Slay"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/serpentine_stalker.png",
//         //     "id": "66780fce9d6852c1a4eef92857aec8f20118a55c"
//         //   },
//         //   {
//         //     "name": "Swims-at-Night",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Argonian"
//         //     ],
//         //     "cost": 4,
//         //     "power": 2,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Summon: Put a random 0-cost card into your hand. After you play a 0-cost card, Swims-at-Night gains +1/+1.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/swims-at-night.png",
//         //     "id": "18caa8b415f23fd5b151cf82b74f505f671b3415"
//         //   },
//         //   {
//         //     "name": "Court Wizard",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Breton"
//         //     ],
//         //     "cost": 5,
//         //     "power": 3,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Draw a card if you have two other  creatures.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/court_wizard.png",
//         //     "id": "c0de6f6787a6f3490dab8e84992def9e7b754aee"
//         //   },
//         //   {
//         //     "name": "Hulking Draugr",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Skeleton"
//         //     ],
//         //     "cost": 5,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": false,
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/hulking_draugr.png",
//         //     "id": "b29d6c29c17bf02733738d33b3de1043a0de289d"
//         //   },
//         //   {
//         //     "name": "Insightful Scholar",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "High Elf"
//         //     ],
//         //     "cost": 5,
//         //     "power": 2,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Prophecy. Summon: Draw a card for each card your opponent drew this turn.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "keywords": [
//         //       "Prophecy"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/insightful_scholar.png",
//         //     "id": "4d50d646a0822d625d304952f1204e94634060d4"
//         //   },
//         //   {
//         //     "name": "Karthspire Scourge",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 5,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Summon: Give all enemy creatures in this lane -1/-0.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/karthspire_scourge.png",
//         //     "id": "91aa65f60755ccefb38922a808f6223a528670b8"
//         //   },
//         //   {
//         //     "name": "Lydia",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Nord"
//         //     ],
//         //     "cost": 5,
//         //     "power": 3,
//         //     "health": 8,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Guard. Lydia guards both lanes.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "keywords": [
//         //       "Guard"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/lydia.png",
//         //     "id": "25b72160c5991ce8283ea9d326c500c793359a4a"
//         //   },
//         //   {
//         //     "name": "Prized Chicken",
//         //     "rarity": "Epic",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Beast"
//         //     ],
//         //     "cost": 5,
//         //     "power": 0,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Last Gasp: Fill this lane with 1/1 Angry Villagers.",
//         //     "attributes": [
//         //       "Neutral"
//         //     ],
//         //     "keywords": [
//         //       "Last Gasp"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/prized_chicken.png",
//         //     "id": "4176515cea1b75cbcbcb1d3ce02a7d2f616f08cb"
//         //   },
//         //   {
//         //     "name": "Snowhawk detachment",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Imperial"
//         //     ],
//         //     "cost": 5,
//         //     "power": 3,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Guard. Summon: +1/+1 if you have another creature with Guard.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "keywords": [
//         //       "Guard"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/snowhawk_detachment.png",
//         //     "id": "5caaa2a0a392fce9ce49451ce856798e34136387"
//         //   },
//         //   {
//         //     "name": "Stoutheart Giant",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Giant"
//         //     ],
//         //     "cost": 5,
//         //     "power": 6,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/stoutheart_giant.png",
//         //     "id": "2cf353edf241ffafe7a20efa3a3b3544d70e761e"
//         //   },
//         //   {
//         //     "name": "Thief of Dreams",
//         //     "rarity": "Epic",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Khajiit"
//         //     ],
//         //     "cost": 5,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Summon: See a vision of two of your opponent's cards. Guess which one is in their hand. If you're right, draw a copy of it.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/thief_of_dreams.png",
//         //     "id": "79d13bad4d0ef4232c43b9b6e401a1a31e7cbb4d"
//         //   },
//         //   {
//         //     "name": "Cave Bear",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Beast"
//         //     ],
//         //     "cost": 5,
//         //     "power": 5,
//         //     "health": 6,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/cave_bear.png",
//         //     "id": "4ce2dcfb9559e5bfee37bfb72bac55d45c95e7a8"
//         //   },
//         //   {
//         //     "name": "College of Winterhold",
//         //     "rarity": "Legendary",
//         //     "type": "Support",
//         //     "cost": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Uses: 3. Activate: Reveal three random 1-cost actions and draw one. Then, increase the cost of cards this reveals by 1.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/college_of_winterhold.png",
//         //     "id": "5ea86d75cbb5f1d04f24e447736dfa510f083182"
//         //   },
//         //   {
//         //     "name": "Bandit Ringleader",
//         //     "rarity": "Epic",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Khajiit"
//         //     ],
//         //     "cost": 6,
//         //     "power": 3,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Summon: Other friendly creatures in this lane gain \"Pilfer: Draw a card\" this turn.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/bandit_ringleader.png",
//         //     "id": "28ca5e74a2a128be066a0b7e88cab0123b8bd5bb"
//         //   },
//         //   {
//         //     "name": "Conjuration Scholar",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Redguard"
//         //     ],
//         //     "cost": 6,
//         //     "power": 1,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Summon a 5/5 Frost Atronach with Guard.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/conjuration_scholar.png",
//         //     "id": "1191c4cccc12a16fa76d0dac63f8e3b3974154b1"
//         //   },
//         //   {
//         //     "name": "Dragon Mound",
//         //     "rarity": "Legendary",
//         //     "type": "Support",
//         //     "cost": 6,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Ongoing. Summon: Transform all cards in your deck into random Dragons. Your Dragons cost 1 less.",
//         //     "attributes": [
//         //       "Neutral"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/dragon_mound.png",
//         //     "id": "1ba3086c14e1ebeb642d0a0fda6dc797cdf80daf"
//         //   },
//         //   {
//         //     "name": "Dragon Priest Mask",
//         //     "rarity": "Epic",
//         //     "type": "Item",
//         //     "cost": 6,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "+2/+2 Summon: Trigger the wielder's summon ability.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/dragon_priest_mask.png",
//         //     "id": "b5928987f1bcdfa8460cd71bf41007fe217f55bf"
//         //   },
//         //   {
//         //     "name": "Echo of Akatosh",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 6,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "When you draw a creature, give it a random Keyword.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/echo_of_akatosh.png",
//         //     "id": "f79358ed193ad74e30bf368f368bb1030c7b039d"
//         //   },
//         //   {
//         //     "name": "Nightprowler",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Falmer"
//         //     ],
//         //     "cost": 6,
//         //     "power": 5,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "When Nightprowler gains Cover, draw a card.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/nightprowler.png",
//         //     "id": "07ccb9dfcb7724c8f5710808312ffcde24b1ac42"
//         //   },
//         //   {
//         //     "name": "Praetorian Commander",
//         //     "rarity": "Epic",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Imperial"
//         //     ],
//         //     "cost": 6,
//         //     "power": 3,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Summon: Give creatures in your deck +1/+1.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/praetorian_commander.png",
//         //     "id": "15d746d5fd5c40e1ebaada629cdc50ea0235b2f7"
//         //   },
//         //   {
//         //     "name": "Shearpoint Dragon",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 6,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Summon: Give a creature -2/-2. When you reduce a creature's power or health with another effect, reduce it by an extra 1.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/shearpoint_dragon.png",
//         //     "id": "f0ded5f90eec9056028e44d2115f2f94d8f2d9b3"
//         //   },
//         //   {
//         //     "name": "Whiterun Protector",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Nord"
//         //     ],
//         //     "cost": 5,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Beast Form: +2/+2, Guard, and Regenerate.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/whiterun_protector.png",
//         //     "id": "4954e68fd6715ab3c82ada0863a5e505582e88a4"
//         //   },
//         //   {
//         //     "name": "Winterhold Illusionist",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 5,
//         //     "power": 3,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Another creature disappears, then returns at the end of the turn.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/winterhold_illusionist.png",
//         //     "id": "e9c870d29b77555f3697c24b707d6620fc10b6f4"
//         //   },
//         //   {
//         //     "name": "Undying Dragon",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 6,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Drain. +5/+5 while you have 30 or more health.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "keywords": [
//         //       "Drain"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/undying_dragon.png",
//         //     "id": "1c2865e27a40ad857796e6948f94fdf4ac3aea66"
//         //   },
//         //   {
//         //     "name": "Wolf Cage",
//         //     "rarity": "Epic",
//         //     "type": "Support",
//         //     "cost": 6,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Uses: 3. Activate: Summon an Uncaged Wolf.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/wolf_cage.png",
//         //     "id": "fdd60922dd74d34e17255f5101b44a7c38f44662"
//         //   },
//         //   {
//         //     "name": "World-Eater's Eyrie",
//         //     "rarity": "Legendary",
//         //     "type": "Support",
//         //     "cost": 6,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Ongoing. When you summon a creature that costs 7 or more, double its power and health.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/world-eaters_eyrie.png",
//         //     "id": "6bdcfd0e838f29836610fea5e8575aba8826d17f"
//         //   },
//         //   {
//         //     "name": "Aela the Huntress",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Nord"
//         //     ],
//         //     "cost": 7,
//         //     "power": 3,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Summon: Deal 1 damage. Beast Form: +2/+2 and destroy a Wounded creature.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/aela_the_huntress.png",
//         //     "id": "106120f89b7c6b4d597a96034dfe60aa25d67522"
//         //   },
//         //   {
//         //     "name": "Ancestor's Battleaxe",
//         //     "rarity": "Epic",
//         //     "type": "Item",
//         //     "cost": 7,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "+4/+4. Summon: Give the top creature of your deck +4/+4.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/ancestors_battleaxe.png",
//         //     "id": "f4b07fc01ec54e61515b2c09a1a6963f144a2e53"
//         //   },
//         //   {
//         //     "name": "Arrest",
//         //     "rarity": "Rare",
//         //     "type": "Action",
//         //     "cost": 7,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Steal an enemy creature. It loses Guard, and is permanently Shackled.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/arrest.png",
//         //     "id": "e0f36638a25c0ae754d734b067891d3a0cc0a9fd"
//         //   },
//         //   {
//         //     "name": "Bringer of Nightmares",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Daedra"
//         //     ],
//         //     "cost": 7,
//         //     "power": 4,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Summon: See a vision of a random creature, then you must choose a creature to transform into it.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/bringer_of_nightmares.png",
//         //     "id": "befc3fb6abcf9b4174bb692c19c518c154145376"
//         //   },
//         //   {
//         //     "name": "Dovah of the Voice",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 7,
//         //     "power": 6,
//         //     "health": 4,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Last Gasp: Put a random Shout into your hand.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "keywords": [
//         //       "Last Gasp"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/dovah_of_the_voice.png",
//         //     "id": "720076aa604aa51bd6f0835ef33925adc3051bb2"
//         //   },
//         //   {
//         //     "name": "Duel Atop the World",
//         //     "rarity": "Epic",
//         //     "type": "Action",
//         //     "cost": 7,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Give a friendly creature +3/+3. It Battles your opponent's most powerful creature.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/duel_atop_the_world.png",
//         //     "id": "5da1c2214a34cb44536dd1c24c47b16f4af28451"
//         //   },
//         //   {
//         //     "name": "Spine of Eldersblood",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 6,
//         //     "power": 6,
//         //     "health": 6,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Summon: Gaint +1 max magicka.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/spine_of_eldersblood.png",
//         //     "id": "e0dddbb1a3ffe37da8c3b3c7ff8f321365b1eb27"
//         //   },
//         //   {
//         //     "name": "Stonehill Mammoth",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Mammoth"
//         //     ],
//         //     "cost": 6,
//         //     "power": 5,
//         //     "health": 7,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Draw a card if you have two other (endurance) creatures.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/stonehill_mammoth.png",
//         //     "id": "0aa098770c54f95dc9b4b305b0cff30d00c75f3c"
//         //   },
//         //   {
//         //     "name": "Wildfire Dragon",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 7,
//         //     "power": 6,
//         //     "health": 6,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Breakthrough. Summon: Deal 1 damage to all other creatures. Slay: +1/+1.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Breakthrough",
//         //       "Slay"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/wildfire_dragon.png",
//         //     "id": "29e7fd1161b60e5808248fb4fd88fc15a14cefce"
//         //   },
//         //   {
//         //     "name": "A Land Divided",
//         //     "rarity": "Legendary",
//         //     "type": "Action",
//         //     "cost": 8,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Fill the left lane with Stormcloak Skirmishers or the right lane with Colovian Troopers.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/a_land_divided.png",
//         //     "id": "410c046c044f0d6307eb51fc47136aa8378e9ac1"
//         //   },
//         //   {
//         //     "name": "Frost Giant",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Giant"
//         //     ],
//         //     "cost": 8,
//         //     "power": 10,
//         //     "health": 10,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Regenerate. When a creature heals, you gain that much health.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "keywords": [
//         //       "Regenerate"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/frost_giant.png",
//         //     "id": "effad4087d07291abae708c3da2b9e0394fce958"
//         //   },
//         //   {
//         //     "name": "Skeletal Dragon",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon",
//         //       "Skeleton"
//         //     ],
//         //     "cost": 8,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Guard, Summon: Give all creatures in your discard pile +2/+2. Last Gasp: Draw a random creature from your discard pile.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "keywords": [
//         //       "Guard",
//         //       "Last Gasp"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/skeletal_dragon.png",
//         //     "id": "4be84b5fd83feaf2475ac03b14f173816e4ab7a6"
//         //   },
//         //   {
//         //     "name": "Swiftwing Dragon",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 8,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Charge|",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Charge"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/swiftwing_dragon.png",
//         //     "id": "bd7a0bf41042a01dece75777eb287a9d509cd0cc"
//         //   },
//         //   {
//         //     "name": "Waves of the Fallen",
//         //     "rarity": "Epic",
//         //     "type": "Action",
//         //     "cost": 8,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Transform all enemy creatures in a lane into 2/2 Stricken Draugrs, or transform all friendly creatures in a lane into 5/5 Hulking Draugrs.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/waves_of_the_fallen.png",
//         //     "id": "53e546a28581e3e2042820fc92e91ab837b5b407"
//         //   },
//         //   {
//         //     "name": "Journey to Sovngarde",
//         //     "rarity": "Legendary",
//         //     "type": "Action",
//         //     "cost": 7,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Shuffle all creatures from your discard pile into your deck, and give them +5/+5.",
//         //     "attributes": [
//         //       "Neutral"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/journey_to_sovngarde.png",
//         //     "id": "f8895f731af50abd312aee998417eba0866cc0e2"
//         //   },
//         //   {
//         //     "name": "Ring of Namira",
//         //     "rarity": "Legendary",
//         //     "type": "Support",
//         //     "cost": 7,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Ongoing. When you gain health, deal that much damage to your opponent.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/ring_of_namira.png",
//         //     "id": "08228f87199f4ab683eb176c7d9376ea4c9253fa"
//         //   },
//         //   {
//         //     "name": "Shadowgreen Elder",
//         //     "rarity": "Epic",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Spriggan"
//         //     ],
//         //     "cost": 7,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Summon: Give other friendly Spriggans and Animals +2/+2.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/shadowgreen_elder.png",
//         //     "id": "fc30c242a6c59e2c3780f96c89967cd692aa9864"
//         //   },
//         //   {
//         //     "name": "Ancano",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "High Elf"
//         //     ],
//         //     "cost": 8,
//         //     "power": 5,
//         //     "health": 5,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Breakthrough| Summon: Deal 5 damage. Your actions have Breakthrough.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "keywords": [
//         //       "Breakthrough"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/ancano.png",
//         //     "id": "21498ebe8b1a209b5ec4682bbd11daf1d777737a"
//         //   },
//         //   {
//         //     "name": "Alduin",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dragon"
//         //     ],
//         //     "cost": 20,
//         //     "power": 12,
//         //     "health": 12,
//         //     "set": {
//         //       "id": "hos",
//         //       "name": "Heroes of Skyrim",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hos"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Costs 2 less for each Dragon in your discard pile. Summon: Destroy all other creatures. At the start of your turn, summon a random Dragon from your discard pile.",
//         //     "attributes": [
//         //       "Neutral"
//         //     ],
//         //     "unique": true,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hos/alduin.png",
//         //     "id": "1fd81123ab3eca0b29c4c19757045db9757b4f1a"
//         //   },
//         //   {
//         //     "name": "Orvas' Bargain",
//         //     "rarity": "Rare",
//         //     "type": "Action",
//         //     "cost": 0,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Give an enemy creature -1/-0 and a friendly creature +1/+0 this turn.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/orvas_bargain.png",
//         //     "id": "77d956d24ef7e634d8ee8453178e9d42b43c951e"
//         //   },
//         //   {
//         //     "name": "Sheepish Dunmer",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 0,
//         //     "power": 0,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": false,
//         //     "text": "Summon: Give Sheepish Dunmer Cover. While Sheepish Dunmer is pantsless, he does not lose Cover at the start of your turn.",
//         //     "attributes": [
//         //       "Neutral"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/sheepish_dunmer.png",
//         //     "id": "eee86abd2cb7a0700533b2a89804ac92a050071b"
//         //   },
//         //   {
//         //     "name": "Vvardvark Experiment",
//         //     "rarity": "Rare",
//         //     "type": "Action",
//         //     "cost": 0,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Summon a 0/1 Vvardvark in each lane.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/vvardvark_experiment.png",
//         //     "id": "b2d470af2e22d4b7042791f4d7131904a11e7fb7"
//         //   },
//         //   {
//         //     "name": "Ashlander Zealot",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 1,
//         //     "power": 1,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Battle an enemy creature.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/ashlander_zealot.png",
//         //     "id": "63d0b4d53c6e61de59a5c59506b2e48258a83377"
//         //   },
//         //   {
//         //     "name": "Corprus Disease",
//         //     "rarity": "Rare",
//         //     "type": "Action",
//         //     "cost": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Silence a creature, then give it +2/+0.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/corprus_disease.png",
//         //     "id": "97d6ae8660d8a3a30fa17b8ee5ef0f8127f17059"
//         //   },
//         //   {
//         //     "name": "Dagoth Dagger",
//         //     "rarity": "Common",
//         //     "type": "Item",
//         //     "cost": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Breakthrough. +2/+1.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Breakthrough"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/dagoth_dagger.png",
//         //     "id": "49d0f0fcbb73b54734e91d35afa1337657bfc69c"
//         //   },
//         //   {
//         //     "name": "Ghostgate Defender",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 1,
//         //     "power": 1,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Guard. Exalt 3: Deal 2 damage to a creature.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "keywords": [
//         //       "Guard",
//         //       "Exalt"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/ghostgate_defender.png",
//         //     "id": "f1e07fd5bda189388cdf65417406bdffe00f4807"
//         //   },
//         //   {
//         //     "name": "Glass Greaves",
//         //     "rarity": "Common",
//         //     "type": "Item",
//         //     "cost": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "+1/+1. Plot: Reduce the cost of a random card in your hand by 1.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "keywords": [
//         //       "Plot"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/glass_greaves.png",
//         //     "id": "5e91b423d935e7e62e777d00919e933e20211b61"
//         //   },
//         //   {
//         //     "name": "Bushwhack",
//         //     "rarity": "Common",
//         //     "type": "Action",
//         //     "cost": 0,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "A friendly creature ignores Guards and can attack creatures in any lane this turn.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Guard"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/bushwhack.png",
//         //     "id": "56033a28a479f9a87c1de14e520ed9e02da0347b"
//         //   },
//         //   {
//         //     "name": "Dres Spy",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 0,
//         //     "power": 1,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Look at the top card of your deck. You may discard it.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/dres_spy.png",
//         //     "id": "d36ba6331a9084a6a8dd943fa3a48ef1f7b3d75c"
//         //   },
//         //   {
//         //     "name": "Morag Tong Aspirant",
//         //     "rarity": "Legendary",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 1,
//         //     "power": 2,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 1200,
//         //     "soulTrap": 400,
//         //     "text": "Slay: Summon a Morag Tong Aspirant.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "keywords": [
//         //       "Slay"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/morag_tong_aspirant.png",
//         //     "id": "b67399e6db5d498337b6998bece1b42c37b6d579"
//         //   },
//         //   {
//         //     "name": "Mudcrab Merchant",
//         //     "rarity": "Epic",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Mudcrab"
//         //     ],
//         //     "cost": 1,
//         //     "power": 1,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 400,
//         //     "soulTrap": 100,
//         //     "text": "Summon: The Merchant shows you two cards he has for sale. Choose one to put into your hand. He puts the other into your opponent's hand.",
//         //     "attributes": [
//         //       "Neutral"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/mudcrab_merchant.png",
//         //     "id": "c0a2e3dc0855f03a28c476a10b44c4428267969e"
//         //   },
//         //   {
//         //     "name": "Sixth House Amulet",
//         //     "rarity": "Common",
//         //     "type": "Item",
//         //     "cost": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "+1/+1. Summon: if the wielder has 5 power or more, it gains a Ward.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "keywords": [
//         //       "Ward"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/sixth_house_amulet.png",
//         //     "id": "178eb4a8073783b6ed17926d74ec863dd8a9f5ee"
//         //   },
//         //   {
//         //     "name": "Ald Velothi Assassin",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Breton"
//         //     ],
//         //     "cost": 2,
//         //     "power": 1,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Lethal, Rally.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "keywords": [
//         //       "Lethal",
//         //       "Rally"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/ald_velothi_assassin.png",
//         //     "id": "a6054c811d46e5edea29782985819621a5eef897"
//         //   },
//         //   {
//         //     "name": "Almalexia's Disciple",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 2,
//         //     "power": 2,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Exalt 2: Heal all friendly creatures.",
//         //     "attributes": [
//         //       "Endurance"
//         //     ],
//         //     "keywords": [
//         //       "Exalt"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/almalexias_disciple.png",
//         //     "id": "6c6179934efab84ac3abbde45e34753ec1aac40a"
//         //   },
//         //   {
//         //     "name": "Ambitious Hireling",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Wood Elf"
//         //     ],
//         //     "cost": 2,
//         //     "power": 1,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Give another friendly creature power and health equal to Ambitious Hireling's power.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/ambitious_hireling.png",
//         //     "id": "8642d16ad842abd49a0e9055510a26037d3611e9"
//         //   },
//         //   {
//         //     "name": "Awakened Dreamer",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 2,
//         //     "power": 2,
//         //     "health": 3,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "At the end of your turn, if you have a creature with 5 power or more, Awakened Dreamer gains +1/+1.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/awakened_dreamer.png",
//         //     "id": "66cb36bb0018a7c75eddcd144fa7c2af0b9dd0c9"
//         //   },
//         //   {
//         //     "name": "Illusory Defenses",
//         //     "rarity": "Common",
//         //     "type": "Action",
//         //     "cost": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Prophecy. Summon a 0/5 Illusory Wall with Guard in each lane. Sacrifice them at the start of your turn.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/illusory_defenses.png",
//         //     "id": "fe2bef6e4dfdee9665cafbdca11054af1c6297b9"
//         //   },
//         //   {
//         //     "name": "Moon Sugar Smuggler",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Khajiit"
//         //     ],
//         //     "cost": 1,
//         //     "power": 1,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Last Gasp: Gain 2 magicka this turn.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "keywords": [
//         //       "Last Gasp"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/moon_sugar_smuggler.png",
//         //     "id": "d054bd6aabe22357fa374012d5ea947d4e657707"
//         //   },
//         //   {
//         //     "name": "Sarethi Scion",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 1,
//         //     "power": 1,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Rally|",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Rally"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/sarethi_scion.png",
//         //     "id": "6ce8a477442f84f5a71c94a06955649a97e397e9"
//         //   },
//         //   {
//         //     "name": "Barilzar's Tinkering",
//         //     "rarity": "Rare",
//         //     "type": "Action",
//         //     "cost": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Betray. Transform a creature into a random creature that costs 1 more.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "keywords": [
//         //       "Betray"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/barilzars_tinkering.png",
//         //     "id": "04ef3e66a03c2349d8e90dae37f322772274be46"
//         //   },
//         //   {
//         //     "name": "Fighters Guild Hall",
//         //     "rarity": "Rare",
//         //     "type": "Support",
//         //     "cost": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Ongoing. When a friendly creature takes damage on your turn, give it +2/+0.",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/fighters_guild_hall.png",
//         //     "id": "1887042e85277fc131cc2c2681c6366c0a16e9d5"
//         //   },
//         //   {
//         //     "name": "Gavel of the Ordinator",
//         //     "rarity": "Common",
//         //     "type": "Item",
//         //     "cost": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "+2/+0. Summon: The wielder is immune to damage this turn.",
//         //     "attributes": [
//         //       "Willpower"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/gavel_of_the_ordinator.png",
//         //     "id": "1672c168d5ea05ac0ac26ab4f46d09d9d4380ba0"
//         //   },
//         //   {
//         //     "name": "Mages Guild Recruit",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Argonian"
//         //     ],
//         //     "cost": 2,
//         //     "power": 1,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Reduce the cost of an action in your hand by 2.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/mages_guild_recruit.png",
//         //     "id": "06b186d0a1c53b1fcb6efadadcfb1486d1d8975b"
//         //   },
//         //   {
//         //     "name": "Morag Tong Assassin",
//         //     "rarity": "Rare",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 2,
//         //     "power": 3,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 100,
//         //     "soulTrap": 20,
//         //     "text": "Summon: Summon a 0/1 Target with Guard for your opponent. Slay: +1/+1.",
//         //     "attributes": [
//         //       "Agility"
//         //     ],
//         //     "keywords": [
//         //       "Guard",
//         //       "Slay"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/morag_tong_assassin.png",
//         //     "id": "136504be281588cae2ac2f57b858e1f9fd116b93"
//         //   },
//         //   {
//         //     "name": "Ornery Kagouti",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Beast"
//         //     ],
//         //     "cost": 2,
//         //     "power": 3,
//         //     "health": 2,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Breakthrough",
//         //     "attributes": [
//         //       "Strength"
//         //     ],
//         //     "keywords": [
//         //       "Breakthrough"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/ornery_kagouti.png",
//         //     "id": "a108690bc1bdd4f27900657dc6eaf33168563fa1"
//         //   },
//         //   {
//         //     "name": "Seyda Neen Courier",
//         //     "rarity": "Common",
//         //     "type": "Creature",
//         //     "subtypes": [
//         //       "Dark Elf"
//         //     ],
//         //     "cost": 2,
//         //     "power": 0,
//         //     "health": 1,
//         //     "set": {
//         //       "id": "hom",
//         //       "name": "Houses of Morrowind",
//         //       "_self": "https://api.elderscrollslegends.io/v1/sets/hom"
//         //     },
//         //     "collectible": true,
//         //     "soulSummon": 50,
//         //     "soulTrap": 5,
//         //     "text": "Summon: Equip a +3/+0 Steel Sword to a friendly creature.",
//         //     "attributes": [
//         //       "Intelligence"
//         //     ],
//         //     "unique": false,
//         //     "imageUrl": "https://images.elderscrollslegends.io/hom/seyda_neen_courier.png",
//         //     "id": "8a50d0aeb65f520911e770cfc88a6d3521bd320f"
//         //   }
//         ],
//         "_links": {
//           "next": "https://api.elderscrollslegends.io/v1/cards?page=2"
//         },
//         "_pageSize": 100,
//         "_totalCount": 1212
//       };
//       return obj.cards;


          
//     // } catch{};
//     // // return output;s
// };