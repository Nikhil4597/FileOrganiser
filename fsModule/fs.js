
let fs = require('fs');
let path = require('path');
let content = fs.readFileSync("abc.txt")//reading tool
console.log(content+"");

fs.writeFileSync("bcd.txt","show me your real power");//overWrite or making file function
console.log(fs.readFileSync("bcd.txt","utf-8"));
fs.appendFileSync("bcd.txt"," infinty stone");//adding txt perpose
console.log(fs.readFileSync("bcd.txt","utf-8"));
//fs.unlinkSync("bcd.text")//file delete function


//directories
// fs.mkdirSync("Mydir");//making dir
// fs.rmdirSync("Mydir"); //for remove dir
let show = fs.existsSync("bcd.txt");
console.log(show); //file exist or not
//status of file or dir
// let objfile =fs.lstatSync('abc.txt');
// console.log(objfile);//is dir
// console.log(objfile.isDirectory());//is file

// console.log(objfile.isFile());
let innerdir = fs.readdirSync('Mydir');
console.log(innerdir);
// let path = "/home/rohit";
// console.log(fs.readdirSync(path));
//copy file from one dir to another
let srcpath  ='/home/rohit/Desktop/pep_coding/DEv/fileOrg/fsModule/abc.txt';
let despath ='/home/rohit/Desktop/pep_coding/DEv/fileOrg/fsModule/Mydir/b.text';
let baseName = path.basename(srcpath);
let dest = path.join('/home/rohit/Desktop/pep_coding/DEv/fileOrg/fsModule/Mydir',baseName);
console.log(dest);
fs.copyFileSync(srcpath,despath);
fs.copyFileSync(srcpath,dest);//if file not exist its make but if dir not exist they show error