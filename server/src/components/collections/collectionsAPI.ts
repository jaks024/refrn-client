import express, { Request, Response, NextFunction } from 'express';
import { getCollection } from './collectionsController';

export const collectionRouter = express.Router();

collectionRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await getCollection(req.params.id);
    } catch (error) {
      next(error);
    }
    res.send(req.params);
  },
);

collectionRouter.post('/', (req: Request, res: Response) => {
  res.send('received collection');
});

collectionRouter.put('/:id', (req: Request, res: Response) => {
  res.send('updated collection');
});

collectionRouter.delete('/:id', (req: Request, res: Response) => {
  res.send('deleted collection');
});
