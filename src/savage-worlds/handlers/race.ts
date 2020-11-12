import express from 'express';
import { Query } from 'mongoose';
import Race, {
    IRaceDocument,
} from '../models/race';
import racesFixture from '../fixtures/races';

export const getRaces = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const races = await Race
            .find(query);
        return res.json({ races });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addRace = async (req: express.Request, res: express.Response) => {
    try {
        const race = new Race(req.body);
        const result = await race.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getRace = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const race = await Race.findOne({ slug });
        return res.json({ race });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateRace = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Race.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeRace = async (req: express.Request, res: express.Response) => {
    try {
        const result = await Race.findByIdAndDelete(req.params.id);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const fillRaces = async (req: express.Request, res: express.Response) => {
    try {
        const slugs: string[] = racesFixture.map((race) => race.slug);
        const models = await Race
            .find({
                slug: {
                    $in: slugs,
                }
            })
            .select([
                'slug',
            ]);

        const found: string[] = models.map((race) => race.slug);
        const updates: Query<any>[] = [];
        const newRaces: IRaceDocument[] = racesFixture.reduce(
            (races: IRaceDocument[], race: IRaceDocument) => {
                if (found.indexOf(race.slug) < 0) {
                    races.push(race);
                } else {
                    updates.push(Race.updateOne({ slug: race.slug }, race.toObject()));
                }
                return races;
            },
            [],
        );

        const update = await Promise.all(updates);
        const add = await Race.insertMany(newRaces);
        return res.json({ add, update });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
