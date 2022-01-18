function helpFunction(){
    console.log(
        'List of all commannd \n'+
       ' 1. node main.js tree <pathName> \n'+
       '2. node main.js organize <pathName>\n'+
       '3. node main.js help \n'
    );
    module.exports = {
        help:helpFunction
    };
}