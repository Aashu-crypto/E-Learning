const express = require("express");
const router = express.Router();
const courseRouter = require("./CourseRoutes");
const userRouter = require("./UserRoutes");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

module.exports = router;
