var express=require('express');
var app=express();

app.get('/',function(request,response){
  response.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("server is up  connect @ http://localhost:8080/"+port);
});
