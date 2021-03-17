import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface IRacialTraitDocument extends Document {
    slug: string;
    name: string;
    description?: string;

    // Virtual
    link: string;
}

export interface IRacialTraitModel extends Model<IRacialTraitDocument> {
}

const RacialTraitSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
});

RacialTraitSchema.virtual('link')
    .get(function () {
        return links.trait(this.slug);
    });

RacialTraitSchema.set('toObject', {
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

RacialTraitSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const RacialTrait: IRacialTraitModel = mongoose.model<IRacialTraitDocument, IRacialTraitModel>('SavageWorldsRacialTrait', RacialTraitSchema);

export default RacialTrait;
