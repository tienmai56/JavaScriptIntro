// Write a program to print out

// a. 7 numbers, starting from 0 (no user input)
// let y = 7
// for (let x=0; x<7;x++)
// {
//     console.log(x)
// }


// b. n numbers, starting from 0, n entered by user
// let userInput=Number(prompt('enter a positive number'));
// while (userInput < 0 || isNaN(userInput))
// {
//     userInput=Number(prompt('Invalid number. Please enter a positive number'));
// }
// for(let x=0; x<userInput;x++)
//     {console.log(x)};



// c. A sequence of numbers, starting from 3, ending before n, n entered by user
// let userinput=Number(prompt('enter a positive number'));
// while (userinput < 0 || isNaN(userinput))
// {
//     userInput=Number(prompt('Invalid number. Please enter a positive number'));
// }
// for(let x=3; x<userinput;x++)
//     {console.log(x)};

// d.A sequence of numbers, starting from c, ending before n, c and n entered by user

// let n=Number(prompt('enter n'));
// while (n < 0 || isNaN(n)) // check if n is a valid number
// {
//     n=Number(prompt('Invalid number. Please enter a positive n'));
// }

// let c=Number(prompt('enter c')); 

// while (c < 0 || isNaN(c) || c>n) // check if n is a valid number. n must be positive and < n
// {
//     c=Number(prompt('Invalid number. Please enter a positive c that is < n'));
// }

// while(c<n)
// {
//     console.log(c)
//     c++;
// }


// e.A sequence of numbers, starting from c, stepping by 3 ending before n, c and n entered by user
// let n=Number(prompt('enter n'));
// while (n < 0 || isNaN(n)) // check if n is a valid number
// {
//     n=Number(prompt('Invalid number. Please enter a positive n'));
// }

// let c=Number(prompt('enter c')); 

// while (c < 0 || isNaN(c) || c>n) // check if c is a valid number. n must be positive and < n
// {
//     c=Number(prompt('Invalid number. Please enter a positive c that is < n'));
// }

// while(c<n)
// {
//     console.log(c)
//     c=c+3;
// }

//f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
let n=Number(prompt('enter n'));
while (n < 0 || isNaN(n)) // check if n is a valid number
{
    n=Number(prompt('Invalid number. Please enter a positive n'));
}

let c=Number(prompt('enter c')); 

while (c < 0 || isNaN(c) || c>n) // check if c is a valid number. n must be positive and < n
{
    c=Number(prompt('Invalid number. Please enter a positive c that is < n'));
}

let s = Number(prompt('enter s'));
while (s < 0 || isNaN(s)) // check if s is a valid number
{
    n=Number(prompt('Invalid number. Please enter a positive s'));
}

while(c<n)
{
    console.log(c)
    c=c+s;
}