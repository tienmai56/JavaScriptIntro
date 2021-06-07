let str_input = prompt('enter a string input') //assume users always enter correct string data type
let arr = str_input.split('')
let reverse_arr=[]
for(let x=arr.length-1;x>=0;x--){
    reverse_arr.push(arr[x])

}

console.log(reverse_arr.join(''))