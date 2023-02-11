const express=require('express')
const app=express();

const path=require('path');


const adminroutes=require('./routes/admin')
const shoproutes=require('./routes/shop')
const contactroutes=require('./routes/contactus')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroutes);
app.use('/shop',shoproutes);
app.use('/contactus',contactroutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);