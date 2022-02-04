const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
server.listen(9898);
console.log(server);
const wsServer = new WebSocketServer({
    httpServer:server
})

wsServer.on('request',function(request){
    const connection = request.accept(null,request.origin);
    connection.on('message',function(message){
        console.log('received Message',message.utf8Data);
        connection.sendUTF('Hi,this is webSocket message');
    });
    connection.on('close',function(reasoncode,description){
        console.log('Client and disconnect');
    });
});


const webSocket = require('ws');
const wss = new webSocket.Server({port:8080});

wss.on('connection',ws =>{
    ws.on('message',message =>{
        console.log('Received message',)
    })
    ws.send('ho!')
})
