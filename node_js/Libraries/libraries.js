const http = require("http");
const bcrypt = require("bcrypt");

const dotenv = require("dotenv");

dotenv.config();

// const port = process.env.PORT || 5000;
process.env.PORT = 5000;

console.log(process.env.PORT)

const server = http.createServer((req, res) => {
    const obj = {
        password : "karna123"
    }
    const hashedPassword = bcrypt.hashSync(obj.password, 10);
    res.end(hashedPassword);
})

console.log(process.env.PORT);

server.listen(process.env.PORT, () => {
    console.log("server is running ", process.env.PORT, process.env.domain)
})