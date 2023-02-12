import express, { Request, Response } from 'express';

export const collectionRouter = express.Router();

collectionRouter.get('/', (req: Request, res: Response) => {
  res.send('collections');
});
