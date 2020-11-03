import bodyParser from 'body-parser'
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
import debug from 'debug';

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

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
