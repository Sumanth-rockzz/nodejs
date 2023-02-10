const express=require('express');

const router=express.Router();
const fs=require('fs');

router.get('/',(req,res,next)=>{
    fs.readFile('chats.txt',(err,data)=>{
        if(err)
        {
            data="No Chat Exists";
            console.log(err);
        }
     
     
        console.log(data);
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
    action='/' method="POST">
    <input id="message" type="text" name="message">
    <input id="username" type="hidden" name="username">
    <button type="submit">Send</button></form>`)
        
        
    })

    
})
router.post('/',(req,res,next)=>{

    fs.writeFile('chats.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        if(err)
        console.log(err)
        res.redirect('/')
    }   
    );
});

module.exports=router;