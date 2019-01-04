var User=require("./model");
function techer(name,id,age){
   User.apply(this,[name,id,age])
    this.teach=function(res){
        res.write(this.name+"好好学习")
    }

}
module.exports=techer;