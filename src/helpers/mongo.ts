import Debug from 'debug';
import mongoose from 'mongoose';
import config from '../config';

const debug = Debug(`${config.APP_NAME}:db`);

export const connect = (uri: string) => mongoose.connect(
    uri,
    /*
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    */
);

const mongoDb = mongoose.connection;

mongoDb.on('error', (error: string) => debug(error));
mongoDb.once('open', () => debug('MongoDB connected'));

export default mongoDb;
