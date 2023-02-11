const express= require('express');

const router= express.Router();

const rootDir=require('../util/path');

const path=require('path');


//admin/add-product  GET request
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
//admin/add-product  POST request
router.post('/add-product',(req,res,next)=>{
    //console.log(req.body);
    res.redirect('/shop');
});
module.exports=router;