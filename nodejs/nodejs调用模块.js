var http=require("http");
var User=require("./models/model")
var Teacher=require("./models/model2")
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!="/favicon.ico"){
       var teacher=new Teacher("张三",20,23);
        teacher.study(response)//  网页输入http://127.0.0.1:8000/
        teacher.teach(response)
        response.end("")

    }}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/")
