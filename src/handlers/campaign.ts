import express from 'express';
import campaigns from '../models/campaign';
import worlds from '../models/world';
import plots from "../models/plot";
import npcs from "../models/npc";

export const getCampaign = (req: express.Request, res: express.Response) => res
    .json(campaigns.find(c => (c.campaignId === parseInt(req.params.campaignId, 10))));

export const getWorld = (req: express.Request, res: express.Response) => res
    .json(worlds.find(c => (c.worldId === 1)));

export const getPlots = (req: express.Request, res: express.Response) => res
    .json(plots);

export const getNPCs = (req: express.Request, res: express.Response) => res
    .json(npcs);

export const getPCs = (req: express.Request, res: express.Response) => res
    .json(npcs);
