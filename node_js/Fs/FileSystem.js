// fs -> readfile,readfilesync, writefile,writefilesync, existsSync

// -> append file -> data add -> Hello world
// const fs = require("fs");
// const path = require("path");

//import -> require()
//export -> module.exports = {asd, asd,asd}
a = 10
b  =10

module.exports = {a,b}

// n8n -> topic -> google sheet -> model -> 5mcqs -> whatsapp -> post -> 
// model -> 

// const filePath = path.resolve("Fs", "readme.txt")
// const txtPath = path.resolve("Fs", "hello.txt")

// fs.mkdir("index.js", ()=>{})

// fs.rmdir("Demo", {recursive : true} ,()=>{})
// fs.rm("Demo", {recursive: true} ,() => {})

// fs.appendFile(txtPath, "console.log('hello this is coming from append file \n');", ()=>{
//     console.log("file has been appended")
// })
//write and writefile
// const obj = [{
//     id : 1,
//     name : "karunakar"
// }]
// fs.open("./test.json", "w", (err, fd) => {
//     console.log("1")
//     if (err) return err.message;
//     console.log("2")
//     fs.write(fd, JSON.stringify(obj), (err) => {
//         console.log("3")
//         if(err) console.log("err", err);
//         console.log("4")
//         fs.close(fd, ()=>{
//             console.log("file closed");
//         })
//     })
// });

//unlink
// fs.unlink("Demo", ()=>{
//     console.log("file has been deleted")
// })