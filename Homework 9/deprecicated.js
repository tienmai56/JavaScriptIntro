// get the quiz result
let hsl_quiz = document.getElementById("rgb")

//get the list of color buttons
let btn = document.getElementsByClassName("btn")

//get notification result
let result = document.getElementById("pick-one")



function createColor(){ //create random colors
    let red= Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255) 
    let blue = Math.floor(Math.random()*255) 
    let result = "rgb"+"("+red+", "+ green+", " +blue+")"
    
    return result


}


//assign random correct color and distrbute colors to 3 buttons
function colorAssign(){ 
    //when each button is clicked -> create 3 random colors 
    x=createColor() //0
    console.log("color x is" +x)
    y=createColor() //1
    console.log("color y is" +y)
    z=createColor() //2
    console.log("color z is" +z)

   

    //create a random correct color 
    let ranNum= Math.floor(Math.random()*3) 
    console.log(ranNum)

    //create a random button to assign to the correct color 
    let ranCorrect = Math.floor(Math.random()*3) // correct button
   

    // assign one correct color into its html

    if(ranNum===0){ // if correct color is x

        hsl_quiz.innerHTML = x
        console.log("de bai "+hsl_quiz.innerHTML)

        // assign the rest of 2 random colors into the other 2 nodes

        if(ranCorrect===0){ // if the first button is designed to be the correct one
            btn[1].style.backgroundColor=y
            btn[2].style.backgroundColor=z
            btn[0].style.backgroundColor=x


        } else if(ranCorrect=1){ //if the 2nd button is designed to be the correct one
            btn[0].style.backgroundColor=y
            btn[2].style.backgroundColor=z
            btn[1].style.backgroundColor=x

        } else if(ranCorrect=2){ //if the 3rd button is designed to be the correct one
            btn[1].style.backgroundColor=y
            btn[0].style.backgroundColor=z
            btn[2].style.backgroundColor=x
        
        }
        

    } else if(ranNum===1){ // if correct color is y
        hsl_quiz.innerHTML = y
        console.log("de bai "+hsl_quiz.innerHTML)
        
     

        if(ranCorrect=0){
            btn[1].style.backgroundColor=x
            btn[2].style.backgroundColor=z
            btn[0].style.backgroundColor=y

        } else if(ranCorrect=1){
            btn[0].style.backgroundColor=x
            btn[2].style.backgroundColor=z
            btn[1].style.backgroundColor=y

        } else if (ranCorrect=2){ 
            btn[1].style.backgroundColor=x
            btn[0].style.backgroundColor=z
            btn[2].style.backgroundColor=y


        }

  

    } else if(ranNum===2){ // if correct color is z
        hsl_quiz.innerHTML = z
        console.log("de bai "+hsl_quiz.innerHTML)

        if(ranCorrect=0){
            btn[1].style.backgroundColor=y
            btn[2].style.backgroundColor=x
            btn[0].style.backgroundColor=z

        } else if(ranCorrect=1){
            btn[0].style.backgroundColor=y
            btn[2].style.backgroundColor=x
            btn[1].style.backgroundColor=z

        } else if(ranCorrect=2){ 
            btn[1].style.backgroundColor=y
            btn[0].style.backgroundColor=x
            btn[2].style.backgroundColor=z
        }

        
    }
    

}


for(let i of btn){
   
    i.addEventListener("click", function a(){
        colorAssign()
        let colorVal = window.getComputedStyle(i).getPropertyValue("background-color")
        console.log(typeof(colorVal))
        console.log(typeof(hsl_quiz.innerHTML))
        console.log([i])
        if(colorVal === hsl_quiz.innerHTML){
            result.innerHTML = "Yey"
            setTimeout(a=>{result.innerHTML="Pick one..."},600)
        } 
        
        else if (colorVal !== hsl_quiz.innerHTML){
            result.innerHTML = "Nah"
            setTimeout(a=>{result.innerHTML="Pick one..."},600)
    
        }
    

    }
    )
}      
    





   




