let key ="my file is ready for export";

console.log("I am in owner.js"); //Always show in require file

let a=10;
function show(msg){
 //return 'i am in owner function'+msg;
 console.log(msg);
}
module.exports = {
    str:key,
    int:a,
    showFun:show
}// send in key value pair