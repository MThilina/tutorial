const express = require('express')
const fs = require('fs')

const app = express();  // load express module to app 
app.listen(5001,()=>{
    console.log("Server up & runing and listen to port 5001..");
})

app.get('/',(req,res)=>{
const homePage = fs.readFileSync('../web-content/index.html','utf8');
res.status(200).
    send(homePage);
})

app.get('/about.html',(req,res)=>{
const aboutPage = fs.readFileSync('../web-content/about.html','utf8');
res.status(200).
    send(aboutPage);
})

