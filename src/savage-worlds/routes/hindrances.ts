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
router.put('/:id', updateHindrance);
router.delete('/:id', removeHindrance);

export default router;
