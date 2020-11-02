import express from 'express';
import Character from '../models/character';

export const getCharacters = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const characters = await Character
            .find(query)
            .select([
                'slug',
                'name',
            ]);
        return res.json({ characters });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getCharacter = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const character = await Character.findOne({ slug });
        return res.json({ character });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addCharacter = async (req: express.Request, res: express.Response) => {
    try {
        const character = new Character(req.body);
        const result = await character.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateCharacter = async (req: express.Request, res: express.Response) => {
    try {
        const characterId = req.params.characterId || null;
        const result = await Character.findByIdAndUpdate(characterId, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeCharacter = async (req: express.Request, res: express.Response) => {
    try {
        const characterId = req.params.characterId || null;
        const result = await Character.findByIdAndDelete(characterId);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
