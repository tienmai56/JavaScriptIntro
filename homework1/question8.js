// Write a script that calculates the area of a square

let length = Number(prompt("Enter side length of the square"));
while(isNaN(length) || length < 0) {
    length = Number(prompt("Invalid length. Please enter again"));
}

let area = length*length;
alert("the square area is "+ area);
