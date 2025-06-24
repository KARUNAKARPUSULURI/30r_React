const express = require('express');
const { getStaffControllers, createStaffController } = require('../Controllers/staffController');

const staffRouter = express.Router(); 

staffRouter.get("/", getStaffControllers)
staffRouter.post("/", createStaffController)


module.exports = staffRouter