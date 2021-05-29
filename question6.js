//Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
let userInput = Number(prompt('Enter a number'));
while(isNaN(userInput) || userInput <0){
    userAge = Number(prompt('Invalid number. Enter a positive number'));
}

if((userInput > 0) && (userInput <= 4))
{
    alert('Lower half of 9')
}
else
{
    alert('Higher half of 9')
}