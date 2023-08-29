const router=require('express').Router();
const teacher_controller=require('../controller/teacher');

router.post('/create',teacher_controller.create);

module.exports=router;