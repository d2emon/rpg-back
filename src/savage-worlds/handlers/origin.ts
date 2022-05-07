import express from 'express';
import { Query } from 'mongoose';
import Origin, {
    IOriginDocument,
} from '../models/origin';
import originsFixture from '../fixtures/origins';

export const getOrigins = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const origins = await Origin
            .find(query);
        return res.json({ origins });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addOrigin = async (req: express.Request, res: express.Response) => {
    try {
        const origin = new Origin(req.body);
        const result = await origin.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getOrigin = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const origin = await Origin.findOne({ slug });
        return res.json({ origin });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateOrigin = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Origin.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeOrigin = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Origin.findByIdAndDelete(req.params.id);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const fillOrigins = async (req: express.Request, res: express.Response) => {
    try {
        const slugs: string[] = originsFixture.map((origin) => origin.slug);
        const models = await Origin
            .find({
                slug: {
                    $in: slugs,
                }
            })
            .select([
                'slug',
            ]);

        const found: string[] = models.map((origin) => origin.slug);
        const updates: Query<any>[] = [];
        const newOrigins: IOriginDocument[] = originsFixture.reduce(
            (origins: IOriginDocument[], origin: IOriginDocument) => {
                if (found.indexOf(origin.slug) < 0) {
                    origins.push(origin);
                } else {
                    updates.push(Origin.updateOne({ slug: origin.slug }, origin.toObject()));
                }
                return origins;
            },
            [],
        );

        const update = await Promise.all(updates);
        const add = await Origin.insertMany(newOrigins);
        return res.json({ add, update });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
