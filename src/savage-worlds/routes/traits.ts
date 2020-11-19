import express from 'express';
import {
    getRacialTraits,
    addRacialTrait,
    getRacialTrait,
    updateRacialTrait,
    removeRacialTrait,
} from '../handlers/trait';

const router = express.Router();

router.get('/', getRacialTraits);
router.post('/', addRacialTrait);
router.get('/:slug', getRacialTrait);
router.put('/:id', updateRacialTrait);
router.delete('/:id', removeRacialTrait);

export default router;
