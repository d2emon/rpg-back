import express from 'express';
import { error404 } from '../handlers/error';
import {
    getCampaign,
    getNPCs,
    getPCs,
    getPlots,
    getWorld,
} from '../handlers/campaign';

const router = express.Router();

router.get('/:campaignId', getCampaign);

router.get('/:campaignId/world', getWorld);
router.get('/:campaignId/plot', getPlots);
router.get('/:campaignId/npc', getNPCs);
router.get('/:campaignId/pc', getPCs);

router.get('/12', error404);
router.get('/13', error404);

router.get('/14', error404);
router.get('/15', error404);

router.get('/16', error404);
router.get('/17', error404);

//

router.get('/18', error404);
router.get('/19', error404);

router.get('/20', error404);

export default router;
