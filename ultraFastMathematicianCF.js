// // // You are given two binary numbers (only made of 0s and 1s) of the same length.

// // // Your job is to create a new binary number, where:

// // // Each digit is 1 if the digits at that position in the two numbers are different

// // // Each digit is 0 if the digits at that position are the same

// // // This is just like a bitwise XOR operation.

// // // 🧾 Input
// // // Two lines

// // // Each line has a binary number (only 0 and 1)

// // // Both numbers are the same length (maximum 100 digits)

// // // 🖨 Output
// // // One line containing the result of comparing each corresponding digit.

// // // Leading 0s must be preserved



// // Input:
// // 1010100
// // 0100101


// // step by step 
// // 1 vs 0 → 1
// // 0 vs 1 → 1
// // 1 vs 0 → 1
// // 0 vs 0 → 0
// // 1 vs 1 → 0
// // 0 vs 0 → 0
// // 0 vs 1 → 1

// // Output:
// // 1110001


// 🧠 Goal
// Perform a digit-by-digit XOR on two binary strings of equal length.


// Read input from user (uncomment the below if using in Node.js)
const prompt = require('prompt-sync')();

// Step 1: Read the two binary strings
let a = prompt("Enter first binary string: "); // e.g., "1010100"
let b = prompt("Enter second binary string: "); // e.g., "0100101"

// Step 2: Initialize an empty result string
let result = "";

// Step 3: Loop through each character position
for (let i = 0; i < a.length; i++) {
    // Compare characters at the same position
    if (a[i] === b[i]) {
        result += "0"; // Same bits → 0
    } else {
        result += "1"; // Different bits → 1
    }
}

// Step 4: Output the final result
console.log(result);
