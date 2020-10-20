import {Death} from "./death";

export interface NPC {
    characterId: number;
    name: string;
    race: string;
    characterClass: string;
    level: number;

    initiative?: number;
    ac?: number;
    hp?: number;

    endurance?: number;
    reaction?: number;
    will?: number;

    passivePerception?: number;
    passiveInsight?: number;
    speed?: number;

    talents?: string[];
    location?: string;
    notes?: string;

    skillBonus?: number;

    death?: Death;
}

const npcs: NPC[] = [
    {
        characterId: 1,
        name: 'Имя',
        race: 'Раса',
        characterClass: 'Класс',
        level: 1,
    },
]

export default npcs;
