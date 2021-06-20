let start_btn = document.getElementById("start")
let input=document.getElementById("time")
let time_up=document.getElementById("time_up")
let stop = document.getElementById("stop")

function timer(){
    timeleft = input.value
    let timer = setInterval(function(){
        time_up.innerHTML=timeleft
        timeleft--;
        if(timeleft<0){
            clearInterval(timer)
            time_up.innerHTML='Times up'
    }

        },1000)
        
        function stopFunction(){
            clearInterval(timer)
            //console.log(time_up.innerHTML)
        }

        stop.addEventListener("click", stopFunction)
        
        

}


start_btn.addEventListener("click", timer)


