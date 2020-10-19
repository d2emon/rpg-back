import {
    d4,
    d6,
    d8,
    d12,
    d20,
} from './dice';

export interface Character {
    race: number,
    age: number,
    appearance: number,
    occupation: number,
    personality: number,
}

export default (): Character => ({
    race: d8(),
    age: d4(),
    appearance: d6(),
    occupation: d12(),
    personality: d20(),
})
