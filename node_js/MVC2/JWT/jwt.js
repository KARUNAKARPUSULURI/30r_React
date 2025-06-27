const express = require("express")
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "karuna123";

app.use(express.json());


function verifyToken(req, res, next){
    const token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, secretKey)
    req.user = decoded
    next();
}

app.use(verifyToken)


app.post("/login", (req, res) => {
    const {username, password} = req.body; //{username : "", password : ""}
    const data = JSON.parse(fs.readFileSync(path.resolve("JWT", "data.json")))
    const payload = data.find(obj => obj.username == username && obj.password == password)
    const token = jwt.sign(payload, secretKey, {expiresIn : "1hr"});
    res.json({
        message : "successfully logged in",
        data : payload,
        token, 
        status : 200
    })
})

app.get("/home", verifyToken, (req, res) => {
    const body = req.user;
    res.json(body)
})

app.listen(3000, () => {
    console.log("server is running!")
})



