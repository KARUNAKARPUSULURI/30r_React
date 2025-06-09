const path = require("path");
const fs = require("fs");
const pathFile = path.resolve("MVC", "students.json")

const getAllStudentsDataFromJSON = () => {
    try {
        const data = fs.readFileSync(pathFile, "utf-8")
        return JSON.parse(data) || []
    } catch (err) {
        return err.message;
    }
};

const createStudentsData = (data) => {
    return fs.writeFileSync(pathFile, JSON.stringify(data))
}

module.exports = {getAllStudentsDataFromJSON, createStudentsData}