import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface IRaceDocument extends Document {
    slug: string;

    name: string;
    stats: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
    age: string;
    alignment: string;
    size: string;

    description?: string;

    // Virtuals

    link: string;
}

export interface IRaceModel extends Model<IRaceDocument> {
}

const RaceSchema = new Schema({
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
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number,
    },
    age: String,
    alignment: String,
    size: String,

    description: String,
});

RaceSchema.virtual('link')
    .get(function () {
        return links.race(this.slug);
    });

RaceSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Race: IRaceModel = mongoose.model<IRaceDocument, IRaceModel>('Race', RaceSchema);

export default Race;
