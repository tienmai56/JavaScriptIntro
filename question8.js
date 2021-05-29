
// Write a script to check if a number is even (divisible by 2) or odd number
let x = Number(prompt('x = '));
while(isNaN(x) || x <0){ // check if x is a valid number
    x = Number(prompt('Invalid number. Enter a positive x'));
}

if(x%2==0 && x != 0)
{
    alert(x+' is a positive number')
}
else if (x==0){
    alert('0 is neither negative nor positive')
}
else
{
    alert(x+ ' is an odd number')
}