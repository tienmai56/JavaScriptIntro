myArray = [3, 4, 6, -9, 10, -88, 2];
let userInput = Number(prompt(('Enter a number:')))

for(let i=0;i<myArray.length;i++){
    if (userInput=Number(myArray[i])){
        alert(userInput + ' is NOT found in my array')

    }
    else{
        alert(userInput + ' is found in my array at index '+i)
    }
}