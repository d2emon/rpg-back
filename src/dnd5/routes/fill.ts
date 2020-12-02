import express from 'express';
import {
    fillRaces,
} from '../handlers/race';

const router = express.Router();

router.post('/races', fillRaces);

export default router;
