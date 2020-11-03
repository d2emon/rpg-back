import express from 'express';
import {
    getEdges,
    addEdge,
    getEdge,
    updateEdge,
    removeEdge,
} from '../handlers/edge';

const router = express.Router();

router.get('/', getEdges);
router.post('/', addEdge);
router.get('/:slug', getEdge);
router.put('/:characterId', updateEdge);
router.delete('/:characterId', removeEdge);

export default router;
