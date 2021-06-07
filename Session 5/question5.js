let userInput = prompt('enter dd/mm/yyyy: ')
userInput=userInput.split('/')
for(let x=0;x<3;x++){
    if(Number(userInput[1])!==2){
        if([1,3,5,7,8,10,12].includes(Number((userInput[1]) == true))){
            if(userInput[0]>=1 || userInput[0]<=31){
                console.log('valid date')
                break;
            }

        }
        else if([4,6,9,11].includes(Number((userInput[1]) == true))){
            if(userInput[0]>=1 || userInput[0]<=30){
                console.log('valid date')
                break;
            }

        }
    }
    else if(Number(userInput[1])==2){
        if(userInput[0] <= 29){
                console.log('valid date')
                break;
            }

    }
    console.log('invalid')
    
}

