import express from 'express';
import {
    fillSkills,
} from '../handlers/skill';
import checkAdmin from '../middlewares/checkAdmin';

const router = express.Router();

router.use(checkAdmin);

router.post('/skills', fillSkills);

export default router;
