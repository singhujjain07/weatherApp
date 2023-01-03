const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const hbs = require("hbs");

//seeting view engine
const templatePath = path.join(__dirname,'../templates/views')
app.set('view engine','hbs');
app.set('views', templatePath);
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath);
// public static path
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));



//routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: "Oops! Page Not Found"
    });
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})