const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = 5000;
const studentsFilePath = path.resolve("Http", "students.json")

//http://localhost:3000/students?name=karunakar&password=2134

const server = http.createServer((req, res) => {
    if(req.url == "/students" && req.method == "GET"){
       const data =  fs.readFileSync(studentsFilePath, "utf-8")
       res.end(data)
    }else if(req.url == "/students" && req.method == "POST"){
        res.end("hello this is post request")
    }
    // console.log(req.method == "get")
    //streams, event emitters,
})

server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})