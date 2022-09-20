let express = require('express');
//app.get("Hello Express");

let app = express();
app.get("/",function(req,res)
{
  res.send("Hello Express");
});


console.log("Hello World");




































 module.exports = app;
