// // Tanya is learning to subtract one from a number, but she does it differently when the number has two or more digits:

// // If the last digit of the number is not zero, she subtracts 1.

// // If the last digit is zero, she removes the last digit by dividing the number by 10.

// // Given a number n, Tanya will perform this special subtraction k times.

// // Task:
// // Print the final number after Tanya subtracts k times.

// // Input:
// // Two integers n and k (2 ≤ n ≤ 10⁹, 1 ≤ k ≤ 50) — the starting number and how many times Tanya subtracts.

// // Output:
// // Print the resulting number after k subtractions.


// //input
// 512 4
// //output
// 50

// //explanation
// 512 → 511 → 510 → 51 → 50

// //input
// 1000000000 9
// //output
// 1

// explanation
// Tanya keeps removing trailing zeros by dividing by 10 until after 9 steps the number reduces from 1,000,000,000 to 1.



const prompt = require('prompt-sync')();

// Read input line containing two integers n and k separated by space
let [n, k] = prompt("Enter n and k separated by space: ").split(" ").map(Number);

// Repeat the subtraction operation k times
for (let i = 0; i < k; i++) {
    // Check the last digit of n
    if (n % 10 !== 0) {
        // If last digit is not zero, subtract 1 from n
        n = n - 1;
    } else {
        // If last digit is zero, remove it by dividing n by 10
        n = Math.floor(n / 10);
    }
}

// After performing k operations, print the resulting number
console.log(n);
