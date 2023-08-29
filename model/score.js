


const mongoose=require('mongoose');

const Schema=mongoose.Schema({

   // (including DSA Final Score, WebD Final Score, React Final Score)

   dsa:{
    type:Number,
    require:true,
   },

   web:{
    type:Number,
    require:true,
   },

   react:{
    type:Number,
    require:true,
   },

   final:{
    type:Number,
    require:true,
   },

})




module.exports=mongoose.model('Score',Schema);