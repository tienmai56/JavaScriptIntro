
var items = ['Jeans','T-Shirt','Socks']
var userInput = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?').toLowerCase()


while((['c','r','u','d'].includes(userInput))!==true){ // if user enters any letter ouf of CRUD range
    alert('This command is not supported')
    userInput = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?').toLowerCase()
    
}

while((['c','r','u','d'].includes(userInput))!==false){ // when user enters a valid letter

if((userInput)=='u')
{
    let updatePosition = Number(prompt('Enter the position you want to update')) 
    while(isNaN(updatePosition) || updatePosition <0 || updatePosition > items.length){ /// check if input is a valid number
        updatePosition = Number(prompt('Invalid number. Enter the position you want to update'))
    }

    var newName = prompt('Enter the new name')
    items[updatePosition-1] = newName
    console.log(items)
    alert('Done')
    userInput = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?').toLowerCase()
    
    
}

if((userInput)=='c')
{
    var newItem = prompt('Enter the name of the new item')
    items.push(newItem)
    console.log(items)
    alert('Done')
    userInput = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?').toLowerCase()
    

} 

if((userInput)=='d')
{
    let deletePosition = Number(prompt('Enter the position you want to delete:'))
    while(isNaN(deletePosition) || deletePosition <0 || deletePosition>items.length){
        deletePosition = Number(prompt('Invalid number. Enter the position you want to delete'))
    }

    items.splice(deletePosition-1,1)
    //console.log(items)
    alert('Done')
    userInput = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?').toLowerCase()
      

}

if((userInput)=='r')
{
    alert('The current items are: \n' + items.join('\n'))
    userInput = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?').toLowerCase()
    
}

}
