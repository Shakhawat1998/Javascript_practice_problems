// // You are given a sum consisting of numbers 1, 2, and 3 separated by plus signs (+).

// // Your task is to rearrange the numbers in non-decreasing order (sorted from 
// // smallest to largest) and print the sum again with plus signs.

// // Input:
// // A string representing a sum like "3+2+1".

// // The string only contains digits 1, 2, 3 and 
// // plus signs.

// // The string length is at most 100.

// // Output:
// // Print the sum with the numbers sorted in 
// // non-decreasing order, separated by plus signs.

// input
// 3+2+1
// output
// 1+2+3
// input
// 1+1+3+1+3
// output
// 1+1+1+3+3
// input
// 2
// output
// 2

// Summary:
// Sort the numbers in the sum and print
//  them back joined by +.


const prompt = require('prompt-sync')(); // Import prompt-sync to take user input

let s = prompt(); // Read the input string (e.g., "3+2+1")

let digits = []; // Create an empty array to store only the digits (1, 2, 3)

// Loop through each character of the input string
for (let i = 0; i < s.length; i++) {
  if (s[i] !== '+') {      // If the character is not a plus sign
    digits.push(s[i]);     // Add the digit to the array
  }
}

digits.sort(); // Sort the digits array in ascending order (e.g., ['1', '2', '3'])

let result = ""; // Initialize an empty string to build the final output

// Loop through the sorted digits
for (let i = 0; i < digits.length; i++) {
  result += digits[i];         // Add the digit to the result string
  if (i !== digits.length - 1) // If it's not the last digit
    result += '+';             // Add a plus sign between digits
}

console.log(result); // Print the final formatted and sorted sum string
