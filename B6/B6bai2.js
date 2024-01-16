var img=[];
var curimg=0;
function load_images(){
    for(i=1;i<5;i++){
        img[i]=new Image();
        img[i].src="../image/sky"+i+".jpg";
    }
}
function next(){
    if (curimg<img.length-1){
        curimg++;
        document.getElementById("sky").src=img[curimg].src;
    }
    if(curimg==img.length-1){
        curimg=0;
    }
}
function back(){
    if (curimg>0){
        curimg--;
        document.getElementById("sky").src=img[curimg].src;
    }
    if (curimg==0){
        curimg=img.length-1;
    }
}