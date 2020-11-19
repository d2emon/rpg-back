import express from 'express';
import { Query } from 'mongoose';
import RacialTrait, {
    IRacialTraitDocument,
} from '../models/racialTrait';
import racialTraitsFixture from '../fixtures/traits';

export const getRacialTraits = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const racialTraits = await RacialTrait
            .find(query)
            .select([
                'slug',
                'name',
                'major',
            ]);
        return res.json({ racialTraits });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addRacialTrait = async (req: express.Request, res: express.Response) => {
    try {
        const racialTrait = new RacialTrait(req.body);
        const result = await racialTrait.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getRacialTrait = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const racialTrait = await RacialTrait.findOne({ slug });
        return res.json({ racialTrait });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateRacialTrait = async (req: express.Request, res: express.Response) => {
    try {
        const result = await RacialTrait.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeRacialTrait = async (req: express.Request, res: express.Response) => {
    try {
        const result = await RacialTrait.findByIdAndDelete(req.params.id);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const fillRacialTraits = async (req: express.Request, res: express.Response) => {
    try {
        const slugs: string[] = racialTraitsFixture.map((racialTrait) => racialTrait.slug);
        const models = await RacialTrait
            .find({
                slug: {
                    $in: slugs,
                }
            })
            .select([
                'slug',
            ]);

        const found: string[] = models.map((racialTrait) => racialTrait.slug);
        const updates: Query<any>[] = [];
        const newRacialTraits: IRacialTraitDocument[] = racialTraitsFixture.reduce(
            (racialTraits: IRacialTraitDocument[], racialTrait: IRacialTraitDocument) => {
                if (found.indexOf(racialTrait.slug) < 0) {
                    racialTraits.push(racialTrait);
                } else {
                    updates.push(RacialTrait.updateOne({ slug: racialTrait.slug }, racialTrait.toObject()));
                }
                return racialTraits;
            },
            [],
        );

        const update = await Promise.all(updates);
        const add = await RacialTrait.insertMany(newRacialTraits);
        return res.json({ add, update });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
