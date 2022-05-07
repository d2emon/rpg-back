import express from 'express';
import {
    getSettings,
    addSetting,
    getSetting,
    updateSetting,
    removeSetting,
} from '../handlers/setting';

const router = express.Router();

router.get('/', getSettings);
router.post('/', addSetting);
router.get('/:slug', getSetting);
router.put('/:id', updateSetting);
router.delete('/:id', removeSetting);

export default router;
