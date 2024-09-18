const express = require('express')
const logger = require('./logger')
const morgan = require('morgan')

const app = express()

// Apply middleware commanly to each and every method 
//app.use(logger); // custom build 
app.use(morgan('tiny'))

app.listen(5001,()=>{
    console.log("Listen to sever on port 5001..");
    
})


app.get('/',(req,res)=>{
    res.send('<h2>Home</h2>')
})

app.get('/about.html',(req,res)=>{
    res.send('<h2>About</h2>')
})

