const express = require("express");
const getStudentsController = require("../Controllers/studentController");

const studentRouter = express.Router();

studentRouter.get("/students", getStudentsController)

module.exports = studentRouter