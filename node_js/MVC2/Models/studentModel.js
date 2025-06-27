const fs = require("fs");

const path = require("path")

const getAllStudents = () => {
    try{
        const data = fs.readFileSync(path.resolve("Data", "data.json"), "utf-8")
        return JSON.parse(data) || [];
    }catch(err){
        return err.message;
    }
}

module.exports = getAllStudents