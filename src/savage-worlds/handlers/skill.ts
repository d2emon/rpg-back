import express from 'express';
import Skill, {
    ISkillDocument,
} from '../models/skill';
import skillsFixture from '../fixtures/skills';
import {Query} from "mongoose";

export const getSkills = async (req: express.Request, res: express.Response) => {
    try {
        const query = {};
        const skills = await Skill
            .find(query)
            .select([
                'slug',
                'name',
            ]);
        return res.json({ skills });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const addSkill = async (req: express.Request, res: express.Response) => {
    try {
        const skill = new Skill(req.body);
        const result = await skill.save();
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getSkill = async (req: express.Request, res: express.Response) => {
    try {
        const slug = req.params.slug || '';
        const skill = await Skill.findOne({ slug });
        return res.json({ skill });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const updateSkill = async (req: express.Request, res: express.Response) => {
    try {
        const characterId = req.params.characterId || null;
        const result = await Skill.findByIdAndUpdate(characterId, req.body);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const removeSkill = async (req: express.Request, res: express.Response) => {
    try {
        const characterId = req.params.characterId || null;
        const result = await Skill.findByIdAndDelete(characterId);
        return res.json({ result });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const fillSkills = async (req: express.Request, res: express.Response) => {
    try {
        const slugs: string[] = skillsFixture.map((skill) => skill.slug);
        const models = await Skill
            .find({
                slug: {
                    $in: slugs,
                }
            })
            .select([
                'slug',
            ]);

        const found: string[] = models.map((skill) => skill.slug);
        const updates: Query<any>[] = [];
        const newSkills: ISkillDocument[] = skillsFixture.reduce(
            (skills: ISkillDocument[], skill: ISkillDocument) => {
                if (found.indexOf(skill.slug) < 0) {
                    skills.push(skill);
                } else {
                    updates.push(Skill.updateOne({ slug: skill.slug }, skill.toObject()));
                }
                return skills;
            },
            [],
        );

        const update = await Promise.all(updates);
        const add = await Skill.insertMany(newSkills);
        return res.json({ add, update });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
