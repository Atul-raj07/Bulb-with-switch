let bulb = document.querySelector(".bulb")
let btn = document.querySelector(".btn")
flag = 1;
btn.addEventListener("click",function(){
if(flag === 1){
    
    
        bulb.style.backgroundColor = "yellow";
        flag = 0;

}else{
        bulb.style.backgroundColor = "transparent";
    
    flag = 1;
}

})
