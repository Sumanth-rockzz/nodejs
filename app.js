const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const Puser=require('./models/puser');
const Product=require('./models/product');

const errorController = require('./controllers/error');

const sequelize=require('./util/database');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes =require('./routes/user');
const expenseroutes=require('./routes/expense');

var cors=require('cors');
const { JSON } = require('sequelize');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/expense',expenseroutes)


app.use('/user',userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    Puser.findByPk(1)
    .then(user=>{
        req.user=user;
        next();
    })
    .catch(err=>console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);




app.use(errorController.get404);

Product.belongsTo(Puser,{constraints:true,onDelete:'CASCADE'});
 Puser.hasMany(Product); //it can alse be defined like this

sequelize.sync()
.then((res)=>{
   return  Puser.findByPk(1);
    //console.log(res);
   
})
.then((user)=>{
    if(!user){
        return Puser.create({name:'sumanth',email:'sumanthn876@gmail.com'});
    }
    return user;
})
.then(user=>{
    console.log(user);
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})

