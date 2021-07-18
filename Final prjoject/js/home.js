
import { books } from "./data.js"
let mainsite = document.getElementsByClassName("container2 mb-5 mt-5")
let numRow = document.getElementsByClassName("row")



let div1 = document.createElement("div")
div1.setAttribute("class", "row")
mainsite[0].appendChild(div1)


function createItem(position) { // position is the book index in the db


    let div2 = document.createElement("div")
    div2.setAttribute("class", "col-md-4")
    div1.appendChild(div2)

    let div3 = document.createElement("div")
    div3.setAttribute("class", "card mt-3")
    div2.appendChild(div3)

    let div4 = document.createElement("div")
    div4.setAttribute("class", "product-1 align-items-center p-2 text-center")
    div3.appendChild(div4)


    let div5 = document.createElement("button")
    div5.setAttribute("class", "p-3 bg-danger text-center text-white mt-3 cursor btn-override")
    div5.setAttribute("id", books[position].id)
    div5.textContent = "Add to card"
    div3.appendChild(div5)


    let anchor = document.createElement("a")
    anchor.setAttribute("id", books[position].id)
    anchor.href = "http://127.0.0.1:5500/orderpage.html?bookId=" + books[position].id
    anchor.setAttribute("class", "availBook")
    div4.appendChild(anchor)

    let img1 = document.createElement("img")
    img1.setAttribute("class", "rounded")
    img1.setAttribute("src", books[position].src)
    img1.width = 230;
    img1.height = 350;
    anchor.appendChild(img1)



    let div6 = document.createElement("div")
    div6.setAttribute("class", " cost mt-3 text-dark")
    div4.appendChild(div6)

    let title = document.createElement("h3")
    title.textContent = books[position].name
    div4.appendChild(title)

    let span1 = document.createElement("span")
    span1.setAttribute("class", "price")
    span1.textContent = books[position].price + " VND"
    div6.appendChild(span1)

    let div7 = document.createElement("div")
    div7.setAttribute("class", " star mt-3 align-items-center")
    div6.appendChild(div7)



    let star1 = document.createElement("div")
    star1.setAttribute("class", "fa fa-star")
    div7.appendChild(star1)

    let star2 = document.createElement("div")
    star2.setAttribute("class", "fa fa-star")
    div7.appendChild(star2)

    let star3 = document.createElement("div")
    star3.setAttribute("class", "fa fa-star")
    div7.appendChild(star3)

    let star4 = document.createElement("div")
    star4.setAttribute("class", "fa fa-star")
    div7.appendChild(star4)

    let star5 = document.createElement("div")
    star5.setAttribute("class", "fa fa-star")
    div7.appendChild(star5)

}


for (let i = 0; i < books.length; i++) {
    createItem(i)


}

let addToCartBtn = document.getElementsByClassName("p-3")
let numOfItem = Number(document.getElementById("lblCartCount").innerHTML) // item that's already in the cart



function addItemToCart() {

    numOfItem = numOfItem + 1
    document.getElementById("lblCartCount").innerHTML = numOfItem
    // let bookId = this.getAttribute("id")
    // document.cookie = "quantityBookId" + bookId + "=" + numOfItem;
    
    

}

for (let i of addToCartBtn) {
    i.addEventListener("click", addItemToCart)

}




//check if all cookies are saved
// console.log(document.cookie)



var res = document.cookie;
var multiple = res.split(";");
for (var i = 0; i < multiple.length; i++) {
    var key = multiple[i].split("=");
    document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
}


// console.log(document.cookie)
