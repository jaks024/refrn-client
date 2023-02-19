import express, { Request, Response, NextFunction } from 'express';
import { createCollection, getCollection } from './collectionsController';
import { CollectionDto } from './types';

export const collectionRouter = express.Router();

collectionRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await getCollection(req.params.id);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

collectionRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received psot');
      const testObj: CollectionDto = {
        name: 'test name',
        description: 'test desc',
        imageIds: ['123', 'abc'],
        cover: 'coverurl',
      };
      const response = await createCollection(testObj);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

collectionRouter.put('/:id', (req: Request, res: Response) => {
  res.send('updated collection');
});

collectionRouter.delete('/:id', (req: Request, res: Response) => {
  res.send('deleted collection');
});
