import express from 'express';

const checkAdmin = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.query.token !== process.env.ADMIN_TOKEN) {
        return res.status(403).json({ error: 'Invalid token' });
    }
    return  next();
}

export default checkAdmin;
