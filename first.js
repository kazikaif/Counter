let count = document.getElementById("count");
let btnDecrease = document.querySelector("#btn");
let btnincrease = document.querySelector("#btn1");
let clear = document.querySelector("#btn2");
let err = document.querySelector(".error");
 

 let countnumber = 0;
 count.textContent = countnumber;
 
btnDecrease.addEventListener("click",()=>{
    
    if(countnumber > 0){
        countnumber--;
        count.textContent = countnumber;
        err.textContent="";
    }
    else{
        err.textContent = "Can't Decrease below 0";
        err.style.color = "red";
    }
});

btnincrease.addEventListener("click",()=>{
    countnumber++;
    count.textContent = countnumber;
    err.textContent="";

});
clear.addEventListener(("click"),()=>{
     countnumber =0;
     count.textContent = countnumber;
     err.textContent="";

 })