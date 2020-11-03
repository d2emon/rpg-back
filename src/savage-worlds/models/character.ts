import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import CharacterStatSchema from './characterStat';
import dice, {
    diceMaxValue, halfValue, StatDice,
} from '../helpers/dice';

export interface ICharacterDocument extends Document {
    slug: string;

    name: string;
    origin: string;
    template: string;
    movement: string;
    rank: string;
    upgrades: number;
    diveIn: number;
    bennies: {
        uncolored: number;
        black: number;
        red: number;
        green: number;
        white: number;
    };

    stats: {
        agility: StatDice;
        smarts: StatDice;
        spirit: StatDice;
        strength: StatDice;
        vigor: StatDice;
    };
    skills: { [k: string]: StatDice };

    edges: [string];
    coloredEdges: [string];

    tracks: [string];
    hindrances: [string];
    cripples: [string];

    forcePoints: number;
    forces: [{
        name: string;
        cost: number;
        distance: string;
        effect: string;
        duration: string;
    }];

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

    hits: number;
    endurance: number;

    items: [{
        name: string;
        quality: string;
        quantity: number;
        weight: number;
    }];

    description?: string;

    // Virtuals
    pace: number;
    parry: number;
    charisma: number;
    toughness: number;

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
    origin: String,
    template: String,
    movement: String,
    rank: String,
    upgrades: Number,
    diveIn: Number,
    bennies: {
        uncolored: Number,
        black: Number,
        red: Number,
        green: Number,
        white: Number,
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

CharacterSchema.virtual('pace')
    .get(() => 6);

CharacterSchema.virtual('parry')
    .get(function () {
        return 2 + halfValue(this.skills ? this.skills.fight : {})
    });

CharacterSchema.virtual('charisma')
    .get(() => 0);

CharacterSchema.virtual('toughness')
    .get(function () {
        return 2 + halfValue(this.stats ? this.stats.vigor : {})
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
