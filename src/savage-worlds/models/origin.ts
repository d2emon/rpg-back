import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface IOriginDocument extends Document {
    slug: string;
    name: string;
    traits: [string];
    description?: string;
    link: string;
}

export interface IOriginModel extends Model<IOriginDocument> {
}

const OriginSchema = new Schema({
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

OriginSchema.virtual('link')
    .get(function () {
        return links.origin(this.slug);
    });

OriginSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

OriginSchema.set('toObject', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Origin: IOriginModel = mongoose.model<IOriginDocument, IOriginModel>('SavageWorldsOrigin', OriginSchema);

export default Origin;
