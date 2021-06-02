// 1. Variable swap
let a =5
let b=6
console.log(a,b) // 5 6

// Method 1: use a temp
let e;
e=a
a=b
b=e
console.log(a,b) //6 5

// Method 2: use an array

let c=10
let d=11
console.log(c,d) // 10 11
temp = [c,d];

[c,d] = [d,c]
console.log(c,d) // 11 10


//2 split strings into an array
const s = 'hello beauty there';
a = Array(s.split(' '))
console.log(a) //[“Hello”, “beauty”, “there”]


//3 spread operator
const y = [4, 5, 7, -8];
console.log(...y);

