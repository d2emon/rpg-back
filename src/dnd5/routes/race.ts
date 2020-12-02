import express from 'express';
import {
    getRaces,
    addRace,
    updateRace,
    removeRace,
} from '../handlers/race';

const router = express.Router();

router.get('/', getRaces);
router.post('/', addRace);
router.put('/:id', updateRace);
router.delete('/:id', removeRace);

export default router;
