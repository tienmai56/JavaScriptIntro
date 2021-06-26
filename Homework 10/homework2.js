

function getData(){
    let newtitle = document.getElementById("title").value
    let newpost = document.getElementById("submissionfield").value
    newuserId = Math.floor(Math.random())
    newid=Math.floor(Math.random())


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId:newuserId,
            id:newid,
            title:newtitle,
            body: newpost

        }),

    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });



// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     userId: 9,
//     id: 100000,
//     title: "tien is testing",
//     body: "mai phuong thuy tien"
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// console.log("success")
}

let btn = document.getElementById("button").addEventListener("click", getData)






