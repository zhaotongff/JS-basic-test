function user(name,id,age){
    this.name=name;
    this.id=id;
    this.age=age;
    this.study=function(res){
        res.write(this.name+"开始学习")
    }
}
module.exports=user//模块调用的一种方法