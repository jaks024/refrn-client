import express, { Express, Response, Request } from "express";
import collectionRouter from "endpoints/collections";
import imageRouter from "endpoints/images";

const app: Express = express();
const port = 3001;

app.use("/image", imageRouter);
app.use("/collection", collectionRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World aaa!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("test app");
});
