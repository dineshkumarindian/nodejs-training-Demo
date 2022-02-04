const http = require('http');

const fs = require('fs');
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    let myReadStream = fs.createReadStream(__dirname+'/register.html','utf-8');
    myReadStream.pipe(res);
})

const port = 4500;
server.listen(port,() =>{
    console.log('listening on the port of...',port);
})