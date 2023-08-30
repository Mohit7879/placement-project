// require express
const express=require('express');
const port=process.env.port;
const app=express();

const session=require('express-session');
const mongoose=require('mongoose');
const mongoStore=require('connect-mongo')
const passport=require('passport');
const passlocal=require('./config/passport')
//var logger = require('morgan')





app.use(express.json())
app.use(express.urlencoded({   
    extended: true,
}))  
 const uri="mongodb+srv://placement:gYHA71RGkTsEi7ng@cluster0.clh0vfu.mongodb.net/?retryWrites=true&w=majority";

// connecting mongoose
mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=> {
    console.log("App is now connected to DB")
}).catch((err)=> {
    console.log(`${err}`);
})

//  set up view engine to ejs
app.set('view engine','ejs');
app.set('views',"./views")


//  storind user to chache
app.use(session({
    name:'placement',
    secret:'something',
    saveUninitialized:false,
    resave:false,


// using mongo-store
    cookie:{

        maxAge:60*60*1000,
        store:mongoStore.create({
            mongoUrl: "mongodb://127.0.0.1:27017/placementpool",
                
            autoRemove: "disabled",

    }

)}
}))




// initializing passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(passport.setAuthenticatedUser)
  app.use('/',require('./routes/index'));
 

  // listening to app
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }

    console.log('server running')
}


);