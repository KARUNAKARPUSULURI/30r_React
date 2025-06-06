Node js :- It is a run time envirnment where you can run your java script code outside the browser

->Node js is built in the combination of v8 engine and c++ 

-> It is a non-blocking I/O, Event Driven

-> it is asynchronous in nature or non-blocking

------------------------------------------------------------------------------------------------




Node js - > 

1. node js -> v8 engine + c++
2. 
products -> db -> server  

1. Top level code -> 

const res = await fetch();
console.log(res)

var a = 10
console.log()

2. Expired callbacks

3. promises
priorty -> top level code (synchrous), promises, browser apis
-> js -> execution -> callstack,microtask queue, macrotask queue

function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }
function logE() { console.log('E') }
function logF() { console.log('F') }

// Click the "RUN" button to learn how this works!
logA(); //0.1ms
setTimeout(logB, 5000); 5s
Promise.resolve().then(logC); 0.2ms
logF();0.1ms
Promise.resolve().then(logE);0.2ms
logD();0.1ms
5.07s

5.02s

console.Time()

console.TimeEnd()

callstack -> logA() -> A
            -> logF() -> F
            -> logD -> D
            -> logC -> C
            ->logE -> E
            ->logB ->B
task queue -> logB,

microtask queue - > 

Network call -> 

C++, V8 engine, libUV


client -> readfile() -> Main thread -> offload 
                                ->   LibUV -> ThreadPool -> Execute ->Kernel os
---------------------------------------------------------------------------

Modules -> Resuable block of code where you can use in any file by just importing and exporting
modules -> objects
types : -
1. esm
2. cjs -> preferred

import -> require(path)
export -> module

js -> esm -> import and export

node js -> cjs -> require()

modules.export = 

require()

npmjs -> esm -> imprt and export

1. user defined modules
2. Core modules(built in modules or pre defined modules) which are provided by node js itself
-> Path module -> you will be working on paths like contructing paths, accessing paths
-> OS module -> it tells about your os 
-> Http module -> here you can create your own servers
-> FS module -> File system -> here you will be working on files and folders 
3. third party modules -> 
-> express :- node js web framework
-> bcrypt :- karuna123 -> hash -> ert1y23908tqdyYUAI 
-> jwt :- JSON WEB TOKEN -> 
-> cors :- cors
-> dotenv :-  .ENV -> Username : karunakar -> .gitignore {.env}-> 
home -> username : karunakar
home -> username : Process.env.username 
-> body-parser :- JSON.stringify -> hello.json -> json.parse([]).push(obj)
-> nodemon :- 
-> multer :- file handling -> disk storage
-> Mongoose :- connector middleman 