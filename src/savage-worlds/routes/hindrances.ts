import express from 'express';
import {
    getHindrances,
    addHindrance,
    getHindrance,
    updateHindrance,
    removeHindrance,
} from '../handlers/hindrance';

const router = express.Router();

router.get('/', getHindrances);
router.post('/', addHindrance);
router.get('/:slug', getHindrance);
router.put('/:characterId', updateHindrance);
router.delete('/:characterId', removeHindrance);

export default router;
