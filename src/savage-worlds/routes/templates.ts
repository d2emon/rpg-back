import express from 'express';
import {
    getCharacterTemplates,
    addCharacterTemplate,
    getCharacterTemplate,
    updateCharacterTemplate,
    removeCharacterTemplate,
} from '../handlers/template';

const router = express.Router();

router.get('/', getCharacterTemplates);
router.post('/', addCharacterTemplate);
router.get('/:slug', getCharacterTemplate);
router.put('/:id', updateCharacterTemplate);
router.delete('/:id', removeCharacterTemplate);

export default router;
