const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'Cart.json'
);
module.exports=class Cart{
  static addProduct(id,productPrice){
    //fetch the previous cart
    fs.readFile(p,(err,fileContent)=>{
        let cart={products:[],totalPrice:0};
        if(!err){
        cart=JSON.parse(fileContent);
        }
        //analyze the cart ==> find existing product
        const existingProductIndex=cart.products.findIndex(prod=>prod.id===id);
        const existingProduct=cart.products[existingProductIndex];
        let updatedProduct;
        //add new product/increase quantity
        if(existingProductIndex){
            updatedProduct={...existingProduct};
            updatedProduct.qty=updatedProduct.qty+1;
            cart.products=[...cart.products];
          
            
        }
        else{
            updatedProduct={id:id,qty:1};
            cart.products=[...cart.products,updatedProduct];
        }
       
        cart.totalPrice= cart.totalPrice+ +productPrice;
       
        fs.writeFile(p,JSON.stringify(cart),err=>{
            if(err)
            console.log(err);
        })
    })
  }

}