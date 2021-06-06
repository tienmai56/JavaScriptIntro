products=[
    {Name:'Xiaomi portable charger 20000mah', 
Brand: 'Xiaomi',
Price: 428,
Color: 'White',
Category:'Charger'},

{Name:'VSmart Active 1',
Brand: 'VSmart',
Price: 5487,
Color: 'Black',
Category: 'Charger'
},

{Name:'IPhone X',
Brand: 'Apple',
Price: 21490,
Color: 'Gray',
Category: 'Phone'
},

{Name:'Samsung Galaxy A9',
Brand: 'Samsung',
Price: 8490,
Color: 'Blue',
Category: 'Phone'
}
]

//5.1 Print/log name and price of all the products out 
for(let x=0;x < products.length;x++){
    console.log(products[x].Name)
    console.log(products[x].Price)
    console.log('------------------------------------')
}

//5.1 Cach 2:
console.log('Cach 2')
for(element of products){
    console.log(element.Name)
    console.log(element.Price)
}

// //5.2 Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
// for(let x=1;x <= products.length;x++){
//         console.log('#'+x+'. '+products[x-1].Name)
//         console.log('Price: '+ products[x-1].Price)
//         console.log('------------------------------------')
//     }

// let userInput = Number(prompt('Enter product position:')) //assume user will always enter a number, lazy to check string input...
// //position is out of range
// while(userInput>products.length || userInput <= 0){
//     userInput = Number(prompt('Number is out of range. Enter a valid product position:'))
// }
// //position is inside the range
// console.clear() // clear console 
// if(userInput<=products.length){
//     for(value in products[userInput])
//     console.log(value+ ': '+products[userInput-1][value])
    
// }

//5.3 Write a script printing/logging out the products based on category input by users
// category = [];
// for(let x=0;x<products.length;x++){ //build an array of all available categories
    
//     if(category.includes(products[x].Category)==false){
//         category.push(products[x].Category)
//     }
// }


// let userInput = prompt('Enter your category?')

// for(let x=0;x<category.length;x++){ //check if userinput matches with available categories
//     if(category[x].toLowerCase()==userInput.toLocaleLowerCase()){ //if yes
//         for(let x=0;x<products.length;x++){ //look for all products within this cateogry
//             if(products[x].Category == category[x]){ 
//                 console.log('Name: '+ products[x].Name)
//                 console.log('Price: '+ products[x].Price)
//                 break;
//             }
//         }
//     } else if(x=category.length-1){
//         alert('there is no product in your chosen category')
//     }
// }

//5.4 add provider

products[0].Providers = ['Phukienzero', 'Dientuccc'];
products[1].Providers = ['Tgdd', 'Ddghn','VhStore'];
products[2].Providers = ['Tgdd'];
products[3].Providers = ['Tgdd'];

for(let x=1;x <= products.length;x++){
        console.log('#'+x+'. '+products[x-1].Name)
        console.log('Price: ' + products[x-1].Price)
        console.log('Providers: '+products[x-1].Providers)

        console.log('------------------------------------')
    }