const fs=require('fs');
const rfs=require('rotating-file-system');
const path=require('path');

// creating logsirectory using system
const logDirectory=path.join(__dirname,'../production_logs')
fs.existsSync(logDirectory)||fs.mkdirSync(logDirectory);

const accesslogstream=rfs('access.log',{
    interval:"1d",
    path:logDirectory,
})

const development ={
    name:"development",
    db:'placementpool',
    sessionkey:'blahsomething',
    morgan:{
        mode:'dev',
        options:{stream : accesslogstream}
    }
}

//setting environment variables
const production={
    name:"production",
    db:process.env.db,
    sessionkey:process.env.sessionkey,

    morgan:{
        mode:'pro',
        options:{stream : accesslogstream}
    }
}

module.exports=eval(process.env.placement)==undefined ? development : eval(process.env.placement);