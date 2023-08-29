const passport = require('passport');
const bcrypt=require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const Teacher = require('../model/teacher');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    async function(req,email, password, done){
        // find a user and establish the identity

     //   console.log(req)
                 
        try{
       let teacher= await Teacher.findOne({email:email})

      
          
        let validpassword=bcrypt.compare(req.body.password,password);

        if (!teacher || (!validpassword)){
             
                return done(null, false);
            }

            return done(null, teacher);
        
        }catch(err){

             return done(err);

    }
    
    }));




// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(teacher, done){
    done(null, teacher.id);
   
});



// deserializing the user from the key in the cookies
passport.deserializeUser(async function(id, done){
   let teacher=await  Teacher.findById(id);
    
 
        console.log(teacher);

        return done(null, teacher);
    });


// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        console.log('inside checkauhentcate')
        return next();
      
    }

    // if the user is not signed in
    return res.redirect('/');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
      console.log('inside setauthentication')
        res.locals.teacher = req.teacher;
        console.log("&&&&&&&&&&",req.teacher)
    }

    next();
}



module.exports = passport;