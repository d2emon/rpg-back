import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface IHindranceDocument extends Document {
    slug: string;
    name: string;
    major: boolean;
    description?: string;

    // Virtual
    link: string;
}

export interface IHindranceModel extends Model<IHindranceDocument> {
}

const HindranceSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    major: Boolean,
    description: String,
});

HindranceSchema.virtual('link')
    .get(function () {
        return links.hindrance(this.slug);
    });

HindranceSchema.set('toObject', {
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

HindranceSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Hindrance: IHindranceModel = mongoose.model<IHindranceDocument, IHindranceModel>('Hindrance', HindranceSchema);

export default Hindrance;
