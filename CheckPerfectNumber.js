// A Perfect Number is a number that is equal to the sum of its proper divisors (excluding the number itself). 
// For example, 28 is a perfect number 
// because its divisors are 1, 2, 4, 7, 14, and their sum is 28.

function isPerfectNumber(num) {
    let sum = 0;


    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }


    return num === sum;
}

let num = 28;
console.log(isPerfectNumber(num));  
