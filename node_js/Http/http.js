// //students -> jsonfile -> read -> get -> "/students" method = get -> send
//                                -> post -> "/students" method = post

const http = require("http");
const path = require("path")
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("<a href ='http://localhost:3000/students'>Go to Students Page</a>")
    }else if(req.url == "/students"){
        res.end("<p>hi students please go back to <a href = 'http://localhost:3000/'>GoBack</a></p>")
    }else{
        res.end("nothing to show")
    }
})

server.listen(port, () => {
    console.log("server is running on http://localhost:3000")
})