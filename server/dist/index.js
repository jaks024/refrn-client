"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const endpoints_1 = require("./endpoints");
const app = (0, express_1.default)();
const port = 8000;
app.use('/image', endpoints_1.imageRouter);
app.use('/collection', endpoints_1.collectionRouter);
app.get('/', (req, res) => {
    res.send('Hello World! a');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log('test app');
});
