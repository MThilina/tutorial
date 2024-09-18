const{products} = require('../data');


const getProduct = (req,res)=>{

    const productList = [...products]

    for(let a=0; a<products.length;a++){
        productList.push(products[a]);
    }
  
    if(productList.length<1){
       return res.status(400).json({message:'Products not found',data:null});
    }

   return  res.status(200).json({message:'Products found',data:productList});
}

const getProductById = (req,res)=>{
     // removed header because in not found we are sending text\html 
   const {id} = req.params;
   const singleProduct = products.find((product)=>product.id === Number(id));
   if(!singleProduct){
    return res.status(404)
        .json({message:'product not found',data:null});
   }
   return res.json(singleProduct)
}

const productSearch =(req,res)=>{
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
}

module.exports = {
    getProduct,
    getProductById,
    productSearch
}