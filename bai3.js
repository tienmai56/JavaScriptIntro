// Xây dựng trang web "Dự đoán kết quả xổ số". Với các chức năng sau:
// Người chơi phải đoán số trong một khoảng cho phép và nhập vào ô dự đoán, nếu nhập sai hiện thông báo nhập lại
// Người chơi được đoán tối đa 3 lần
// Hiện kết quả đúng nếu người chơi chọn sai số đã dự đoán
// Hiện kết quả trúng thưởng nếu người chơi chọn đúng số
// Giao diện đẹp và có responsive để có thể chơi thử trên smartphone là một điểm cộng
// Có link trên github page hoặc link bất kỳ có thể truy cập càng tốt.
const random = Math.floor(Math.random() * 10) + 1;
function guessNum() {
    let counter = 1; // user has 3 times to guess, starting from 1 

    // generating a random integer from 1 to 10
    
    console.log("random num is: " + random)

    // take input from the user
    let userInput = document.getElementsByClassName("input-box")
    console.log(userInput[0].value)

    let userInputValue = userInput[0].value

    // // take the input until the guess is correct
    
        if (random != userInputValue) {
            alert("Opps! Your guess is wrong. Give it another try!")
            counter++

        }


        if (random == userInputValue) {
            alert("Your guess is correct! You are the lucky one!")
        }

        if(counter>3){
            alert("Sorry! You are not lucky this time")
        }

        
    
   
}

    // call the function
    let btn = document.getElementsByClassName("btn")[0]
    btn.addEventListener("click", guessNum)
