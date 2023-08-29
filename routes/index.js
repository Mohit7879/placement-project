// require router
const router=require('express').Router();
const passport=require('passport');

// require controllers
const student_controller=require('../controller/student');
const home_controller=require('../controller/home')
const teacher=require('../controller/teacher');
const jobs_controller=require('../config/job_search');
const csv_controller=require('../controller/csv');

// use middlewares for different route files
router.use('/profile',require('../routes/profile'));
router.use('/student',require('../routes/student'));
router.use('/interview',require('../routes/interview'));
router.use('/teacher',require('../routes/teacher'));


router.post('/create',student_controller.create);
router.post('/jobs',passport.checkAuthentication,jobs_controller.jobpage);
router.get('/interviewpage',passport.checkAuthentication,student_controller.interviewpage);
router.get('/csv',passport.checkAuthentication,csv_controller.conver_to_csv);
router.get('/',(req,res)=>{
    res.render('signup');
})
router.get('/jobpage',passport.checkAuthentication,(req,res)=>{
    res.render('jobs',{
        jobs:1,
    });
})
router.get('/signinpage',(req,res)=>{
    res.render('signin');
})

// signin route with passport authenticate
router.post('/signin', passport.authenticate(
    'local',
    {failureRedirect: '/signin/loginpage'},
),teacher.login);

router.post('/addstudent',passport.checkAuthentication,student_controller.addstudent)

router.get('/createstudent',(req,res)=>{
    res.render('addstudent');
})


module.exports=router;