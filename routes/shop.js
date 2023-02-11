const express=require('express');

const path=require('path');

const rootDir=require('../util/path');

const router=express.Router();

router.get('/',(req,res,next)=>{
    //absolute path it builds path as per OS
 res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=router;