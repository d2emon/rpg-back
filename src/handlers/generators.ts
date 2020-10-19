import express from 'express';
import generateCharacter from '../helpers/character';

export const randomCharacterHandler = (req: express.Request, res: express.Response) => res
    .json(generateCharacter());
