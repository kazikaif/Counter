let count = document.getElementById("count");
let btnDecrease = document.querySelector("#btn");
let btnincrease = document.querySelector("#btn1");
let clear = document.querySelector("#btn2");
 

 let countnumber = 0;
 count.textContent = countnumber;
 
btnDecrease.addEventListener("click",()=>{
    
    countnumber--;
    count.textContent = countnumber;
});

btnincrease.addEventListener("click",()=>{
    countnumber++;
    count.textContent = countnumber;
});
clear.addEventListener(("click"),()=>{
     countnumber =0;
     count.textContent = countnumber;
 })