const fs = require('fs');
const path = require('path');
 let takeInput = process.argv.slice(2);
 let myDir = takeInput[0];
 let subDir = takeInput.slice(1);
 
 let mainDirPath = path.join(process.cwd(),myDir);
 if(!fs.existsSync(mainDirPath)){
     fs.mkdirSync(mainDirPath);
 }
//  fs.mkdirSync(mainDirPath);
 for(let i =0;i<subDir.length;i++)
 {
     let sub2Dir = path.join(mainDirPath,subDir[i]);
    //  console.log("Folder Path", sub2Dir);
    if(!fs.existsSync(sub2Dir))
    {
        fs.mkdirSync(sub2Dir);
    }
    for(let j=1;j<=3;j++)
    {
    //    let fName = 'Module'+j;
        let folder = path.join(sub2Dir,`Module ${j}`);
        if(!fs.existsSync(folder))
        {
            fs.mkdirSync(folder);
        }
        let fileName = path.join(folder,'content.md');
 }