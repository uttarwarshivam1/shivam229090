const express =require("express");
const app =express();
const path=require("path");

app.get("/",function(req,resp){

    resp.sendFile(path.join(__dirname,"./public/index.html"));
})
app.listen(8000);
console.log("server listening on 8000");