import express from 'express';
import { Query } from 'mongoose';
import Hindrance, {
    IHindranceDocument,
} from '../models/hindrance';
import hindrancesFixture from '../fixtures/hindrances';

export const getHindrances = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const hindrances = await Hindrance
            .find(query)
            .select([
                'slug',
                'name',
                'major',
            ]);
        return res.json({ hindrances });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addHindrance = async (req: express.Request, res: express.Response) => {
    try {
        const hindrance = new Hindrance(req.body);
        const result = await hindrance.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getHindrance = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const hindrance = await Hindrance.findOne({ slug });
        return res.json({ hindrance });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateHindrance = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Hindrance.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeHindrance = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Hindrance.findByIdAndDelete(req.params.id);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const fillHindrances = async (req: express.Request, res: express.Response) => {
    try {
        const slugs: string[] = hindrancesFixture.map((hindrance) => hindrance.slug);
        const models = await Hindrance
            .find({
                slug: {
                    $in: slugs,
                }
            })
            .select([
                'slug',
            ]);

        const found: string[] = models.map((hindrance) => hindrance.slug);
        const updates: Query<any>[] = [];
        const newHindrances: IHindranceDocument[] = hindrancesFixture.reduce(
            (hindrances: IHindranceDocument[], hindrance: IHindranceDocument) => {
                if (found.indexOf(hindrance.slug) < 0) {
                    hindrances.push(hindrance);
                } else {
                    updates.push(Hindrance.updateOne({ slug: hindrance.slug }, hindrance.toObject()));
                }
                return hindrances;
            },
            [],
        );

        const update = await Promise.all(updates);
        const add = await Hindrance.insertMany(newHindrances);
        return res.json({ add, update });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
