const express= require('express');

const router= express.Router();

//admin/add-product  GET request
router.get('/add-product',(req,res,next)=>{
    res.send(`<form action="/admin/add-product" method="POST"><input type="text" name="title">
            <input type="text" name="size">
            <button type="submit">Add product</button></form>`);
});
//admin/add-product  POST request
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});
module.exports=router;