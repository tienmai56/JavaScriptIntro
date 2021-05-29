// Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation

// And then based on the calculated BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30

let weight = Number(prompt("Enter your weight in kg"));
while(isNaN(weight) || weight <0 || weight == 0){ // check if n is a valid number
    weight = Number(prompt('Invalid number. Enter a positive number of your weight'));
}

let height = Number(prompt("Enter your height in cm"));
while(isNaN(height) || height <0 || height == 0){ // check if n is a valid number
    height = Number(prompt('Invalid number. Enter a positive number of your height'));
}

let height_convert_to_m = height*0.01;
let BMI = weight / (height_convert_to_m*height_convert_to_m)
alert(Math.round(BMI))

if(BMI <16){
    alert('You are severly underweight')
}
else if((BMI >= 16)&&(BMI<=18.5)){
    alert('You are underweight')
}
else if((BMI > 18.5)&&(BMI<=25)){
    alert('You are normal')
}
else if((BMI > 25)&&(BMI<=30)){
    alert('You are overweight')
}
else{
    alert('You are obese')
}

