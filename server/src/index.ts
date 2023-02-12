import express, { Express, Response, Request } from 'express';
import { collectionRouter, imageRouter } from './endpoints';

const app: Express = express();
const port = 8000;

app.use('/image', imageRouter);
app.use('/collection', collectionRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! aaa');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('test app');
});
