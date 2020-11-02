import mongoose from 'mongoose';

export const connect = (uri: string) => mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);

export default mongoose.connection;
