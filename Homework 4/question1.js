const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};

for (let x in product) {
    console.log(x);
}

// 1.1 hat does x receives from product, property or value?
// x receives property

// Use the for loop to print/log out the following output
for(var value in product){
    console.log(value + ' : '+product[value])
}