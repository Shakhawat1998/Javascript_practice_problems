/*
Problem: Maximum Non-Decreasing Subsegment Length

Kefa wants to find the longest continuous part (subsegment) of his daily earnings
where the money he makes each day does not decrease compared to the previous day.

- Input:
  - n: number of days
  - a: array of money earned each day

- Output:
  - The length of the longest non-decreasing continuous segment in the earnings.

Example 1:
Input:
  n = 6
  a = [2, 2, 1, 3, 4, 1]

Explanation:
- The longest non-decreasing subsegment is [1, 3, 4] (from day 3 to day 5).
- Its length is 3.

Example 2:
Input:
  n = 3
  a = [2, 2, 9]

Explanation:
- The entire array is non-decreasing: 2 ≤ 2 ≤ 9.
- So the longest non-decreasing subsegment length is 3.

Summary:
We want to scan through the array and find the longest stretch where each next number
is greater than or equal to the previous one.
*/



const prompt = require('prompt-sync')({ sigint: true });  // Import prompt-sync for reading input

const n = parseInt(prompt(), 10);                         // Read the number of days and convert to integer
const a = prompt().split(' ').map(Number);                // Read daily earnings, split by space and convert each to number

let maxLength = 1;                                        // Initialize max length of non-decreasing subsegment
let currentLength = 1;                                    // Initialize current non-decreasing subsegment length

for (let i = 1; i < n; i++) {                             // Loop from second day to last day
    if (a[i] >= a[i - 1]) {                                 // If current day's earning >= previous day's earning
        currentLength++;                                      // Increase current subsegment length by 1
    } else {
        currentLength = 1;                                    // Otherwise, reset current subsegment length to 1
    }
    if (currentLength > maxLength) {                        // If current subsegment is longer than max found so far
        maxLength = currentLength;                            // Update max length
    }
}

console.log(maxLength);                                   // Print the length of the longest non-decreasing subsegment
