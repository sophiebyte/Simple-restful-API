/* METHOD 1:
const http = require('http');

http.createServer(function(req,res){
    res.end("Hello user");

}).listen(2000,function(){
    "server has started"
})*/

//ANOTHER METHOD:
const http = require('http');
const cors = require('cors');
const url = require('url');
const UserAc = require('./adduser')
const calldata = require('./DataSource.json')
const server = http.createServer(function (req, res) {

    const data = [{ username: 'naomi', age: '10' },
    { username: 'sefa', age: '15' },
    { username: 'sophie', age: '18' }
    ]


    //to avoid having all information muddles up or on the same apge. we can use url module
    if (req.url == '/') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write("welcome");
        res.end();
    } 
    else if (req.url == '/users') {
res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200, { 'Content_Type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
    }
    else if (req.url == '/adduser?username=Thelma&age=15'){
        const newUrl = url.parse(req.url, true)
        const params = newUrl.query
        let username = params.username;
        let age = params.age;
        UserAc(username,age);
        res.end("record added");
    }
    else if (req.url.startsWith('/addNewUser')) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Content_Type': 'application/json' });
        const newUrl = url.parse(req.url, true)
        const params = newUrl.query
        let u_name = params.username;
        let u_age = params.age;
        UserAc(u_name, u_age);
        res.end("record added Succesfully");
    }
    else if (req.url.startsWith('/getCallData')) {
        res.setHeader('Access-Control-Allow-Origin','*');
                res.writeHead(200, { 'Content_Type': 'application/json' });
                res.write(JSON.stringify(calldata));
                res.end("call data successful");
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write("contact page");
        res.end();
    } else {
        res.writeHead(404, { 'Content_Type': 'text/html' });
        res.end();
    }
})
server.listen(5000, function () {
    console.log("server running");
})