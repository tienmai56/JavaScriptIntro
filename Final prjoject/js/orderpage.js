
import {books} from "./data.js"



// if add to cart button is pressed, add item to the shopping cart icon

let addToCartBtn = document.getElementsByClassName("btn-primary") //buton list 
let buyNowBtn = document.getElementsByClassName("btn-success")
console.log(buyNowBtn[0])

 // input # of item 

function addItemToCart(){
    let numOfItem = Number(document.getElementById("lblCartCount").innerHTML) // item that's already in the cart
    let quantityInput = Number(document.getElementById("quantity_input").value)
    numOfItem=numOfItem+quantityInput
    document.getElementById("lblCartCount").innerHTML = numOfItem
    document.cookie = "quantity="+numOfItem;
    
    
}

function newWindow(){
    window.open("http://127.0.0.1:5500/cartsummary.html")
}



addToCartBtn[0].addEventListener("click", addItemToCart)
buyNowBtn[0].addEventListener("click", newWindow)




// find book id from url 
var url = window.location.href
let result = url.match(/\d/g); // return an array of numbers found in url 
let length = result.length // length of the returned array
var bookId = result[length-1] //always take the last number because it is id number
// console.log(bookId)

//save book id cookie 
document.cookie="bookId="+bookId

//check if all cookies are saved
let quantityCookie= document.cookie
console.log(quantityCookie)


// find the book that has id found above

let bookImage = document.getElementsByClassName("book-card")
let bookDescription = document.getElementsByClassName("content-book-description")
let bookMeta = document.getElementsByClassName("price-and-condition")



for(let i of books){
    if(i.id=bookId){
        // create new image
       let bookOrder=document.createElement("img")
       bookOrder.setAttribute("class","image-responsive")
       bookOrder.setAttribute("src",books[bookId-1].src)
       bookImage[0].appendChild(bookOrder)

       //create new description
       let bookDes = document.createElement("h5")
       bookDes.setAttribute("class", "content-book-body")
       bookDes.textContent = books[bookId-1].description
       bookDescription[0].appendChild(bookDes)

       //create price, title and condition

        let title = document.createElement("h1")
        title.setAttribute("class", "book-title")
        title.textContent = books[bookId-1].name
        bookMeta[0].appendChild(title)

        let line = document.createElement("span")
        line.setAttribute("class", "line")
        line.textContent = "-------------------------------------------------------------------------"
        bookMeta[0].appendChild(line)

       let price = document.createElement("h4")
       price.setAttribute("class", "book-price")
       price.textContent = "Price: "+books[bookId-1].price + " VND"
       bookMeta[0].appendChild(price)

       let condition = document.createElement("h4")
       condition.setAttribute("class", "book-condition")
       condition.textContent = "Condition: "+books[bookId-1].condition
       bookMeta[0].appendChild(condition)




       break;
       
    }
}


