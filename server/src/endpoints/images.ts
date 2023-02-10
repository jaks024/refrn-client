import express, { Request, Response } from "express";

const imageRouter = express.Router();

imageRouter.get("/", (req: Request, res: Response) => {
  res.send("image");
});

export default imageRouter;
