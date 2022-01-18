let path = require("path")
let fs =require("fs");
let inputArr = process.argv.slice(2);
let fileName = inputArr[0];
let content = inputArr[1];
// console.log('fileName '+fileName);
// console.log("content "+content);
let currentpath = process.cwd();//current Path
console.log(currentpath);
let joinpath = path.join(currentpath,"abc","abc.txt");// current path 
console.log(joinpath);
let file = path.basename("path.js",'.js');//basename of a file
console.log(file);
let extname = path.extname("path.js");//extension of a file
console.log(extname);