const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io=socketIO(server);

io.on('connection',(socket) =>{
    console.log('connected to server');
    socket.emit('newMessage',{
        from:'dinesh@',
        text:'hepppp',
        createAt:123
    });
    socket.on('createMessage',(newMessage)=>{
        console.log('newMessage',newMessage);
    })
    socket.on('disconnect',()=>{
        console.log('disconnect from  user');
    })
})

server.listen(port,()=>{
    console.log("the port is listening....",port);
});






