const http = require("http");
const path = require("path");
const fs = require("fs");

//http://localhost:3000/users/5 -> {},{},{}
const pathFile = path.resolve("Http", "students.json");

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/users/") && req.method == "GET") {
        const splittedUrl = req.url.split("/");
        const uId = splittedUrl[splittedUrl.length - 1];
        const data = JSON.parse(fs.readFileSync(pathFile, "utf-8"));
        const foundObj = data.find(obj => obj.id == uId)  // 2 == 5 -> ? - >x -> undefined -> undfined
        if (!foundObj) res.end("user not found")
        else {
            res.end(JSON.stringify(foundObj))
        }
    }
})

server.listen(3000)

