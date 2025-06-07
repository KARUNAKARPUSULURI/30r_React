const http = require("http")
const fs = require("fs");
const path = require("path");

const filePath = path.resolve("Http", "students.json")

const server = http.createServer((req, res) => {
    if (req.url == "/posts" && req.method == "GET") {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) throw new Error(err)
            else {
                res.end(data)
            }
        })
    }
    else if (req.url == "/posts" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            const newData = JSON.parse(body); //{}
            const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
            const id = data.length + 1;
            data.push({ id, ...newData })
            fs.writeFileSync(filePath, JSON.stringify(data))
            res.end(JSON.stringify(data))
        })
    }
    else if (req.url.startsWith("/posts/") && req.method == "PUT") {
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            const updatedData = JSON.parse(body); //{}
            const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
            const splittedUrl = req.url.split("/") //[] -> 3 -> 2
            const uId = splittedUrl[splittedUrl.length - 1]
            const matchedIndex = data.findIndex(obj => obj.id == uId)
            data[matchedIndex] = { id: Number(uId), ...updatedData }
            fs.writeFileSync(filePath, JSON.stringify(data))
            res.end(JSON.stringify(data))
        })
    }
    else if (req.url.startsWith("/posts/") && req.method == "PATCH") {
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            const updatedData = JSON.parse(body); //{}
            const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
            const splittedUrl = req.url.split("/") //[] -> 3 -> 2
            const uId = splittedUrl[splittedUrl.length - 1]
            const matchedIndex = data.findIndex(obj => obj.id == uId)
            data[matchedIndex] = { ...data[matchedIndex], ...updatedData }

            //data[matchedIndex] = {id : 2, name : "karunakar", age : 30}
            //updatedData = {name : "chaitanya"}
            //data[matchedIndex] = {id : 2, name : "karunakar", age : 30, name : "chaitanya"}
            fs.writeFileSync(filePath, JSON.stringify(data))
            res.end(JSON.stringify(data))
        }) //"posts/4"
    }else if (req.url.startsWith("/posts/") && req.method == "DELETE"){
        const splittedUrl = req.url.split("/")
        const uId = splittedUrl[splittedUrl.length - 1] //getting id
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8")); //[{}, {}, ...]
        const filteredData = data.filter(obj => obj.id != uId) //[{},{},{}]
        fs.writeFileSync(filePath, JSON.stringify(filteredData))
        res.end(JSON.stringify(filteredData))
    }else{
        res.end("page not found")
    }
}).listen(4000)