const path = require("path")
const os = require("os")
console.log(os.hostname())
//-> 1KB -> 1024bytes
//1mb -> 1024kb
//os -> operating system -> 


// input : - {/screenshots/171265317136/2025}D://fakepath/screenshots -> "Screenshots",
// Date.now()
// new Date().getFullYear()

// const name = "karunakar"
// const imagefile = "vacation.png"

// console.log(path.join(__dirname, name, imagefile))


// // name, image
// karunakar/vacation.png
// console.log("hello",path.normalize('D:\\30R_MERN\\node_js\\Path'))

// console.log(module)
// input :- "C:/users/student/documents/project/report.txt"

// output :- report
// path.basename(input, ".txt")
// const folders = ["auto", "videos", "upload"]
// const filename = "video.mp4"
// //join -> path/ -> dirname.js
// path.join(__dirname, "auto", "video", "upload", "video.mp4")
//dirname -> D://nodejs/path
//dirname.js
// console.log(path.resolve("../Modules", "modules.js"))
// console.log(path.join("Screenshot", new Date().toLocaleDateString() ,String(Date.now())))
// console.log(__dirname)
// console.log(path.join("D:", "30R_MERN", "node_js", "Path", "Demo", "Hello", "Hello.js"))
//-> ./demo/hello/hello.js
// const moduleFilePath = path.join(D://nodejs/path, "./Modules", "modules.js")
// console.log(moduleFilePath)


//path.join(__dirname, "dirname.js") -> D://nodejs/path/dirname.js
// const joinedPath = path.join(__dirname, "dirname", "dirname.js")
// console.log(joinedPath)

//resolve


//parse
//D://Users/Karunakar/node_js/path.js
// const parsedPath = path.parse(__filename)
// console.log("parsed", parsedPath);

// const formattedPath = path.format(parsedPath)
// console.log(formattedPath)
// // {
//     basename : "path.js",
//     extname: ".js",
//     dirname : "D://Users/Karunakar/node_js",
//     root: "D:/"
// }

//name=karunakar&age=30
// {
//     name : "karunakar",
//     age : 30
// }


// const filePath = __filename;
// if(path.isAbsolute(filePath)){
//     const filename = path.basename(__filename, ".html") //path.js
//     const foldername = path.dirname(__filename)
//     const extensionname = path.extname("D://hello/nodejs/day1js")
//     //D:/FakePath/Path/Pathjs
//     console.log(filename, foldername,extensionname)
// }

// console.log(path) //{basename, }

//basename -> filename -> path.js
//dirname -> return path till the folder from the root folder
//extname -> returns the file extension -> .js, .md, .html
//isAbsolute -> checks whether given path is absolute or not
//__filename -> 
//__dirname -> 



















// const filePath = "D://FakePath//hello.html"  //true
// const filePath = "/hello.html"  //false || true
//const  filepATH = "./hello" //false

// console.log(module.filename)
// console.log(__filename)
// console.log(module.path)
// console.log(__dirname)
// console.log("11", path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(filename)
// console.log(path.isAbsolute("/30R_MERN/node_js")) 
// console.log("")