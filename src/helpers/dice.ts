import debug from 'debug';

export const dice = (count: number, sides: number): number => {
    let sum = 0;
    for (let i = 0; i < count; i += 1) {
        const roll = Math.floor(Math.random() * sides) + 1;
        debug(`${process.env.APP_NAME}:dice`)(roll);
        sum += roll;
    }
    return sum;
}

export const d4 = () => dice(1, 4);
export const d6 = () => dice(1, 6);
export const d8 = () => dice(1, 8);
export const d10 = () => dice(1, 10);
export const d12 = () => dice(1, 12);
export const d20 = () => dice(1, 20);
