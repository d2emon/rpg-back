import express from 'express';
import {
    getSkills,
    addSkill,
    getSkill,
    updateSkill,
    removeSkill,
} from '../handlers/skill';

const router = express.Router();

router.get('/', getSkills);
router.post('/', addSkill);
router.get('/:slug', getSkill);
router.put('/:characterId', updateSkill);
router.delete('/:characterId', removeSkill);

export default router;
