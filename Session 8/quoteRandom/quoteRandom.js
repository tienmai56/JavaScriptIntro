let quoteList;
// featch api that gives back an array of random quote
fetch("https://type.fit/api/quotes")
.then((resp)=>resp.json())
.then(function(data){
    quoteList=data
    //console.log(quoteList[0])
})
    

function generator(){
    //set a random number generator. number = quote index
    let quoteIndex = Math.floor(Math.random()*quoteList.length)

    // retrive a random object from array. object has text and author
    content = quoteList[quoteIndex].text 
    author = quoteList[quoteIndex].author

    //display quote content
    document.getElementById("content").innerHTML=content  
    document.getElementById("author").innerHTML="- "+author+" -"  

}


let reload = document.getElementById("btn")
reload.addEventListener("click", generator)



    
