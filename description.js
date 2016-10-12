const {inRange, random, sum, times, words} = require('lodash');

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const startsWithVowel = (test) => VOWELS.indexOf(test[0].toLowerCase()) !== -1;

const d = (numSides, numDice = 1) => sum(times(numDice, () => random(1, numSides)));

const generateCult = () => {
    const roll = d(20);

    if (roll === 1) {
        return 'Demon-worshipping cult';
    } else if (roll === 2) {
        return 'Devil-worshipping cult';
    } else if (inRange(roll, 3, 4)) {
        return 'Elemental Air cult';
    } else if (inRange(roll, 5, 6)) {
        return 'Elemental Earth cult';
    } else if (inRange(roll, 7, 8)) {
        return 'Elemental Fire cult';
    } else if (inRange(roll, 9, 10)) {
        return 'Elemental Water cult';
    } else if (inRange(roll, 11, 15)) {
        return 'Worshippers of an evil deity';
    } else if (inRange(roll, 16, 17)) {
        return 'Worshippers of a good deity';
    }

    return 'Worshippers of a neutral deity';
};

const generateNPCAlignment = () => {
    const roll = d(20);

    if (inRange(roll, 1, 2)) {
        return 'Lawful good';
    } else if (inRange(roll, 3, 4)) {
        return 'Neutral good';
    } else if (inRange(roll, 5, 6)) {
        return 'Chaotic good';
    } else if (inRange(roll, 7, 9)) {
        return 'Lawful neutral';
    } else if (inRange(roll, 10, 11)) {
        return 'Neutral';
    } else if (roll === 12) {
        return 'Chaotic neutral';
    } else if (inRange(roll, 13, 15)) {
        return 'Lawful evil';
    } else if (inRange(roll, 16, 18)) {
        return 'Neutral evil';
    }

    return 'Chaotic evil';
};

const generateNPCClass = () => {
    const roll = d(20);

    if (roll === 1) {
        return 'Barbarian';
    } else if (roll === 2) {
        return 'Bard';
    } else if (inRange(roll, 3, 4)) {
        return 'Cleric';
    } else if (roll === 5) {
        return 'Druid';
    } else if (inRange(roll, 6, 7)) {
        return 'Fighter';
    } else if (roll === 8) {
        return 'Monk';
    } else if (roll === 9) {
        return 'Paladin';
    } else if (roll === 10) {
        return 'Ranger';
    } else if (inRange(roll, 11, 14)) {
        return 'Rogue';
    } else if (roll === 15) {
        return 'Sorcerer';
    } else if (roll === 16) {
        return 'Warlock';
    }

    return 'Wizard';
};

const generateHumanNPC = () => `Human ${generateNPCClass()} of ${generateNPCAlignment()} alignment's`;

const generateCreatorOfDungeon = () => {
    const roll = d(20);

    if (roll === 1) {
        return 'Beholder';
    } else if (inRange(roll, 2, 4)) {
        return generateCult();
    } else if (inRange(roll, 5, 8)) {
        return 'Dwarven';
    } else if (roll === 9) {
        return 'Elven';
    } else if (roll === 10) {
        return 'Giant';
    } else if (roll === 11) {
        return 'Hobgoblin';
    } else if (inRange(roll, 12, 15)) {
        return generateHumanNPC();
    } else if (roll === 16) {
        return 'Koa-toa';
    } else if (roll === 17) {
        return 'Lich';
    } else if (roll === 18) {
        return 'Mind flayer';
    } else if (roll === 19) {
        return 'Yuan-ti';
    }

    return '';
};

const generateHistoryOfDungeon = () => {
    const roll = d(20);

    if (inRange(roll, 1, 3)) {
        return 'it was abandoned by its creators';
    } else if (4 === roll) {
        return 'it was abandoned due to plague';
    } else if (inRange(roll, 5, 8)) {
        return 'it was conquered by invaders';
    } else if (inRange(roll, 9, 10)) {
        return 'the creators were destroyed by attacking raiders';
    } else if (11 === roll) {
        return 'the creators were destroyed by a discovery made within the site';
    } else if (12 === roll) {
        return 'the creators were destroyed by an internal conflict';
    } else if (13 === roll) {
        return 'the creators were destroyed by a magical catastrophe';
    } else if (inRange(roll, 14, 15)) {
        return 'the creators were destroyed by natural disaster';
    } else if (16 === roll) {
        return 'the location was cursed by the gods and shunned';
    } else if (inRange(roll, 17, 18)) {
        return 'the original creator is still in control';
    } else if (19 === roll) {
        return 'it is currently overrun by planar creatures';
    }

    return 'it is the site of a great miracle';
};

const generateExoticLocationofDungeon = () => {
    const exoticRoll =  d(20);

    switch (exoticRoll) {
    case 1:
        return 'among the branches of a tree';
    case 2:
        return 'circling a geyser';
    case 3:
        return 'behind a waterfall';
    case 4:
        return 'buried in an avalanche';
    case 5:
        return 'buried in a sandstorm';
    case 6:
        return 'buried in volcanic ash';
    case 7:
        return (random(1) === 1 ? 'castle' : 'structure') + ' sunken in a swamp';
    case 8:
        return (random(1) === 1 ? 'castle' : 'structure') + ' at the bottom of a sinkhole';
    case 9:
        return 'floating on the sea';
    case 10:
        return 'in a meteorite';
    case 11:
        return 'on a demiplane or in a pocket dimension';
    case 12:
        return 'in an area devastated by a magical catastrophe';
    case 13:
        return 'on a cloud';
    case 14:
        return 'in the Feywild';
    case 15:
        return 'in the Shadowfell';
    case 16:
        return 'on an island in an underground sea';
    case 17:
        return 'in a volcano';
    case 18:
        return 'on the back of a Gargantuan living creature';
    case 19:
        return 'sealed inside a magical dome of force';
    }

    return 'inside a Mordenkainen\'s magnificent mansion';
};

const generateLocationOfDungeon = () => {
    const roll = d(100);

    if (inRange(roll, 1, 4)) {
        return 'hiding in plain sight inside a city building';
    } else if (inRange(roll, 5, 8)) {
        return 'hidden in the ' + (random(1) === 1 ? 'catacombs' : 'sewers') + ' beneath a city';
    } else if (inRange(roll, 9, 12)) {
        return 'beneath an abandoned farmhouse';
    } else if (inRange(roll, 13, 16)) {
        return 'beneath a supposedly-haunted graveyard';
    } else if (inRange(roll, 17, 22)) {
        return 'in the dungeons of a ruined castle';
    } else if (inRange(roll, 23, 26)) {
        return 'peeking out from the ruins of a long-lost city';
    } else if (inRange(roll, 27, 30)) {
        return 'in the vaults below a ' + (random(1) === 1 ? 'local' : 'remote') + ' temple';
    } else if (inRange(roll, 31, 34)) {
        return 'nearly inaccessible in a deep chasm';
    } else if (inRange(roll, 35, 38)) {
        return 'ingeniously fitted info a cliff face';
    } else if (inRange(roll, 39, 42)) {
        return 'half-buried in a perilous desert';
    } else if (inRange(roll, 43, 46)) {
        return 'camoflaged in a lush forest';
    } else if (inRange(roll, 47, 50)) {
        return 'frozen in an ancient glacier';
    } else if (inRange(roll, 51, 54)) {
        return 'nestled in a gorge';
    } else if (inRange(roll, 55, 58)) {
        return 'hidden in a jungle';
    } else if (inRange(roll, 59, 62)) {
        return 'high on a treacherous mountain pass';
    } else if (inRange(roll, 63, 66)) {
        return 'shrouded in a swamp';
    } else if (inRange(roll, 67, 70)) {
        return random(1) === 1 ? 'dwarfed beneath' : 'perched atop ' + ' a mesa';
    } else if (inRange(roll, 71, 74)) {
        return 'deep within forgotten sea caves';
    } else if (inRange(roll, 75, 78)) {
        return 'carved throughout several connected mesas';
    } else if (inRange(roll, 79, 82)) {
        return 'on a mountain peak';
    } else if (inRange(roll, 83, 86)) {
        return 'on a promontory';
    } else if (inRange(roll, 87, 90)) {
        return 'on an uncharted island';
    } else if (inRange(roll, 91, 95)) {
        return 'underwater';
    }

    return generateExoticLocationofDungeon();
};

const generatePurposeOfDungeon = () => {
    const roll = d(20);

    if (roll === 1) {
        return 'death trap';
    } else if (inRange(roll, 2, 5)) {
        return 'lair';
    } else if (roll === 6) {
        return 'maze';
    } else if (inRange(roll, 7, 9)) {
        return 'mine';
    } else if (roll === 10) {
        return 'planar gate';
    } else if (inRange(roll, 11, 14)) {
        return 'stronghold';
    } else if (inRange(roll, 15, 17)) {
        return random(1) === 1 ? 'temple' : 'shrine';
    } else if (inRange(roll, 18, 19)) {
        return 'tomb';
    }

    return 'treasure vault';
};

const generateDungeonDescription = () => {
    const creator = generateCreatorOfDungeon();
    const history = generateHistoryOfDungeon();
    const location = generateLocationOfDungeon();
    const purpose = generatePurposeOfDungeon();

    return   (creator ? (`${startsWithVowel(creator) ? 'An ' : 'A '}${creator} `) : (startsWithVowel(purpose) ? 'An ' : 'A '))
           + `${purpose}, ${location}. `
           + `Rumor has it that ${history}.`;
};

module.exports = generateDungeonDescription;
