export type DiceId = 'd4' | 'd6' | 'd8' | 'd10' | 'd12';

export interface DiceValue {
    maxValue?: number,
}

export interface StatDice {
    dice: DiceId;
    modifier?: number;
}

const dice: { [key in DiceId]: DiceValue } = {
    d4: {
        maxValue: 4,
    },
    d6: {
        maxValue: 6,
    },
    d8: {
        maxValue: 8,
    },
    d10: {
        maxValue: 10,
    },
    d12: {
        maxValue: 12,
    },
};

export const diceMaxValue = (diceId: DiceId): number => {
    const value: DiceValue = dice[diceId] || {
        maxValue: 0,
    };
    return value.maxValue;
}

export const halfValue = (statDice: StatDice) => Math.floor(diceMaxValue(statDice.dice) / 2)
    + Math.floor((statDice.modifier || 0) / 2);

export default dice;
