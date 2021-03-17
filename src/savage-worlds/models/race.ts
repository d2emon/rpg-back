import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface IRaceDocument extends Document {
    slug: string;
    name: string;
    traits: string[];
    description?: string;

    // Virtual
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
    traits: [String],
    description: String,
});

RaceSchema.virtual('link')
    .get(function () {
        return links.race(this.slug);
    });

RaceSchema.set('toObject', {
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

RaceSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Race: IRaceModel = mongoose.model<IRaceDocument, IRaceModel>('SavageWorldsRace', RaceSchema);

export default Race;
