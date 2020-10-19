import express from 'express';
import { randomCharacterHandler } from '../handlers/generators';

const router = express.Router();

router.get('/character', randomCharacterHandler);

export default router;
