const { getAllUsers, createUser } = require("../Models/authModel");

const auth = (req, res)=>{
    if(req.url == "/register" && req.method == "POST"){
        //write logic
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", ()=>{
            const newUser = JSON.parse(body); 
            const data = getAllUsers();
            const id = data.length + 1;
            data.push({id, ...newUser})
            createUser(data);
            res.end(JSON.stringify(data))
        })
    }else if(req.url == "/login" && req.method == "POST"){
        let body = "";
        req.on("data", chunk => body += chunk.toString())
        req.on("end", ()=> {
            const userInputs = JSON.parse(body)
            const data = getAllUsers();
            const matchedUser = data.find(user => (user.username == userInputs.username || user.email == userInputs.email) && user.password == userInputs.password);
            if(matchedUser){
                res.end(JSON.stringify(matchedUser))
            }else{
                res.end("Invalid credentials")
            }
        })
    }
}

module.exports = auth;