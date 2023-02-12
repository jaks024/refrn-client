"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.imageRouter = express_1.default.Router();
exports.imageRouter.get('/', (req, res) => {
    res.send('image');
});
