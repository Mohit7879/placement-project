


const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    
    student:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",

    },

    company:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"Interview",

    },

    result:{
        enum: [PASS, FAIL, 
            Hold, notAttempt]
    }

   
  

})




module.exports=mongoose.model('Result',Schema);