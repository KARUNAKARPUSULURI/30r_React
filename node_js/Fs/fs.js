const fs = require("fs");
const path = require("path");
// const { a, b } = require("./FileSystem");

// a
// b

const dataFile = path.resolve("Fs", "data.json")
const txtPath = path.resolve("Fs", "hello.txt")
const newData = {
    name: "ajay"
}

// fs.writeFile(dataFile, JSON.stringify(newData), ()=>{
//     console.log("content file has inserted into the file")
// });

// const num  = 456;

// const minusSign = Math.sign(num) 
// const positive = Math.abs(num)
// rev = 0
// while(num > 0){
//     rem
//     rev
//     div
// }

// rev = rev*minusSign
// fs.readFile(dataFile, "utf-8", (err, data) => {
//     if (err) console.log(err)
//     else {
//         const updateData = JSON.parse(data)
//         updateData.push(newData)
//         fs.writeFile(dataFile, JSON.stringify(updateData), () => {
//             console.log("file updatyed")
//         })
//     }
// })


// if (fs.existsSync(dataFile)) {
//     const data = JSON.parse(fs.readFileSync(dataFile, "utf-8"))
//     data.push(newData)
//     fs.writeFileSync(dataFile, JSON.stringify(data))
// }

// fs.readFileSync()
// fs.writeFileSync()
// res.end()

















// path.join(__dirname, "../Fs", "Path.js")
//Fs/Path/Path.js
//

// const Filepath = path.join(__dirname, "../Path", "Path.js");
const pathFile = path.resolve("Path", "Path.js");
// Fs -> ./Path
































// fs.readFile(pathFile, "utf-8", (err, data) => {
//     if (err) console.log("error");
//     else console.log(data)
// })