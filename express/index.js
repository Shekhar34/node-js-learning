const express=require('express');
var path = require('path');
const app=express();

const port=5000;

//serving static files express specific files
app.use('/static', express.static('static'));


//set template engine pug pecific files
app.set('view engine', 'pug')

//set view directory
app.set('views',path.join(__dirname, 'views'));

//endpoints

app.get('/',(req,res)=>{
    const param={'title':'pug is best game','content':'this is baby'}
       res.status(200).render('index.pug',param);
})


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})