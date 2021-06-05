const dictionary = {debug:'The process of figuring out why your program has a certain error and how to fix it',
done:'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed',
defect:"The formal word for ‘error’",
pm:'The short version  of Project Manager, the person in charge of the final result of a project',
uiux:'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
};

// //4.1 
// alert('Hi there, this is a dev dictionary')
// let userInput = prompt('Enter a keyword')

// keys = Object.keys(dictionary) // return an array ['debug','done','defect','pm','uiux']

// for(let x in dictionary){
//     dictLength = keys.length // find the length of the dict
//     if(userInput==x){
//         alert(userInput + '\n'+ dictionary[x])
//         break; // stop when user input is found to match with an object key 
//     }
//     else if(x== keys[dictLength-1]){ //if the loop runs through last element but no match is found
//         alert('We could not find your word: ' + userInput)

//     }
        

//     }


// //4.2 
alert('Hi there, this is a dev dictionary')

while(true){
    let userInput = prompt('Enter a keyword')
    while(userInput=== ''){
        userInput = prompt('Please enter a valid keyword')
    }
    
    while(userInput!== ''){
    for(let x in dictionary){
        keys = Object.keys(dictionary) // return an array ['debug','done','defect','pm','uiux']
        dictLength = keys.length // find the length of the dict
        if(userInput==x){
            alert(userInput + '\n'+ dictionary[x])
            break; // stop when user input is found to match with an object key 
        }
        else if(x== keys[dictLength-1]){ //if the loop runs through last element but no match is found
            let newExplanation = prompt('We could not find your word: ' + userInput +'\n' + 'Leave your explanation')
            dictionary[userInput]=newExplanation
            console.log(Object.keys(dictionary))
            console.log(dictionary)
           
    
        }     
    
        }
    
   
    
    }

}


    


    







