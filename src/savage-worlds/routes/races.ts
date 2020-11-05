import express from 'express';
import {
    getRaces,
    addRace,
    getRace,
    updateRace,
    removeRace,
} from '../handlers/race';

const router = express.Router();

router.get('/', getRaces);
router.post('/', addRace);
router.get('/:slug', getRace);
router.put('/:id', updateRace);
router.delete('/:id', removeRace);

export default router;
