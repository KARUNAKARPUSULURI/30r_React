const { getAllStudentsDataFromJSON, createStudentsData } = require("../Models/studentModel");

const studentController = (req, res) => {
    const splittedUrl = req.url.split("/")
    const uId = splittedUrl[splittedUrl.length - 1];

    if (req.url == "/students" && req.method == "GET") {
        res.end(JSON.stringify(getAllStudentsDataFromJSON()));
    } else if (req.url.startsWith("/students/") && req.method == "GET") {
        const data = getAllStudentsDataFromJSON()
        const foundData = data.find(obj => obj.id == uId)
        foundData ? res.end(JSON.stringify(foundData)) : res.end("user not found")
    } else if (req.url == "/students" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            const newData = JSON.parse(body)
            const data = getAllStudentsDataFromJSON();
            const id = data.length + 1;
            data.push({ id, ...newData })
            createStudentsData(data)
            res.end(JSON.stringify(data))
        })
    } else if (req.url.startsWith("/students/") && req.method == "PUT") {
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            const updatedData = JSON.parse(body)
            const data = getAllStudentsDataFromJSON();
            const matchedIndex = data.findIndex(obj => obj.id == uId);
            if (matchedIndex == -1) {
                res.end("user not found")
            } else {
                data[matchedIndex] = { id : uId, ...updatedData }
                createStudentsData(data)
                res.end(JSON.stringify(data))
            }
        })
    } else if (req.url.startsWith("/students/") && req.method == "PATCH") {
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            const updatedData = JSON.parse(body)
            const data = getAllStudentsDataFromJSON();
            const matchedIndex = data.findIndex(obj => obj.id == uId);
            if (matchedIndex == -1) {
                res.end("user not found")
            } else {
                data[matchedIndex] = { ...data[matchedIndex], ...updatedData }
                createStudentsData(data)
                res.end(JSON.stringify(data))
            }
        })
    } else if (req.url.startsWith("/students/") && req.method == "DELETE") {
        const data = getAllStudentsDataFromJSON()
        const filteredData = data.filter(obj => obj.id != uId)
        createStudentsData(filteredData)
        res.end(JSON.stringify(filteredData))
    }
}

module.exports = studentController;