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
import {
    fillRaces,
} from '../handlers/race';
import {
    fillCharacterTemplates,
} from '../handlers/template';
import {
    fillOrigins,
} from '../handlers/origin';

const router = express.Router();

router.use(checkAdmin);

router.post('/skills', fillSkills);
router.post('/edges', fillEdges);
router.post('/hindrances', fillHindrances);
router.post('/races', fillRaces);
router.post('/origins', fillOrigins);
router.post('/templates', fillCharacterTemplates);

export default router;
