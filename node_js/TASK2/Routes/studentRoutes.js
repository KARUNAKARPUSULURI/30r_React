const express = require('express');
const { getStudentsControllers, createStudentsController } = require('../Controllers/studentController');


const studentRouter = express.Router(); 

studentRouter.get("/", getStudentsControllers)
studentRouter.post("/", createStudentsController )


module.exports = studentRouter