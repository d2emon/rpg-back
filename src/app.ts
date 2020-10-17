import bodyParser from 'body-parser'
import express from 'express'
// import mongoose from 'mongoose'
import path from 'path'
import logger from 'morgan'
import {
    error404,
    errorHandler,
} from './handlers/error';
import log from './log'
// import routes from './routes'

const app =express();

const publicPath = path.join(__dirname, '..', 'public');
log.debug(`Public path: ${publicPath}`);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

// app.use('/', routes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
