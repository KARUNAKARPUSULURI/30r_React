const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.resolve("Http", "students.json");

// module -> student, staff -> 197 -> 29{2300}, 4

//step 1 :- Client sends the request -> {url, body, headers, method}
//fetch(url, {method : "POST", headers: {}, body:})
//Need to receive at the server end -> collect -> variable -> newData{}
// students.json -> readfile -> [{}] -> format string -> parse -> Type [{}] -> data[{},{}] -> data.push(newData)
//need to override the current students.json file with the updated data -> writefile

const server = http.createServer((req, res) => {
    if (req.url == "/users" && req.method == "GET") {
        const dataInFile = fs.readFileSync(filePath, "utf-8");
        res.end(dataInFile)
    } else if (req.url == "/users" && req.method == "POST") {
        let body = '';
        req.on("data", (chunk)=> body = body + chunk.toString());
        req.on("end", () => {
            const parsedBody = JSON.parse(body) //{}
            const studentsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            const id = studentsData.length + 1
            studentsData.push({id, parsedBody}) // {id, name, pasword} // {id, ...}
            fs.writeFileSync(filePath, JSON.stringify(studentsData))
            res.end(JSON.stringify(studentsData));
            // console.log(studentsData) // [{},{}] -> type -> Object -> [] ->Array
        })

        // let newData = '{"user": "karunakar","paswod":"2435"}';
        // newData = newData + chunks
        //collect the data
        //req.on
        // -> variable -> 
    //     //{
    //     "user" : "karunakr",
    //         "paswod": "2435"
    // }
    //node js -> when you receive the data, the data comes like a small pieces (chunks)
    // {"user"
    // : "karun
    // akar","p
    //aswod":
    //"2435"}
    // res.end("im a post request")
}
})

server.listen(3000, () => {
    console.log("server is running")
})