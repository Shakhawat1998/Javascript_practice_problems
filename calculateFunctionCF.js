// // // For a positive integer n, define the function:

// // // f(n) = -1 + 2 - 3 + 4 - 5 + ... up to n

// // // This means you add and subtract numbers from 1 up to n alternately:

// // // Subtract 1

// // // Add 2

// // // Subtract 3

// // // Add 4

// // // Subtract 5

// // // and so on...

// // // Task:
// // // Given n, calculate the value of f(n).

// // // Input:
// // // A single integer n (1 ≤ n ≤ 10^15)

// // // Output:
// // // Print the result of f(n).

// // Input:
// // 4
// // Output:
// // 2

// // f(4)=−1+2−3+4=2


// // Input:
// // 5
// // Output:
// // -3


// // f(5)=−1+2−3+4−5=−3



//  *   If n is even: f(n) = n / 2
//  *   If n is odd:  f(n) = -((n + 1) / 2)


const prompt = require('prompt-sync')(); // Import prompt-sync to read input from console

let n = BigInt(prompt("Enter n: "));    // Read input as a string, convert to BigInt for large numbers

// Declare a variable to store the result of f(n)
let result;

// Check if n is even (n % 2n === 0n)
// Use BigInt literal '2n' for modulo operation with BigInt
if (n % 2n === 0n) {
  // For even n, f(n) = n / 2
  result = n / 2n;
} else {
  // For odd n, f(n) = -((n + 1) / 2)
  result = -((n + 1n) / 2n);
}

// Print the result as a string (BigInt needs to be converted)
console.log(result.toString());
