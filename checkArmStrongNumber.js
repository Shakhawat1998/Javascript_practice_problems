function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;

    
    while (temp != 0) {
        let digit = temp % 10; 
        sum += Math.pow(digit, 3);  
        temp = Math.floor(temp / 10);  
    }

    
    return num === sum;
}


const num = 153;
console.log(isArmstrongNumber(num)); 

const num2 = 123;
console.log(isArmstrongNumber(num2)); 
