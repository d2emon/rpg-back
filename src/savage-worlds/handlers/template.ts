import express from 'express';
import { Query } from 'mongoose';
import CharacterTemplate, {
    ICharacterTemplateDocument,
} from '../models/characterTemplate';
import templatesFixture from '../fixtures/templates';

export const getCharacterTemplates = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const templates = await CharacterTemplate
            .find(query);
        return res.json({ templates });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addCharacterTemplate = async (req: express.Request, res: express.Response) => {
    try {
        const template = new CharacterTemplate(req.body);
        const result = await template.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getCharacterTemplate = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const template = await CharacterTemplate.findOne({ slug });
        return res.json({ template });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateCharacterTemplate = async (req: express.Request, res: express.Response) => {
    try {
        const result = await CharacterTemplate.findByIdAndUpdate(req.params.id, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeCharacterTemplate = async (req: express.Request, res: express.Response) => {
    try {
        const result = await CharacterTemplate.findByIdAndDelete(req.params.id);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const fillCharacterTemplates = async (req: express.Request, res: express.Response) => {
    try {
        const slugs: string[] = templatesFixture.map((template: ICharacterTemplateDocument) => template.slug);
        const models = await CharacterTemplate
            .find({
                slug: {
                    $in: slugs,
                }
            })
            .select([
                'slug',
            ]);

        const found: string[] = models.map((template) => template.slug);
        const updates: Query<any>[] = [];
        const newCharacterTemplates: ICharacterTemplateDocument[] = templatesFixture.reduce(
            (templates: ICharacterTemplateDocument[], template: ICharacterTemplateDocument) => {
                if (found.indexOf(template.slug) < 0) {
                    templates.push(template);
                } else {
                    updates.push(CharacterTemplate.updateOne({ slug: template.slug }, template.toObject()));
                }
                return templates;
            },
            [],
        );

        const update = await Promise.all(updates);
        const add = await CharacterTemplate.insertMany(newCharacterTemplates);
        return res.json({ add, update });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
