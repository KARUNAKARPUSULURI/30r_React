const studentsData = require("../Data/studentData");

const getStudentsControllers = (req, res) => {
    res.json(studentsData) //[]
}

const createStudentsController = (req, res) => {
    const newStudent = req.body;
    const data = studentsData;
    const id = data.length ? data[data.length - 1].stu_id + 1 : 1
    data.push({stu_id : id, ...newStudent})
    res.json(data)
}

module.exports  = {getStudentsControllers, createStudentsController}