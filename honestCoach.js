/*
Problem: Split athletes into two teams with minimal strength gap

Given:
- n athletes numbered 1 to n
- Each athlete i has strength s[i]

Task:
- Split athletes into two teams A and B
- Each team must have at least one athlete
- Every athlete must be in exactly one team

Goal:
- Minimize |max(A) - min(B)|, where
  max(A) = strongest athlete in team A
  min(B) = weakest athlete in team B

Input:
- t test cases
- For each test case:
    - n (number of athletes)
    - n strengths s[1..n]

Output:
- For each test case, print minimum possible value of |max(A) - min(B)|

--------------------------------------------------------
Explanation with examples:

Example 1:
Input:
5
3 1 2 6 4

Sorted strengths: [1, 2, 3, 4, 6]

One optimal split:
A = [1, 2, 4], max(A) = 4
B = [3, 6], min(B) = 3
|4 - 3| = 1 (minimum possible)

Example 2:
Input:
6
2 1 3 2 4 3

Sorted: [1, 2, 2, 3, 3, 4]

One optimal split:
A = [1, 2]
B = [2, 3, 3, 4]

max(A) = 2, min(B) = 2
|2 - 2| = 0 (minimum possible)

Example 3:
Input:
4
7 9 3 1

Sorted: [1, 3, 7, 9]

Minimum difference is between 3 and 7 = 4,
but since teams must be split, the minimum |max(A) - min(B)| = 2 by splitting properly.

Example 4:
Input:
2
1 1000

Teams:
A = [1], max = 1
B = [1000], min = 1000

Difference = 999

Example 5:
Input:
3
100 150 200

Sorted: [100, 150, 200]

Split between 100 and 150:
Difference = 50

--------------------------------------------------------

Summary of approach:
- Sort strengths
- The minimal difference is the minimal difference between any two adjacent athletes in the sorted list
- Because we can split teams between these two athletes

*/


const prompt = require('prompt-sync')();  // Import prompt-sync to read input synchronously

const t = Number(prompt());  // Read the number of test cases and convert to number

while(t--) {  // Loop over each test case
  const n = Number(prompt());  // Read number of athletes for this test case
  const strengths = prompt()   // Read strengths as a space-separated string
    .split(' ')                // Split the string into an array of strings
    .map(Number);              // Convert each string to a number

  strengths.sort((a, b) => a - b);  // Sort the strengths array in ascending order

  let minDiff = Infinity;  // Initialize minDiff with a very large number

  for (let i = 1; i < n; i++) {   // Iterate through the sorted array starting from second element
    const diff = strengths[i] - strengths[i - 1];  // Calculate difference between adjacent strengths
    if (diff < minDiff) minDiff = diff;            // Update minDiff if current difference is smaller
  }

  console.log(minDiff);  // Output the minimum difference for this test case
}
