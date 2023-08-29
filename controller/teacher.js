const bcrypt=require('bcryptjs');
const Teacher=require('../model/teacher');
 
module.exports.create=async (req,res)=>{
    // hash the password
 const salt  =  await bcrypt.genSalt(10);
 const hashedPassword  = await bcrypt.hash(req.body.password, salt);

  await Teacher.create({
   
    name : req.body.name,
   email : req.body.email,
   password : hashedPassword ,

  });
  return res.render('signin');
   
}


module.exports.login=(req,res)=>{
  return res.redirect('student/studentpage')
}