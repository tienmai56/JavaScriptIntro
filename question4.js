//Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let userinput = Number(prompt('enter n'))
while(isNaN(userinput) || userinput <0)
{
    userinput = Number(prompt('invalid number. please enter a positive n'))
}

if (userinput == 0){
    console.log('the factorial of 0 is 1')
}
else{

    let y =1;
    for(let x=1;x<=userinput;x++){
        y =y* x
    
  }
    console.log('the factorial of ' + userinput + ' is '+y)

}





    