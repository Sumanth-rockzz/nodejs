const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const errorController = require('./controllers/error');

const sequelize=require('./util/database');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes =require('./routes/user')

var cors=require('cors');
const { JSON } = require('sequelize');

app.use(cors());
app.use(bodyParser.json({ extended: false }));


app.use('/user',userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then((res)=>{
    //console.log(res);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})

