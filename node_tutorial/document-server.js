const fs = require('fs')
const http = require('http')

const server = http.createServer();
server.listen(5000);

// just sending data through server 
// server.on('request',(req,res)=>{
//     const text = fs.readFileSync('./files/larger-text.txt','utf8');
//     res.end(text);
// });

server.on('request',(req,res)=>{
    const fileStream = fs.createReadStream('../files/larger-text.txt',{encoding:'utf8'});
   // server emmits a event on file stream open 
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })

    // server emmits event on error
    fileStream.on('error',(err)=>{
        res.end(err.message);
    }) 
})