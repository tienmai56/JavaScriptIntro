let staff=[{Name: 'Tien', Age:23, Salary: 4000, Position: 'marketing'},
{Name: 'Trung Anh', Age:25, Salary: 5000, Position: 'teacher'},
{Name: 'Ha San', Age:24, Salary: 10000, Position: 'ceo'}
]

function printStaff(){
    console.clear()
    for(let x=1;x <= staff.length;x++){
                console.log('#'+x+'. '+staff[x-1].Name)
                console.log('Age: '+staff[x-1].Age)
                console.log('Salary: '+staff[x-1].Salary)
                console.log('Position: '+staff[x-1].Position)
    
                
            }
        }
    
   

command = ['create','read','update','delete']
while(true){
    let userInput=prompt('Enter your command (create,read,update,delete')
    
    if(command.includes(userInput)==false){
        alert('invalid input');
        break;
    }
        
  
    while(command.includes(userInput)==true){
        
        userInput=userInput.toLowerCase()
        
        if(userInput=='create'){ //assume all data input is valid
            let name = prompt('Enter new staff name')
            let age = Number(prompt('Enter staff age'))
            let salary = Number(prompt('Enter staff salary'))
            let position = prompt('Enter staff position')
            staff.push({Name: name, Age: age, Salary:salary, Position: position})
            printStaff()
            break;
            
        }
        else if(userInput=='update'){
            let Position = Number(prompt('Enter position of staff you want to update: ')) // assuming user always enter valid data
            if(Position<=staff.length && Position>0){
            updateValue=prompt('Enter value you want to update: Name, Age, Salary, Position') //assuming user always enter valid data
            updateContent=prompt('Enter content you want to update')
            staff[Position].updateValue = updateContent

    
            }
            else{
                Position = Number(prompt('Number is out of range. Please enter a valid position: ')) // assuming user always enter a number
            }
            printStaff()
            break;
            
        }
        else if(userInput=='delete'){
            Position = Number(prompt('Enter position to delete: ')) // assuming user always enter a number
            staff.splice(Position-1,1)
            printStaff()
            break;
        }
        else if(userInput=='read'){
            
        printStaff();
        break;
            
        
            
        }
    }
}