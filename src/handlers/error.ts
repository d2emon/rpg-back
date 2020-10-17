import express from 'express'

class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export const error404 = (req: express.Request, res: any, next: express.NextFunction) => res
    .status(404)
    .json({
        error: {
            message: 'Not Found',
        },
    })

export const errorHandler = (env: string) => (error: HttpException, req: express.Request, res: express.Response) => res
    .status(error.status || 500)
    .json({
        error: {
            error: ((env === 'development') ? error : undefined),
            message: error.message,
        },
    })
