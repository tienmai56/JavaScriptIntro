task =[{Skill:'HTML', complete:false},
{Skill: 'Basic of JavaScript', complete:false},
{Skill: 'Node package Manager (npm)', complete: false},
{Skill: 'Git', complete: false}]

//6.1 print it out

function printTask(){
console.clear()
console.log('Hi there, this is your learning tasks to front-end developer career: ')
for(let x=1;x <= task.length;x++){
            console.log('#'+x+'. '+task[x-1].Skill)
            console.log('Complete: '+ task[x-1].complete)

            
        }
    }

//printTask()


//6.1 Let users add new task


while(true){
    let userInput=prompt('Enter your command (New, Delete, Update, Complete)')
    command = ['new','delete','update','complete']

    if(command.includes(userInput)==false){
        alert('invalid input');
        break;
    }
        
  
    while(command.includes(userInput)==true){
        
        userInput=userInput.toLowerCase()
        
        if(userInput=='new'){
            let NewTask = prompt('Enter new task')
            task.push({Skill: NewTask, complete:false})
            printTask()
            break;
            
        }
        else if(userInput=='update'){
            let Position = Number(prompt('Enter position: ')) // assuming user always enter a number
            if(Position<=task.length){
            NewTitle=prompt('Enter new title')
            task[Position-1].Skill = NewTitle
            printTask()
            }
            else{
                Position = Number(prompt('Number is out of range. Please enter a valid position: ')) // assuming user always enter a number
            }
            break;
            
        }
        else if(userInput=='complete'){
            Position = Number(prompt('Enter position: ')) // assuming user always enter a number
            task[Position-1].complete = true
            printTask()
            break;
            
        }
        else if(userInput=='delete'){
            Position = Number(prompt('Enter position: ')) // assuming user always enter a number
            task.splice(Position-1,1)
            printTask()
            break;
            
        }
    }
}

    



