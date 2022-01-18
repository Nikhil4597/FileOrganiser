let fs = require("fs");
let path = require("path");
 
let takeInput = process.argv.slice(2);
let inputDir = takeInput[0]; //my file path

// console.log(inputdir);
let findFile = fs.readdirSync(inputDir);
console.log('All entities are ',findFile);

let  content ='';

 for(let i =0;i<findFile.length;i++)
 {
     let entity = findFile[i];
     let filePath = path.join(inputDir,entity); //file path 
     let stats= fs.lstatSync(filePath);//give states data
     let isFile = stats.isFile();
     if(isFile)
     {
         let extName = path.extname(filePath);
            
         if(extName == '.txt')
        {
            content+=fs.readFileSync(filePath);
        }
    }
 }

 fs.writeFileSync('summeryPath',content);