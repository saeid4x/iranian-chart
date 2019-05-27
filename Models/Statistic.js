var mongoose=require('mongoose');
var mongodb=require('mongodb');
var Schema=mongoose.Schema;

var StatisticSchema=new Schema({
    category:{type:String,default:null},
    totalWomen:{type:Number,default:0},
    totalMan:{type:Number,default:0},
    population:{type:Number,default:0},
    emigrantTotal:{type:Number,default:0},
    girlStudentsTotal:{type:Number,default:0},
    boyStudentsTotal:{type:Number,default:0},
    year:{type:String,default:null},
    gdpCountry:{type:String,default:null}
    

})

module.exports=mongoose.model('Statistic',StatisticSchema);