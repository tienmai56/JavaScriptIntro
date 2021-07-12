// Viết 1 hàm nhận vào 2 chuỗi s1 và s2, trả về đầu ra là một chuỗi mới chứa các kí tự xen kẽ cùng vị trí vị trí của 2 chuỗi với nhau.
// Test case sau khi làm xong:
// Test case 1: merge2String(“abc”, “123”) trả về a1b2c3
// Test case 2: merge2String(“abc”, “0123”) trả về a0b1c23
// Test case 3: merge2String(“abcd”, “123”) trả về a1b2c3d

function mergeString(firstStr, secondStr){
    let arr=[]
    if(secondStr.length>firstStr.length){
        for(i=0;i<secondStr.length;i++){
            arr.push(firstStr[i])
            arr.push(secondStr[i])
           
    
        }  console.log(arr.join(""))

    }

    if(secondStr.length<firstStr.length){
        for(i=0;i<firstStr.length;i++){
            arr.push(firstStr[i])
            arr.push(secondStr[i])
            
    
        } console.log(arr.join(""))

    }

    if(secondStr.length==firstStr.length){
        for(i=0;i<firstStr.length;i++){
            arr.push(firstStr[i])
            arr.push(secondStr[i]) 
    
        }  console.log(arr.join(""))

    }
   

    
}

mergeString("abc","123")

mergeString("abc","0123")

mergeString("abcd", "123")
