//从URL中获取相关信息，通过路由字符串调用相关函数，

var http=require("http")
var url=require("url");
var router=require("./models/router");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    if(request.url!="/favicon.ioc"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,"")
        console.log(pathname)
        router[pathname](request,response);//   网页输入http://127.0.0.1:8000/[pathname]
        response.end("")
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000")