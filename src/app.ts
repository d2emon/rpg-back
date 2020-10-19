import bodyParser from 'body-parser'
import express from 'express'
// import mongoose from 'mongoose'
import path from 'path'
import logger from 'morgan'
import {
    error404,
    errorHandler,
} from './handlers/error';

import generateRoutes from './routes/generate';
import campaignRoutes from './routes/campaign';

const app =express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

// mongoDb.on('error', error => debug(error || ''));
// mongoDb.once('open', () => debug('MongoDB connected'));

app.use('/v1/generate', generateRoutes);
app.use('/v1/campaign', campaignRoutes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
