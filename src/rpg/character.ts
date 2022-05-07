import express from 'express';

export default (characterModel: any) => ({
    getCharacters: async (req: express.Request, res: express.Response) => {
        try {
            const query = {};
            const characters = await characterModel
                .find(query)
                .select([
                    'slug',
                    'name',
                ]);
            return res.json({ characters });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },
    getCharacter: async (req: express.Request, res: express.Response) => {
        try {
            const slug = req.params.slug || '';
            const character = await characterModel.findOne({ slug });
            return res.json({ character });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },
    addCharacter: async (req: express.Request, res: express.Response) => {
        try {
            const character = new characterModel(req.body);
            const result = await character.save();
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },
    updateCharacter: async (req: express.Request, res: express.Response) => {
        try {
            const result = await characterModel.findByIdAndUpdate(req.params.id, req.body);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },
    removeCharacter: async (req: express.Request, res: express.Response) => {
        try {
            const result = await characterModel.findByIdAndDelete(req.params.id);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },
});
