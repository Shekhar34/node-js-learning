const express=require('express');
const fs=require('fs');
var path = require('path');
const app=express();

const port=5000;

//serving static files express specific files
app.use('/static', express.static('static'));

//jeva form cha content backend la patvycha asto post karycha asto teva he use kara
app.use(express.urlencoded())


//set template engine pug pecific files
app.set('view engine', 'pug')

//set view directory
app.set('views',path.join(__dirname, 'views'));

//endpoints

app.get('/',(req,res)=>{
    const param={'title':'pug is best game','content':'this is baby'}
       res.status(200).render('index.pug',param);
})

app.post('/',(req,res)=>{
    name=req.body.name;
    email=req.body.email;
    message=req.body.message;
    let output=`the name of client is ${name} and email is ${email} and the msg is ${message}`;
    fs.writeFileSync('output.text',output)

    const param={'message':'form submitted sucessfully'}
       res.status(200).render('index.pug',param);
})


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})