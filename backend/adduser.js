//file system module; this helps us to read or write files
const fs = require ('fs'); //importing the module

//using the file system module
//fs.readFile('readme.txt', function(err,data){
   // console.log(data)
//})

//best practice to read or write into a particular file.
function adduser(username,age){

const dataStruc = {
    username : null,
    age:null
}

const data = fs.readFileSync('DataSource.json','utf-8')
//console.log(JSON.parse(data)); //using json to parse the data as it is a json file
//or
let newData = JSON.parse(data)
console.log(newData)

let prop = Object.create(dataStruc)
prop.username = username
prop.age = age
newData.push(prop)

//write
fs.writeFileSync('DataSource.json',JSON.stringify(newData));

};

module.exports = adduser