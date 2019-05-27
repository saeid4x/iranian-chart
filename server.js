var express=require('express'), 
    bodyParser=require('body-parser'),
    path=require('path'),
    cors=require('cors');

var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(express.static(path.join(__dirname,"client","build")));
app.use(routes);
const port = process.env.PORT || 8000
app.listen(port,(err)=>{
    console.log('connected to port = \t',port);
})
