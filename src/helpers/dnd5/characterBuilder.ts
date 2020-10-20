import {NPC} from "../../models/npc";

const setRace = (character: NPC) => (race: string) => ({
    ...character,
    race,
});
const setClass = (character: NPC) => (
    characterClass: string,
    level: number,
    hp: number,
) => ({
   ...character,
   characterClass,
   level,
   hp,
   skillBonus: Math.floor((level -1) / 4) + 2,
});
const setStats = (character: NPC) => (
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
) => ({
    ...character,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
});
const setPersonality = (character: NPC) => (
    bio: string,
) => ({
    ...character,
    bio,
});
const setEquipment = (character: NPC) => (
    equipment: string[],
) => ({
    ...character,
    equipment,
});

export default (
    character: NPC,

    race: string,

    characterClass: string,
    level: number,
    hp: number,

    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,

    bio: string,

    equipment: string[],
) => {
    character = setRace(character)(race);
    character = setClass(character)(
        characterClass,
        level,
        hp,
    );
    character = setStats(character)(
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
    );
    character = setPersonality(character)(
        bio,
    );
    character = setEquipment(character)(
        equipment,
    );
    return character;
}

const xpTable: { [k: number]: number } = {
    1: 0, // 2
    2: 300, // 2
    3: 900, // 2
    4: 2700, // 2
    5: 6500, // 3
    6: 14000, // 3
    7: 23000, // 3
    8: 34000, // 3
    9: 48000, // 4
    10: 64000, // 4
    11: 85000, // 4
    12: 100000, // 4
    13: 120000, // 5
    14: 140000, // 5
    15: 165000, // 5
    16: 195000, // 5
    17: 225000, // 6
    18: 265000, // 6
    19: 305000, // 6
    20: 355000, // 6
};

export const xp2level = (xp: number): number => {
    for (let i = 1; i <= 20; i += 1) {
        if (xp < xpTable[i]) {
            return i - 1;
        }
    }
    return 20;
}
