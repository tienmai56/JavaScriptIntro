// each time i hit any key, it should be displayed in the screen
//1 return the list of all button 
let btn = document.getElementsByClassName("button")
let result = document.getElementById("result")

function calculate(button){
    let value = button.target.value
    if(value== "="){
        if(result.value != ""){
            result.value = eval(result.value)
        }

    } else if (value == 'C'){
        result.value ="";
    } else{
        result.value += value;
    }

}

// 2. if any button is clicked, display in thes screen
for(i of btn){
    i.addEventListener("click", calculate)
}


