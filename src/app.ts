import bodyParser from 'body-parser'
import debug from 'debug';
import express from 'express'
// import mongoose from 'mongoose'
import path from 'path'
import logger from 'morgan'
import {
    error404,
    errorHandler,
} from './handlers/error';
import mongoDb, {
    connect,
} from './helpers/mongo';

import generateRoutes from './routes/generate';
import campaignRoutes from './routes/campaign';

import swCharacterRoutes from './savage-worlds/routes/characters';
import swRaceRoutes from './savage-worlds/routes/races';
import swCharacterTemplateRoutes from './savage-worlds/routes/templates';
import swSkillRoutes from './savage-worlds/routes/skills';
import swEdgeRoutes from './savage-worlds/routes/edges';
import swHindranceRoutes from './savage-worlds/routes/hindrances';
import swFillRoutes from './savage-worlds/routes/fill';

const app =express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.set('db', connect(process.env.MONGO_URI));
mongoDb.on('error', (error: string) => debug(`${process.env.APP_NAME}:db:error`)(error));
mongoDb.once('open', () => debug(`${process.env.APP_NAME}:db`)('MongoDB connected'));

app.use('/api/v1.0/generate', generateRoutes);
app.use('/api/v1.0/campaign', campaignRoutes);

app.use('/api/v1.0/sw/character', swCharacterRoutes);
app.use('/api/v1.0/sw/race', swRaceRoutes);
app.use('/api/v1.0/sw/template', swCharacterTemplateRoutes);
app.use('/api/v1.0/sw/skill', swSkillRoutes);
app.use('/api/v1.0/sw/edge', swEdgeRoutes);
app.use('/api/v1.0/sw/hindrance', swHindranceRoutes);

app.use('/api/v1.0/sw/admin/fill', swFillRoutes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
