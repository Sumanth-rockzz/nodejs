const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send(`<h1>This is node js Project</h1>`);
});

module.exports=router;