const express = require('express');
const app = express();

app.get("/",function(request,response){
    response.send("<h1>hello</h1>");

});
app.get("/contact",function(req,res){
    res.send("Contact Me: soniya.mishra@somaiya.edu");

});
app.get("/about",function(req,res){
    res.send("<p> My name is Soniya Mishra .I'am 21 yrs old.</p><p> I'am currently persuading tybscit in KJ Somaiya College of Science And Commerce.")
});
app.get("/hobbies",function(req,res){
    res.send("<ul><li>code</li><li>watching tv</li><li>travelling</li></ul>")
});
app.listen(3000,function(){
    console.log("Seerver get starteed with port 3000");
});