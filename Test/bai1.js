// Cho n số nguyên liên tiếp từ 0 đến n-1 được biểu diễn trên một vòng tròn, khoảng cách giữa các số bằng nhau (và tất nhiên là 0 và số n-1 cũng ở cạnh nhau). Biết rằng n là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20

// Viết hàm findOppositeNumber(n, inputNumber) cho trước 2 tham số đầu vào là n và inputNumber tồn tại trong dãy. Tìm số đối diện với số inputNumber đó (0 <= inputNumber <= n - 1)

function finOppositeNumber (n, inputNumber)
{
    if (inputNumber > (n / 2))
        return (inputNumber - (n / 2));
  
    return (inputNumber + (n / 2));
}
  


console.log(finOppositeNumber(10, 2))
console.log(finOppositeNumber(10, 6))