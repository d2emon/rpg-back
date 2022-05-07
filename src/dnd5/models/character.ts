import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface ICharacterDocument extends Document {
    slug: string;

    name: string;
    // 1
    race: string;
    // 2
    characterClass: string;
    level: number;
    hp: number;
    currentHp: number;
    skill: number;
    // 3
    stats: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
    // 4
    alignment: string;
    background: string;
    // skills: { [k: string]: StatDice };
    // 5
    /*
    weapons: [{
        name: string;
        distance: string;
        damage: string;
        armorPierce: number;
        rof: string;
        shots: string;
        strength: string;
        comment: string;
    }];
     */
    /*
    items: [{
        name: string;
        quality: string;
        quantity: number;
        weight: number;
    }];
     */

    description?: string;

    // Virtuals

    link: string;
}

export interface ICharacterModel extends Model<ICharacterDocument> {
}

const CharacterSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        default: 'human',
    },
    characterClass: {
        type: String,
        default: 'fighter',
    },
    level: {
        type: Number,
        default: 1,
    },
    hp: Number,
    currentHp: Number,
    skill: Number,

    stats: {
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number,
    },

    alignment: String,
    background: String,

    /*
    skills: {
        type: Map,
        of: CharacterStatSchema,
    },
     */

    description: String,
});

CharacterSchema.virtual('link')
    .get(function () {
        return links.character(this.slug);
    });

CharacterSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Character: ICharacterModel = mongoose.model<ICharacterDocument, ICharacterModel>('DnDCharacter', CharacterSchema);

export default Character;
