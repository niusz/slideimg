var title = document.getElementById("title");
var content = document.getElementById("content");
var alist = document.getElementsByTagName('a');
var timer = null,index = 0;


function slideImg(){
    autoPlay();
for(var i=0,alen=alist.length;i<alen;i++){
    alist[i].setAttribute("data-index",i);
    //点击标题切换
    alist[i].addEventListener("click",function(){
        var idx = this.getAttribute('data-index');
       content.className = "content bg"+idx;
       for(var j=0;j<alist.length;j++){ 
           alist[j].className = "";
       }
       alist[idx].className = "active";
    });
    //鼠标停留在tab切换页上，轮播图停止
    alist[i].addEventListener("mouseover",stopAutoPlay)
    alist[i].addEventListener("mouseout",autoPlay)
    
}
};
//鼠标放在图片上，停止轮播
    content.addEventListener("mouseover",
    stopAutoPlay);
    content.addEventListener("mouseout",autoPlay);

 
//清除定时器
function stopAutoPlay(){
   if(timer){
       clearInterval(timer);
   }
}





// 每隔一秒自动轮播
function autoPlay(){
    timer = setInterval(function(){
        index++;
        if(index>3){
            index = 0;
        }
        changeImg();
        
    },1000)
}

//改变图片 
function changeImg(){
    //把标题栏上面的背景全部清除
    for(var m=0;m<alist.length;m++){
        alist[m].className = "";  
    }
    alist[index].className = "active"
    content.className = "content bg"+index;
}
window.onload = slideImg;