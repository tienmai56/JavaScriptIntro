let str_input = prompt('enter a string input') //assume users always enter correct string data type
let arr = str_input.split(' ')
console.log(arr)
let result = []
for(let x=0;x<arr.length;x++){
    newString=arr[x][0].toUpperCase() + arr[x].slice(1)
    console.log(newString)
}

console.log(result.join(''))

