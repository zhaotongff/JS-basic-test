var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    response.write("你好世界");
    response.end("Hello World")
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/")