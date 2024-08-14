import prisma from "@repo/db/client";

import express from "express";

const rootRouter = require("./routes");

const app = express();
app.use("api/vi", rootRouter);
app.get("/", (req, res) => {
  res.json({ working: "Fine" });
});

app.listen(3003);
