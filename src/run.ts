import Debug from 'debug';
import app from './app';

const debug = Debug(process.env.APP_NAME);
const port = process.env.PORT;

app.set('port', port);
app.listen(
    app.get('port'),
    () => debug(`Express server listening on port ${port}`),
);
