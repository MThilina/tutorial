const express = require('express')
const morgan = require('morgan');

const user_router = require('./router/user_router')
const product_router =require('./router/product_router')

const app = express();

// middleware 
app.use(morgan('tiny'));
app.use(express.json());
app.use('/',user_router);  // Rest controller route
app.use('/',product_router);


app.listen(5002,()=>{
    console.log("Application listen to port 5002..")
});







