var express=require('express');
var router=express.Router(),
    mongodb=require('mongodb'),
    mongoose=require('mongoose');
 var Keys=require('../config/Keys');
 var Helper=require('../config/Helper');
 var StatModel=require('../Models/Statistic');
 var DummyData=require('../config/DummyData');
 

 mongoose.connect(Keys.connectionStringLocal,(err)=>{
     if(err){
        console.log('can not connect to database');
        console.log('Error=',err);
     }
     else{
         console.log('successfully connect to Database');
     }

 })


 router.get('/save',(req,res)=>{
    //   Helper.saveData(StatModel,DummyData.HeramSeni);
    //   Helper.saveData(StatModel,DummyData.Population);
    //   Helper.saveData(StatModel,DummyData.Emigrant);
    //   Helper.saveData(StatModel,DummyData.UniversityStudents);
    //   Helper.saveData(StatModel,DummyData.GDPCountry);
      res.send('finish');
    
    
 })

 router.get('/api/cat/:cat',(req,res)=>{
     console.log('req.params.cat=',req.params.cat);
     StatModel.find({category:req.params.cat},(err,data)=>{
         if(data){
            res.json(data);
         }
         else{
            res.json({error:err});
         }
     })
     
      

     



      
    
   
         
     
     
 })


 module.exports=router;