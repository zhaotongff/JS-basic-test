/*匀速横向运动动画*/
function constantSpeedAnomateX(ele,endX){
    clearInterval(ele.timer);
    ele.timer=setInterval(function(){
        var step; //匀速动画与缓动动画的不同在与步长不一样  匀速动画给定值  缓动动画为e（ndX-ele.offsetLeft）/10
        if((endX-ele.offsetLeft)>0){
            step=10;
        }else if((endX-ele.offsetLeft)<0){
            step=-10;
        }else{
            step=0;
        }
        ele.style.left=ele.offsetLeft+step+"px";
        if(Math.abs(endX-ele.offsetLeft)<=Math.abs(step)){
            ele.style.left=endX+"px";
            clearInterval(ele.timer);
        }


    },30);


}

/*匀速纵向运动动画*/
function constantSpeedAnomateY(ele,endY){
    clearInterval(ele.timer);
    ele.timer=setInterval(function(){
        var step;
        if((endY-ele.offsetTop)>0){
            step=10;
        }else if((endY-ele.offsetTop)<0){
            step=-10;
        }else{
            step=0;
        }
        ele.style.top=ele.offsetTop+step+"px";
        if(Math.abs(endY-ele.offsetTop)<=Math.abs(step)){
            ele.style.top=endY+"px";
            clearInterval(ele.timer);
        }


    },30);


}
//缓动动画横向运动
function linearSpeedAnimateX(ele,endX){
    clearInterval(ele.timer);
    ele.timer=setInterval(function(){
        var step=(endX-ele.offsetLeft)/10; //匀速动画与缓动动画的不同在与步长不一样  匀速动画给定值  缓动动画为e（ndX-ele.offsetLeft）/10
        if(step<1){
            step=Math.ceil(step);
        }
        ele.style.left=ele.offsetLeft+step+"px";
        if(Math.abs(endX-ele.offsetLeft)<=Math.abs(step)){
            ele.style.left=endX+"px";
            clearInterval(ele.timer);
        }


    },30);


}
////缓动动画纵向运动
function  linearSpeedAnimateY(ele,endY){
    clearInterval(ele.timer);
    ele.timer=setInterval(function(){
        var step=(endY-ele.offsetTop)/10; //匀速动画与缓动动画的不同在与步长不一样  匀速动画给定值  缓动动画为e（ndX-ele.offsetLeft）/10
        if(step<1){
            step=Math.ceil(step);
        }
        ele.style.top=ele.offsetTop+step+"px";
        if(Math.abs(endY-ele.offsetTop)<=Math.abs(step)){
            ele.style.top=endY+"px";
            clearInterval(ele.timer);
        }

    },30);


}

//通过CSS选择器的方式获取节点对象
function getEle(selector){
    var first=selector.charAt(0);
    if(first==="#"){
        return document.getElementById(selector.slice(1));

    }else if(first==="."){

        return document.getElementsByClassName(selector.slice(1));

    }else{
        return document.getElementsByTagName(selector);
    }



}
//scroll封装
function scroll(){
    if(window.pageYOffset!==undefined){

        return{
            top:window.pageYOffset,
            left:window.pageXOffset,
        }

    }else{
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft,
        }
    }
}
