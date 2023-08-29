const Student=require('../model/student')

module.exports.profile=async (req,res)=>{
      
    let student = await Student.findById(req.params.id).populate('interviews' ).populate('score')
      .populate('result');

      console.log("333333333333333",student)


  console.log(student);
    return res.render('profile',{
        student:student,
    })

}