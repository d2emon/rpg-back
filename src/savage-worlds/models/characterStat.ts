import { Schema } from 'mongoose';
import { DiceId } from './dice';

export interface CharacterStat {
    dice: DiceId;
    modifier?: number;
}

const CharacterStatSchema = new Schema({
    dice: {
        type: String,
        required: true,
    },
    modifier: Number,
});

CharacterStatSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret._id;
    },
});

export default CharacterStatSchema;
