//11.2
let button = document.getElementById("upper_btn")
console.log(button)
//11.3
document.getElementById("upper_btn").addEventListener("click", a=>{console.log('Upper it!!! just clicked')})

//11.4
let username = document.getElementById("name_input")
console.log(username)

//11.5
 document.getElementById("upper_btn").addEventListener("click", a=>{console.log("User's name: " + username.value)})

//11.6
let username_upper = document.getElementById("upper_btn").addEventListener("click", a=>{console.log("User's name uppercase: " + username.value.toUpperCase())})

//11.7
let description = document.getElementById("result_div")
console.log(description)

11.8
document.getElementById("upper_btn").addEventListener("click", replace) 
function replace(){
    document.getElementById("result_div").innerHTML = username.value.toUpperCase()
}