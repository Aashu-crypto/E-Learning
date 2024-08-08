const express = require("express");
const router = express.Router();
const userRouter = require("./UserRoutes");
const app = express();

app.use("/user", userRouter);

module.exports = router;
