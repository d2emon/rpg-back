import express from 'express';
import {
    fillSkills,
} from '../handlers/skill';

const router = express.Router();

router.post('/skills', fillSkills);

export default router;
