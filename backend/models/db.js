const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/eventsdb',{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true},(err)=>{
    if(!err){
        console.log('mongo db connection establish')
    }else{
        console.log('Erron in fb connection'+err)
    }
})
require('./employeeSchema')