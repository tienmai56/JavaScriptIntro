// display correct rgb on screen
let hsl_quiz = document.getElementById("rgb")

//get the list of color buttons
let btn = document.getElementsByClassName("btn")

//get result
let result = document.getElementById("pick-one")

let colors=[];

// chose a random correct number based on a random index
let correctIndex = Math.floor(Math.random()*3)
        

function createColor(button){ 
    
    let red= Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255) 
    let blue = Math.floor(Math.random()*255) 
    let result = "rgb"+"("+red+", "+ green+", " +blue+")"
    button.style.backgroundColor=result
    colors.push(result) //put generated color into array, for debugging purpose later

}

//create initial 3 colors for 3 buttons
createColor(btn[0])
createColor(btn[1])
createColor(btn[2])

//select a random correct color to be display
hsl_quiz.innerHTML = btn[correctIndex].style.backgroundColor


for(let i=0;i<3;i++){
      
    btn[i].addEventListener("click", function(){
        
       
        if(this.style.backgroundColor===btn[correctIndex].style.backgroundColor){
            // console.log("this style background "+this.style.backgroundColor)
            // console.log("correct "+btn[correctIndex].style.backgroundColor)
            result.innerHTML = "Yey"
            setTimeout(a=>{result.innerHTML="Pick one..."},600)
        }else{
            // console.log("this style background "+this.style.backgroundColor)
            // console.log("correct "+btn[correctIndex].style.backgroundColor)
            result.innerHTML = "Nah"
            setTimeout(a=>{result.innerHTML="Pick one..."},600)
        }

        colors=[]
        
        createColor(btn[i])
        if(i=0){
            createColor(btn[1])
            createColor(btn[2])
        }

        else if(i=1){
            createColor(btn[0])
            createColor(btn[2])
        }

        else if(i=2){
            createColor(btn[0])
            createColor(btn[1])
        }

        // console.log("colors array is "+colors)

        correctIndex = Math.floor(Math.random()*3) //generate the correct color
        hsl_quiz.innerHTML = btn[correctIndex].style.backgroundColor
    })
}

    





   




