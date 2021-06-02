NumSeq = [];
userInput=prompt('Enter a sequence of number, separated by (,):').split(',')
for(let i in userInput)
{
    NumSeq.push(Number(userInput[i]))
    
}

NumSeq.sort();
alert('The smallest number is ' + NumSeq[0])