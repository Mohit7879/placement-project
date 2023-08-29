const Interview=require('../model/interview');
module.exports.student_list=async (req,res)=>{
     let interview=await Interview.findById(req.params.id).populate('students');

     return res.render('students_allocated',{
        students_a:interview,
     })
    // console.log("%%%%%%%%%%%%%",interview);
}