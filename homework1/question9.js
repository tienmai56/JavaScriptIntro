// Write a script that calculates the area of a circle
let radius = Number(prompt("Enter the radius of the circle"));
while(isNaN(radius) || radius < 0) {
    radius = Number(prompt("Invalid length. Please enter again"));
}

let area = Math.PI*radius*radius;
alert("the circle area is "+ area);
