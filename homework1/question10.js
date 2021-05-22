// rite a script that converts Celsius (0C) into Fahrenheit (0F)

let temp = Number(prompt("Enter the temperature in Celcius"));
while(isNaN(temp)) {
    temp = Number(prompt("Invalid temperature. Please enter again"));
}

let fahrenheit = (temp-32)*5/9;
alert( temp+"(C) = " + fahrenheit + " (F)");
