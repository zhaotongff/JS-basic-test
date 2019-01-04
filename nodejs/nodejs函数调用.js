var http=require("http");
var otherfun=require("./models/otherfuns.js")
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
   if(request.url!="/favicon.ico"){
       fun1(response);
       otherfun.fun3(response);  //网页输入http://127.0.0.1:8000/
       otherfun.fun4(response);
       response.end("")//不写则meiyHTTP协议尾

   }}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/")


function fun1(res){
    console.log("fun1")
    res.write("你好哇,我是fun1")
}