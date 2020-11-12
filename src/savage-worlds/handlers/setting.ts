import express from 'express';
import Race from '../models/race';
import CharacterTemplate from '../models/characterTemplate';
import Skill from '../models/skill';
import Edge from '../models/edge';
import Hindrance from '../models/hindrance';

const savageWorlds = {
    name: '',
    slug: 'default',
    races: {},
    skills: {},
    templates: {
        slug: {
            $in: [
                'mad-scientist',
                'driver',
            ],
        },
    },
    edges: {},
    hindrances: {},
    items: {},
};
const redLand = {
    name: 'Красная Земля',
    slug: 'red-land',
    races: {
        slug: 'human',
    },
    skills: {},
    templates: {
        slug: {
            $in: [
                'adventurer',
                'ataman',
                'fighter',
                'warrior',
                'diplomat',
                'idealist',
                'explorer',
                'leader',
                'mystic',
                'solo',
                'crafter',
                'dodger',
            ],
        },
    },
    edges: {},
    hindrances: {},
    items: {},
};

export const getSettings = async (req: express.Request, res: express.Response) => {
    try {
        const settings = [
            redLand,
        ];
        return res.json({ settings });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addSetting = async (req: express.Request, res: express.Response) => {
    try {
        return res.status(404).json({ error: ' Not Found' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getSetting = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';

        const settings: { [slug: string]: any } = {
            'red-land': redLand,
        };

        const setting = settings[slug] || savageWorlds;

        const races = await Race.find(setting.races);
        const templates = await CharacterTemplate.find(setting.templates);
        const skills = await Skill.find(setting.skills);
        const edges = await Edge.find(setting.edges);
        const hindrances = await Hindrance.find(setting.hindrances);
        const items: string[] = []; // await Promise.resolve([]);

        const origins: string[] = [];
        const movements: string[] = [];

        return res.json({
            setting: {
                name: setting.name,
                slug: setting.slug,
                races,
                templates,
                skills,
                edges,
                hindrances,
                items,
                // red land
                origins,
                movements,
            }
        } );
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateSetting = async (req: express.Request, res: express.Response) => {
    try {
        return res.status(404).json({ error: ' Not Found' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeSetting = async (req: express.Request, res: express.Response) => {
    try {
        return res.status(404).json({ error: ' Not Found' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
