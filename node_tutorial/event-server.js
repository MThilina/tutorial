const fs = require('fs')
const http = require ('http')

// const server = http.createServer((req,res)=>{
// res.end('Welcome');
// });

const server = http.createServer();
server.on('request',(req,res)=>{
res.end("Event Emitting Server..");
});

server.listen(5000)
