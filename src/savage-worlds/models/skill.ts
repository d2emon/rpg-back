import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';
import links from '../helpers/links';

export interface ISkillDocument extends Document {
    slug: string;
    name: string;
    trait: string;
    description?: string;

    // Virtual
    link: string;
}

export interface ISkillModel extends Model<ISkillDocument> {
}

const SkillSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    trait: {
        type: String,
        required: true,
    },
    description: String,
});

SkillSchema.virtual('link')
    .get(function () {
        return links.skill(this.slug);
    });

SkillSchema.set('toObject', {
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

SkillSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    },
});

const Skill: ISkillModel = mongoose.model<ISkillDocument, ISkillModel>('Skill', SkillSchema);

export default Skill;
