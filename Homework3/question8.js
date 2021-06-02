//8.1
mySheep = [5,7,300,90,24,50,75];
console.log('Hello, my name is Tien and here is my sheep sizes: \n' + mySheep +'\n')
console.log('\n')

//8.2
let x=0;
for(let i=0; i<mySheep.length;i++){
    if(x<Number(mySheep[i])){
        x = Number(mySheep[i])
    }

}
console.log('Now my biggest sheep has size ' + x + ', lets shave it'+'\n')
console.log('\n')

//8.3
let index = mySheep.indexOf(x)
mySheep[index] = 8
console.log('After shearing, here is my flock' + mySheep +'\n')
console.log('\n')

//8.4

// mySheep=mySheep.map(function(sheep){
//     return sheep+50;
// });
// console.log('MONTH 1'+'\n')
// console.log('One month has passed, my sheeps have grown, here are their sizes \n'+ mySheep)

//8.5
for(let i=1;i<5;i++)
{
    mySheep=mySheep.map(function(sheep){
        return sheep+50;
    });
    console.log('MONTH '+i)
    console.log('One month has passed, my sheeps have grown, here are their sizes \n'+ mySheep)

    let x=0;
    for(let i=0; i<mySheep.length;i++){
        if(x<Number(mySheep[i])){
            x = Number(mySheep[i])
    }

    }
    console.log('Now my biggest sheep has size ' + x + ', lets shave it'+'\n')
    console.log('\n')

    let index = mySheep.indexOf(x)
    mySheep[index] = 8
    console.log('After shearing, here is my flock ' + mySheep +'\n')
    console.log('\n')
}

//8.6 
let totalSize = 0;
for(let i=0;i<mySheep.length;i++)
{
    totalSize=totalSize+mySheep[i]
}
console.log('My flock has size in total: ' + totalSize)
console.log('I would get '+ totalSize + "* 2$ = "+totalSize*2)


function square(side) {
    for(let i=1;i<colors.length;i++){
     repeat(4, function(){
         forward(side);
         right(90);
     });
     side=side/2
 }
 }
