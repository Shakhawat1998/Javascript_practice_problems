// function decimalToBinary(num) {
//     return num.toString(2);
// }

// let num = 10;
// let binary = decimalToBinary(num);
// console.log(binary);


// Raw Mathematical calculation 

function decimalToBinary(num) {
    let binary = '';

    // Keep dividing the number by 2 and store remainders
    while (num > 0) {
        let remainder = num % 2;  // Find remainder when divided by 2
        binary = remainder + binary;  // Prepend remainder to binary string 
        num = Math.floor(num / 2);  // Divide the number by 2 (floor division)
    }

    return binary || '0';  // Return '0' if the number is 0
}

let num = 10;
let binary = decimalToBinary(num);
console.log(binary);  // Output: 1010

