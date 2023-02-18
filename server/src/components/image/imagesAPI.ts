import express, { Request, Response } from 'express';

export const imageRouter = express.Router();

imageRouter.get('/', (req: Request, res: Response) => {
  res.send('image');
});
