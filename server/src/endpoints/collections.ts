import express, { Request, Response } from "express";

const collectionRouter = express.Router();

collectionRouter.get("/", (req: Request, res: Response) => {
  res.send("collections");
});

export default collectionRouter;
