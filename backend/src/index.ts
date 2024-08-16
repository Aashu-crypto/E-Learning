import express from "express";

import rootRouter from './routes/index'

const app = express();
app.use("api/vi", rootRouter);
app.get("/", (req, res) => {
  res.json({ working: "Fine" });
});

app.listen(3003);
