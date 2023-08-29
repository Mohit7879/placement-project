




const mongoose=require('mongoose');



const Schema=mongoose.Schema({
//   Batch
// - Student Details (including college, status: [placed, not_placed])
// - Course Scores (including DSA Final Score, WebD Final Score, React Final Score)
// - Interviews (including company name and Date)
// - Results (this is a mapping between company, and student, contains result: [PASS, FAIL, On
// Hold, Didn’t Attempt])

batch:{
  type:String,
  required:true,
},
studentid:{
  type:Number,
  required:true,
},


name:{
  type:String,
  required:true,
},
college:{

  type:String,
  required:true,

},

status:{
      enum:['placed','notplaced'],
},

score:{

  type:mongoose.Schema.Types.ObjectId,
  ref:"Score",

},

result:{

  type:mongoose.Schema.Types.ObjectId,
  ref:"Result",

},

interviews:[{

  type:mongoose.Schema.Types.ObjectId,
  ref:"Interview",

}],



})




// Create a method to fetch and convert data to CSV

 




module.exports=mongoose.model('Student',Schema);