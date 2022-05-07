import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import CharacterStatSchema from './characterStat';
import {
    StatDice,
    halfValue,
} from '../helpers/dice';
import links from '../helpers/links';

export interface ICharacterTemplateDocument extends Document {
    slug: string;

    name: string;
    stats: {
        agility: StatDice;
        smarts: StatDice;
        spirit: StatDice;
        strength: StatDice;
        vigor: StatDice;
    };
    skills: { [k: string]: StatDice };

    edges: [string];
    hindrances: [string];

    additionalSkills: number;
    additionalMajorHindrances: number;
    additionalMinorHindrances: number;

    description?: string;

    // Virtuals
    pace: number;
    parry: number;
    charisma: number;
    toughness: number;

    link: string;
}

export interface ICharacterTemplateModel extends Model<ICharacterTemplateDocument> {
}

const CharacterTemplateSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
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

    edges: [String],
    hindrances: [String],

    additionalSkills: {
        type: Number,
        default: 0,
    },
    additionalMajorHindrances: {
        type: Number,
        default: 1,
    },
    additionalMinorHindrances: {
        type: Number,
        default: 2,
    },

    description: String,
});

CharacterTemplateSchema.virtual('pace')
    .get(() => 6);

CharacterTemplateSchema.virtual('parry')
    .get(function () {
        return 2 + halfValue(this.skills.get('fighting') || {})
    });

CharacterTemplateSchema.virtual('charisma')
    .get(() => 0);

CharacterTemplateSchema.virtual('toughness')
    .get(function () {
        return 2 + halfValue(this.stats.vigor || {})
    });

CharacterTemplateSchema.virtual('link')
    .get(function () {
        return links.characterTemplate(this.slug);
    });

CharacterTemplateSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

CharacterTemplateSchema.set('toObject', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const CharacterTemplate: ICharacterTemplateModel = mongoose.model<ICharacterTemplateDocument, ICharacterTemplateModel>('CharacterTemplate', CharacterTemplateSchema);

export default CharacterTemplate;
