


const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    
   company:{
    type:String,
    required:true,
   },

   date:{
    type:String,
    required:true,
   },

   students:[
    {
        type:mongoose.Schema.Types.ObjectId,
          ref:"Student",
 
    },
  ],

 


})




module.exports=mongoose.model('Interview',Schema);