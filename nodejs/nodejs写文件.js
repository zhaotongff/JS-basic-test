var http=require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!="/favicon.ico"){

        response.end("ok")

        console.log("主文件执行完毕")
    }}).listen(8000);
cons