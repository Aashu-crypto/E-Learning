const express = require("express");
const { CourseDetails } = require("../controller/courseController");

const router = express.Router();

router.get("/all/details", CourseDetails);
export router
