import express, { NextFunction, Request, Response } from 'express';
import { createImage } from './imagesController';
import { ImageDto } from './types';

export const imageRouter = express.Router();

imageRouter.get('/', (req: Request, res: Response) => {
  res.send('image');
});

imageRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received psot');
      const testObj: ImageDto = {
        url: 'test url',
        name: 'test name',
        description: 'test desc',
        source: 'test source',
        tags: ['t1', 't2'],
        transforms: ['trans1', 'trans2'],
      };
      const response = await createImage(testObj);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);
