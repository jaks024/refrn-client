import express, { Express, Response, Request } from "express";
const app: Express = express();
const port = 3001;

app.use("/image", require("./endpoints/images"));
app.use("/collection", require("./endpoints/collections"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World aaa!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("test app");
});
