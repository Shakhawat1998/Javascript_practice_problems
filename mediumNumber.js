// 🧾 Problem Statement:
// Given three distinct integers a, b, and c, find the medium number between all of them.
// The medium number is the number that is neither the minimum nor the maximum of the given three numbers.

// 👉 Input:
// The first line contains a single integer t (1 ≤ t ≤ 6840) — the number of test cases.
// Each test case contains three distinct integers a, b, c (1 ≤ a, b, c ≤ 20).

// 👉 Output:
// For each test case, print a single integer — the medium number among the three.

// 🧪 Example:
// Input:
// 9
// 5 2 6
// 14 3 4
// 20 2 1
// 1 2 3
// 11 19 12
// 10 8 20
// 6 20 3
// 4 1 3
// 19 8 4

// Output:
// 5
// 4
// 2
// 2
// 12
// 10
// 6
// 3
// 8

// 📌 Explanation of Example:
// Test Case 1: 5 is the medium of 2, 5, and 6.
// Test Case 2: 4 is the medium of 3, 4, and 14.
// Test Case 3: 2 is the medium of 1, 2, and 20.
// ... and so on.


// 📥 Importing prompt-sync for input handling in Node.js
const prompt = require('prompt-sync')();

// 🔁 Read number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

// 🔁 Process each test case
for (let i = 0; i < t; i++) {
  // 📥 Read three distinct integers from input
  const input = prompt(`Enter 3 distinct integers for test case ${i + 1}: `);

  // 🧮 Convert the input string to an array of integers
  const [a, b, c] = input.split(' ').map(Number);

  // 🗃️ Place numbers in an array
  const arr = [a, b, c];

  // 🔢 Sort the array in ascending order
  arr.sort((x, y) => x - y);

  // 📤 Print the medium (middle) number
  console.log(arr[1]);
}
