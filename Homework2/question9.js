// Write a program to print out

// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// for(i=1;i<=3;i++)
// {
//     console.log('L')
// }

// for(n=1;n<=3;n++)
// {
//     console.log('H')
//     console.log(7/2)
// }


// b. n L’s and H’s in total, n entered by user
// let n = Number(prompt("Enter the total number of L's and H's"));
// while(isNaN(n) || n <0){ // check if n is a valid number
//     n = Number(prompt('Invalid number. Enter a positive total number of L and H'));
// }

// for(i=1;i<=Math.round(n/2);i++)
// {
//     console.log('L')
// }

// for(y=1;y<=n-Math.round(n/2);y++)
// {
//     console.log('H')
    
// }


// c. 8 1’s and 0’s in total, consecutively
// for(i=1;i<=4;i++)
// {
//     console.log('0')
//     console.log('1')
// }


//d. n 1’s and 0’s in total, consecutively, n entered by user
let n = Number(prompt("Enter the total number of L's and H's"));
while(isNaN(n) || n <0 || n == 0){ // check if n is a valid number
    n = Number(prompt('Invalid number. Enter a positive total number of L and H'));
}

if(n%2==0)
{
    for(i=1;i<=n/2;i++)
{
    console.log('0')
    console.log('1')
}

}
else{
    for(i=1;i<n/2;i++)
{
    console.log('0')
    console.log('1')
}
    console.log('0')

}



