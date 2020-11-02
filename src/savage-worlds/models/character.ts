import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import CharacterStatSchema, {
    CharacterStat,
} from './characterStat';

export interface ICharacterDocument extends Document {
    name: string;
    slug: string;
    stats: {
        agility: CharacterStat;
        smarts: CharacterStat;
        spirit: CharacterStat;
        strength: CharacterStat;
        vigor: CharacterStat;
    };
    skills: { [k: string]: CharacterStat };
    description?: string;
    // Virtuals
    link: string;
}

export interface ICharacterModel extends Model<ICharacterDocument> {
}

const CharacterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    stats: {
        agility: CharacterStatSchema,
        smarts: CharacterStatSchema,
        spirit: CharacterStatSchema,
        strength: CharacterStatSchema,
        vigor: CharacterStatSchema,
    },
    skills: {
        type: Map,
        of: CharacterStatSchema,
    },
    description: String,
});

CharacterSchema.virtual('link')
    .get(function () {
        return `${process.env.API_URL}api/v1.0/sw/character/${this.slug}`;
    });

CharacterSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Character: ICharacterModel = mongoose.model<ICharacterDocument, ICharacterModel>('Character', CharacterSchema);

export default Character;
