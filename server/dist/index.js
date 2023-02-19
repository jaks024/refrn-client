import express from 'express';
import * as dotenv from 'dotenv';
import { collectionRouter } from './components/collections';
import { imageRouter } from './components/image';
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use('/image', imageRouter);
app.use('/collection', collectionRouter);
app.get('/', (req, res) => {
    res.send('Hello World! aaa');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log('test app');
});
