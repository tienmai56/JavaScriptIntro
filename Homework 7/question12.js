//12.1
items = ["Backpage","MiBand watch","Ring"]
console.log(items)

//12.3

let element=document.getElementById("item_list_ul")
console.log(element)

//12.4

for(i=0;i<items.length;i++){
    let new_list = document.createElement('li')
    new_list.innerHTML = items[i]
    document.getElementById("item_list_ul").appendChild(new_list)
}

document.getElementById("item_list_ul").removeChild(document.getElementById("item_list_ul").children[0])
document.getElementById("item_list_ul").removeChild(document.getElementById("item_list_ul").children[0])

//12.6
let button = document.getElementById("btn")
console.log(button)

let newitem = document.getElementById("item_input")
console.log(newitem)

//12.7
document.getElementById("btn").addEventListener("click", a=>{console.log('Add button clicked')})

//12.8
document.getElementById("btn").addEventListener("click", a=>{console.log(newitem.value)})

//12.9
document.getElementById("btn").addEventListener("click", addItem)
function addItem(){
    items.push(newitem.value)
    console.log(items)

}

//12.10

document.getElementById("btn").addEventListener("click", reflectItem)
function reflectItem(){
    let entry = document.createElement('li');
    entry.textContent = newitem.value
    document.getElementById("item_list_ul").appendChild(entry)

}

//12.11
document.getElementById("btn").addEventListener("click", a=>{newitem.value=""})

//12.12
//read the list li -> return array
let list_item=document.getElementsByTagName("li")
// for each li in the list, add a button 
for(i=0;i<list_item.length;i++){ // print out all element
    let btn = document.createElement('button')
    btn.innerHTML = "remove"
    btn.className="rmbtn"
    list_item[i].appendChild(btn)
}

//12.13

let rm_button = document.getElementsByClassName("rmbtn")
for(i=0;i<rm_button.length;i++){
    rm_button[i].addEventListener('click',a=>{console.log("Remove")})  
}


// //12.14
for (let i = 0; i < rm_button.length; i++)
{
    rm_button[i].addEventListener('click',a=>{console.log("index: "+i)})  
}


//12.15 + 12.16
let button_list = document.getElementsByTagName("button")
let item_name = document.getElementsByTagName("ul")[0]

for (let i = 0; i < button_list.length; i++)
{
    button_list[i].addEventListener('click',remove)
    
    function remove(){
        items.splice(butto,1) // remove from item list <array>
        button_list[i].remove()
        item_name.getElementsByTagName('li')[i].remove() // remove item name from html 
        console.log(items)
        
    }
    
    
}







