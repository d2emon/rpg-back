import express from 'express';
import {
    getCharacters,
    getCharacter,
    addCharacter,
    updateCharacter,
    removeCharacter,
} from '../handlers/character';

const router = express.Router();

router.get('/', getCharacters);
router.post('/', addCharacter);
router.get('/:slug', getCharacter);
router.put('/:id', updateCharacter);
router.delete('/:id', removeCharacter);

export default router;
