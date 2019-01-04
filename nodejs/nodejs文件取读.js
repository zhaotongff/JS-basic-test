var http=require("http");
var  optfile=require("./models/optfiles");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!="/favicon.ico"){
        optfile.readfileSync("./views/login.html");
        response.end("ok")
        
        console.log("主文件执行完毕")
    }}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/")