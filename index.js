const express = require("express");

const app = express();


const port = 8080;
const path = require("path");



app.use(express.urlencoded({extended : true}));
 


app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));




let data  = [
    {
        username : "",
        password : "",
    },
    {
        username : "",
        password : "",
    }

]


app.get("/login.ejs",(req,res)=>{
  
    res.render("login.ejs");
    
});
app.get("/admin.ejs",(req,res)=>{
  
    res.render("admin.ejs");
    
});
app.post("/adminhome.ejs",(req,res)=>{
  
    res.render("adminhome.ejs");
    
});
app.get("/alert.ejs",(req,res)=>{
  
    res.render("alert.ejs");
    
});
app.get("/home.ejs",(req,res)=>{
  
    res.render("home.ejs");
    
});
app.get("/report.ejs",(req,res)=>{
  
    res.render("report.ejs");
    
});
app.get("/help.ejs",(req,res)=>{
  
    res.render("help.ejs");
    
});
app.get("/about.ejs",(req,res)=>{
  
    res.render("about.ejs");
    
});



app.listen(port,()=>{
    console.log("listening");
});