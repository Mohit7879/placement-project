const Student=require('../model/student');
const Score=require('../model/score');
const Interview=require('../model/interview');
const jobs=require('../config/job_search');

module.exports.create=async(req,res)=>{
       
        let score= await Score.create({

            web:req.body.web,
            react:req.body.react,
            dsa:req.body.dsa,
            final:req.body.total,

         })

     
      
         await Student.create({
            batch:req.body.batch,
            studentid:req.body.studentid,
            name:req.body.name,
            status:req.body.status,
            college:req.body.college,
            score:score.id,
            
         });

return res.redirect('/student/studentpage');

}


module.exports.studentpage=async(req,res)=>{

    let studentdetail= await Student.find().populate('score').populate('interviews');
    //console.log("student%%%%%%%%%%%",studentdetail);

    return res.render('student_list',{
        studetail:studentdetail
    });

}


module.exports.interviewpage=async(req,res)=>{
    
    let interview=await Interview.find();
   
    
    return res.render('interview_list',{
        interviews:interview
    });

}


module.exports.createinterview=async(req,res)=>{

    let interview=await Interview.create(req.body);
      return res.redirect('/interviewpage');

}


module.exports.addstudent=async(req,res)=>{

  //  console.log(req.body)

       let interview = await Interview.findById(req.body.company)
     // console.log(interview)

       let student=await Student.findOne({
        studentid:req.body.studentid,
       })

     //  console.log(student)
        await   interview.students.push(student)
        await interview.save();

         await student.interviews.push(interview);
         await student.save();
         
      return res.status(200).json({
        message:'done'
      });
}





