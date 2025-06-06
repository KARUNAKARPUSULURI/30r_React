{
  appendFile: [Function: appendFile],
  existsSync: [Function: existsSync],
  mkdir: [Function: mkdir],
  readFile: [Function: readFile],
  readFileSync: [Function: readFileSync],
  rm: [Function: rm],
  rmdir: [Function: rmdir],
  rmdirSync: [Function: rmdirSync],
  unlink: [Function: unlink],
  writeFile: [Function: writeFile],
  writeFileSync : [Function : writeFileSync]
}


files :- 
asynchornous
readFile
writeFile
appendFile
unlink

synchronous:- 
readFileSync
writeFileSync
appendFileSync
unlinkSync


folders
<!-- 
console.log("hello")
readFile()
console.log("hi") -->


./path.js, 

<!-- options: ({ encoding?: null | undefined; flag?: string | undefined; } & EventEmitter.Abortable) | undefined | null,  -->

callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void
