// import data from data 
import { books } from "./data.js"



//check if cookies are returned
console.log(document.cookie)

//function to get data from cookies

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let bookQuantity = getCookie("quantity")
let bookId = getCookie("bookId")
console.log(bookQuantity)
console.log(bookId)

//create order summary based on book quantity and book id


let parent = document.getElementsByClassName("col-md-8")

let div1 = document.createElement("div")
div1.setAttribute("class", "row border-top border-bottom")
parent[0].appendChild(div1)

let div2 = document.createElement("div")
div2.setAttribute("class", "row main align-items-center")
div1.appendChild(div2)

let div3 = document.createElement("div")
div3.setAttribute("class", "col-2")
div2.appendChild(div3)

let div4 = document.createElement("div")
div4.setAttribute("class", "col")
div2.appendChild(div4)

let div5 = document.createElement("div")
div5.setAttribute("class", "col")
div2.appendChild(div5)

let div6 = document.createElement("div")
div6.setAttribute("class", "col item-price")
div6.textContent = books[bookId - 1].price + " VND"
div2.appendChild(div6)

let img = document.createElement("img")
img.setAttribute("class", "img-fluid")
img.setAttribute("src", books[bookId - 1].src)
div3.appendChild(img)

let div7 = document.createElement("div")
div7.setAttribute("class", "row item-name")
div4.appendChild(div7)


let a2 = document.createElement("a")
a2.href = "#"
a2.textContent = bookQuantity
div5.appendChild(a2)

//calculate total price
let totalPrice = document.getElementsByClassName("total-price-display")
totalPrice[0].textContent = "Total price: " + Number(30000 + Number(bookQuantity) * books[bookId - 1].price) + " VND"


// continue to check out after clicking the button
let btnCheckout = document.getElementsByClassName("btn")

for (let i of btnCheckout) {
  i.addEventListener("click", function () { window.open("http://127.0.0.1:5500/checkout.html") })

}











