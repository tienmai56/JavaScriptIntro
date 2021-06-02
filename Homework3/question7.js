const myArray = [3, 4, 6, -9, 10, -88, 2];
let userInput = Number(prompt(('Enter a number:')))

for(let i=0;i<myArray.length;i++){
    if (userInput==myArray[i]){
        alert(userInput + ' is found in my array at index '+i)
        // console.log(userInput, myArray[i])
        console.log(typeof(myArray[i], typeof(userInput)))
        console.log(myArray[i])
        break;
    }   
    else if(i==myArray.length-1){
        alert(userInput + ' is NOT FOUND in my array')
    }
    

}







