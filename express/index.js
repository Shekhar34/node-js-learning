const express=require('express');
var path = require('path');
const app=express();

const port=80;

//serving static files
app.use('/static', express.static('static'));


//set template engine pug
app.set('view engine', 'pug')

//set view directory
app.set('views',path.join(__dirname, 'views'));

app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'mi shekhar gite' })
  });

app.get("/",(req,res)=>{
    res.status(200).send("this is my first express app");
});

app.get("/about",(req,res)=>{
    res.send("this is about page");
});

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})