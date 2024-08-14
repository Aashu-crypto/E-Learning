import express from "express";
const router = express.Router();
const courseRouter = require("./CourseRoutes");
const userRouter = require("./UserRoutes");

router.use("/user", userRouter);
router.use("/course", courseRouter);

export default router;
