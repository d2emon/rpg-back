import express from 'express';
import {
    fillSkills,
} from '../handlers/skill';
import checkAdmin from '../middlewares/checkAdmin';
import {
    fillEdges,
} from '../handlers/edge';
import {
    fillHindrances,
} from '../handlers/hindrance';

const router = express.Router();

router.use(checkAdmin);

router.post('/skills', fillSkills);
router.post('/edges', fillEdges);
router.post('/hindrances', fillHindrances);

export default router;
