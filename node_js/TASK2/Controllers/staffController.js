const staffData = require("../Data/staffData");

const getStaffControllers = (req, res) => {
    res.json(staffData) //[]
}

const createStaffController = (req, res) => {
    const newStaff = req.body;
    const data = staffData;
    const id = data.length ? data[data.length - 1].id + 1 : 1
    data.push({id, ...newStaff})
    res.json(data)
}

module.exports  = {getStaffControllers, createStaffController}