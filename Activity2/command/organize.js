let fs=require('fs');
const { type } = require('os');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}
function organizeFile(filePath){
let entities = fs.readdirSync(srcPath);
if(!fs.existsSync(organizedFolder))
{
    fs.mkdirSync(organizeFolder); 
}
for(let i =0; i<entities.length;i++)
{
    let entity = entities[i];
    if(fs.lstatSync(entity).isFile());
    {
        let type = checkType(entity);
        let entityFolder = path.join(organizeFolder,type);
        if(!fs.existsSync(entityFolder))
        {
            fs.mkdirSync(entityFolder);
        }
        let src = path.join( srcPath,entities[i]);
        let dest = path.join(entityFolder,entities[i]);
        fs.copyFileSync(src,dest);

    }
}
}
function checkType(file)
{
    for(let type in types)
    {
    for(let ext of types[type])
    {
        if(path.extname(file).split('.')[1]==ext)
        return type;
    }    
    }
return 'others';

}