import { Schema } from 'mongoose';

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
