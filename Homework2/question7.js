// Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
let n = Number(prompt('n = ')); // checking if n is valid number
while(isNaN(n) || n <0){
    n = Number(prompt('Invalid number. Enter a positive n'));
}

let x = Number(prompt('x = ')); // checking if n is valid number
while(isNaN(x) || x <0){
    n = Number(prompt('Invalid number. Enter a positive x'));
}

if(x<n/2){
    alert(x + " is in lower half of "+n)
}
else{
    alert(x + " is in higher half of "+n)
}

