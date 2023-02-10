const express=require('express');
const bodyParser=require('body-parser');
const userroute=require('./chatroutes/user');
const messageroute=require('./chatroutes/message');

const chatapp=express();

chatapp.use(bodyParser.urlencoded({extended:false}));

chatapp.use(userroute);
chatapp.use(messageroute);


chatapp.listen(4000);