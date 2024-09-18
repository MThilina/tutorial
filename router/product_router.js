const express = require('express')
const product_router = express.Router()

const {
    getProduct,
    getProductById,
    productSearch
} = require('../controller/product-controller')



// limit and search qyery parameters 
// Query parameters should be implemented before the root 
product_router.get('/products/query',productSearch);
product_router.get('/products/:id',getProductById)
product_router.get('/products',getProduct)

module.exports = product_router


