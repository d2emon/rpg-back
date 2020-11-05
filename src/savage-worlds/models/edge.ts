import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface IEdgeDocument extends Document {
    slug: string;
    name: string;
    group: string;
    requirements: string[];
    description?: string;

    // Virtual
    link: string;
}

export interface IEdgeModel extends Model<IEdgeDocument> {
}

const EdgeSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    group: String,
    requirements: [String],
    description: String,
});

EdgeSchema.virtual('link')
    .get(function () {
        return links.edge(this.slug);
    });

EdgeSchema.set('toObject', {
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

EdgeSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Edge: IEdgeModel = mongoose.model<IEdgeDocument, IEdgeModel>('Edge', EdgeSchema);

export default Edge;
