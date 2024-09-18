const express = require('express')
const{products, users} = require('../data')


const app = express();
app.listen(5001,()=>{
    console.log("Application listen to port 5001..")
});


// limit and search qyery parameters 
// Query parameters should be implemented before the root 
app.get('/products/query', (req, res) => {
    const { limit, search } = req.query;
    let sortedProducts = [...products];

    // Handle limit
    if (limit && !isNaN(limit)) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    // Handle search
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.description.startsWith(search);
        });
    }

    if(sortedProducts.length <1){
       return  res.status(200).json({ 'status': 'success', 'response': sortedProducts });
    }
   
   return res.status(200).json(sortedProducts);
});


app.get('/products',(req,res)=>{
    res.setHeader('content-type','application/json')
    // res.json(products);
   const newProducts = products.map((product=>{
    const {id,price,image} = product;
    return {id,price,image}
   }))
    return res.json(newProducts);
})


app.get('/products/:id',(req,res)=>{
    // removed header because in not found we are sending text\html 
   const {id} = req.params;
   const singleProduct = products.find((product)=>product.id === Number(id));
   if(!singleProduct){
    return res.status(404)
        .send(`<h2> Product not found </h2>`);
   }
   return res.json(singleProduct)
})


app.get('/users/:userId',(req,res)=>{
     // removed header because in not found we are sending text\html 
    const{userId} = req.params;
    const singleUser = users.find((user)=>user.id === Number(userId));
    if(!singleUser){
    return res.status(404)
        .send(`<h2> User not found </h2>`);
    }
    return res.json(singleUser);
})


app.get('/users',(req,res)=>{
    res.setHeader('content-type','application/json')
    res.json(users);
})



// initial invoke 
app.get('/',(req,res)=>{
    res.setHeader('content-type','text/html')
    res.send(`<h1> Well Come to API Invocation <h1> <Br/> <h2>Product Details</h2> <a href='/products'> Products </a>
    <h2>Users Details</h2> <a href='/users'> Users </a>`);
})

