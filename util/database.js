const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','Sumanth@123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;