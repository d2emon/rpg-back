#!/usr/bin/env node
import Debug from 'debug';
import http, { Server } from 'http';
import app from './app';
import config from './config';
import normalizePort from './helpers/normalizePort';

interface HttpError extends Error {
    code: string;
    syscall: string;
}

const debug = Debug(`${config.APP_NAME}:run`);

const port = normalizePort(config.PORT);

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('error', (error: HttpError) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            // tslint:disable-next-line
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            // tslint:disable-next-line
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

server.on('listening', () => {
    const addr = server.address();
    const bindAddr = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    const bindPort = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;
    debug(`Server listening on ${bindAddr}:${bindPort}`);
});
