const http = require('http')
const fs = require('fs')

const server = http.createServer();
server.listen(5000);

// reading file 
const homePage = fs.readFileSync('../web-content/index.html');
const aboutPage = fs.readFileSync('../web-content/about.html');

server.on('request',(req,res)=>{

console.log(`Requested URL :${req.url}`);  // added for debug purposes

    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }

    if(req.url==='/about.html'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(aboutPage);
        res.end();
    }
})