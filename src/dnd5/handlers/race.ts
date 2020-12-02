import express from 'express';
import racesFixture from '../fixtures/races';
import Race from '../models/race';

export const getRaces = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const races = await Race.find(query);
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
        const result = await Promise.all(racesFixture.map((race) => {
            return Race.update({ slug: race.slug }, race, { upsert: true });
        }))
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
