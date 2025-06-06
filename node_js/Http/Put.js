//PUT -> client -> data -> {}

const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.resolve("Http", "students.json")

const server = http.createServer((req, res)=>{
    if(req.url.startsWith("/users/") && req.method == "PUT"){
        let body = "";
        req.on("data", (chunk) => body = body + chunk.toString());
        req.on("end", () => {
            const splittedUrl = req.url.split("/") //["", "users", "2"]
            const uId = splittedUrl[splittedUrl.length - 1] //"2" -> 10
            const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) // Array [{},{},{}]
            const updatedData = JSON.parse(body);
            const objIndex = data.findIndex(obj => obj.id == uId) //iteration methods
            data[objIndex] = {id : Number(uId), ...updatedData}
            fs.writeFileSync(filePath, JSON.stringify(data))
            res.end(JSON.stringify(data[objIndex]))
        })

    }
})

server.listen(3000, ()=>{
     console.log("server isunning")
})