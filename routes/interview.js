const router=require('express').Router();
const passport=require('passport');

const interview_controller=require('../controller/interview');

router.get('/:id',passport.checkAuthentication,interview_controller.student_list);



module.exports=router