// Write a program asking users their age, and then decide if they are old enough to view a 14+ content

let userAge = Number(prompt('How old are you?'));
while(isNaN(userAge) || userAge <0){
    userAge = Number(prompt('Invalid number. Enter your age again'));
}

if(userAge<14){
    alert('You are not old enough to view this content')
}
else{
    alert('Enjoy!')
}
