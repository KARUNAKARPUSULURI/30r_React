const getAllStudents = require("../Models/studentModel")

const getStudentsController = (req, res) => {
    res.json(getAllStudents())
}

module.exports = getStudentsController;