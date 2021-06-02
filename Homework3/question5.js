NumSeq = [];
userInput=prompt('Enter a sequence of number, separated by (,):').split(',')
let x = 0;
for(let i in userInput)
{
    NumSeq.push(Number(userInput[i]))
    
}

console.log(NumSeq)

for(let i = 0;i<NumSeq.length;i++)
{
    x= x+NumSeq[i]
}
alert('The sum of them is ' + x)