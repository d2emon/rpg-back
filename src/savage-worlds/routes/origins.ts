import express from 'express';
import {
    getOrigins,
    addOrigin,
    getOrigin,
    updateOrigin,
    removeOrigin,
} from '../handlers/origin';

const router = express.Router();

router.get('/', getOrigins);
router.post('/', addOrigin);
router.get('/:slug', getOrigin);
router.put('/:id', updateOrigin);
router.delete('/:id', removeOrigin);

export default router;
