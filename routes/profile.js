const router=require('express').Router();
const passport=require('passport');

const profile_controller=require('../controller/profile');

router.get('/:id',passport.checkAuthentication,profile_controller.profile);



module.exports=router