var fs=require("fs");
module.exports={
    readfileSync:function(path){//同步读取执行
        var data=fs.readFileSync(path,"utf-8")
        console.log(data)
        console.log("同步方法执行完毕");

    },
   readfile:function(path,recall){//异步读取执行
       fs.readFile(path,function(err,data){

           if(err){
               console.log(err)

           }else{
               console.log(data.toString())
               recall(data)
           }
       })
       console.log("异步方法执行完毕")
   },
writefileSync:function(path,data){//同步读取执行
    fs.writeFileSync(path,"utf-8")

    console.log("同步方法执行完毕");

},
witefile:function(path,data,recall){//异步读取执行
    fs.writeFile(path,data,function(err){


        if(err){
           throw(err)

        }else{
            console.log("save")
            recall("写文件成功")
        }
    })
    console.log("异步方法执行完毕")
},
writefile:function(){

}




}