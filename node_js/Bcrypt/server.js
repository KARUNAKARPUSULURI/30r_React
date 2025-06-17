const http = require("http");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

const dataFile = path.resolve("Bcrypt", "data.json");

const server = http.createServer((req, res) => {
    if (req.url == "/register" && req.method == "POST") {
        //write logic
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            const newUser = JSON.parse(body);
            const data = JSON.parse(fs.readFileSync(dataFile, "utf-8"))
            const id = data.length + 1;
            const hashedPassword = bcrypt.hashSync(newUser.password, 10);
            data.push({ id, ...newUser, password: hashedPassword })

            res.end(JSON.stringify(data))
        })
    } else if (req.url == "/login" && req.method == "POST") {
        let body = "";
        req.on("data", chunk => body += chunk.toString())
        req.on("end", () => {
            const userInputs = JSON.parse(body)
            
            const matchedUser = data.find(user => (user.username == userInputs.username || user.email == userInputs.email) && user.password == userInputs.password);
            if (matchedUser) {
                res.end(JSON.stringify(matchedUser))
            } else {
                res.end("Invalid credentials")
            }
        })
    }
}).listen(10000, ()=> console.log("Server is running"))