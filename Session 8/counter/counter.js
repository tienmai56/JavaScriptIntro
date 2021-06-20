// increment 
let decrement = document.getElementById("decrement")
let increment = document.getElementById("increment")
let number=document.getElementById("count")
let count_down = 0
let count_up= 0

function countdown(){
    count_down -= 1;
    number.innerHTML=count_down;
    
    
}

function countup(){
    count_up += 1;
    number.innerHTML=count_up;
  
    
}

decrement.addEventListener("click",countdown)
increment.addEventListener("click",countup)