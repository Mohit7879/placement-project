const router=require('express').Router();
const passport=require('passport');

const student_controller=require('../controller/student');
const job=require('../config/job_search');



router.get('/studentpage',passport.checkAuthentication,student_controller.studentpage);

router.post('/createinterview',passport.checkAuthentication,student_controller.createinterview);
router.post('/create',passport.checkAuthentication,student_controller.create);


module.exports=router