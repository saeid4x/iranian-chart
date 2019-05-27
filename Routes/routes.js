var express=require('express');
var router=express.Router(),
    mongodb=require('mongodb'),
    mongoose=require('mongoose');
 var Keys=require('../config/Keys');

 mongoose.connect(Keys.connectionStringLocal,(err)=>{
     if(err){
        console.log('can not connect to database');
        console.log('Error=',err);
     }
     else{
         console.log('successfully connect to Database');
     }

 })



 router.get('/api/cat/:cat',(req,res)=>{
     

 })


 module.exports=router;