// 🔤 Alice Guesses the Secret String from Bob
//
// Problem:
// Bob creates a secret string `a` (length ≥ 2, only lowercase letters).
// He transforms it into a string `b` as follows:
//   - For every pair of consecutive characters in `a`, form a substring of length 2
//   - Concatenate all such substrings to form `b`
//
// Example:
//   a = "abac" → substrings: "ab", "ba", "ac" → b = "abbaac"
//
// Your Task:
// Given `b`, reconstruct and print the original string `a`.
//
// Input:
// - First line: integer `t` (number of test cases)
// - Next `t` lines: each line is a string `b` (2 ≤ |b| ≤ 100)
//   Guaranteed: each `b` is valid and formed using the above method.
//
// Output:
// - For each test case, print the original string `a`
//
// 🔍 How to solve:
// - First char of `a` is always b[0]
// - Then for every 2nd char in every pair (i.e., b[1], b[3], b[5], ...) add that char to `a`
//
// 🧪 Examples:
//
// Input:
// 4
// abbaac
// ac
// bccddaaf
// zzzzzzzzzz
//
// Output:
// abac
// ac
// bcdaf
// zzzzzz
//
// Explanation:
// 1) abbaac → pairs: ab, ba, ac → a = abac
// 2) ac → only 2 letters → a = ac
// 3) bccddaaf → pairs: bc, cd, da, af → a = bcdaf
// 4) zzzzzzzzzz → pairs: zz, zz, zz, zz, zz → a = zzzzzz


// Reconstruct original string `a` from string `b` using prompt-sync

const prompt = require('prompt-sync')();

// Read number of test cases
const t = parseInt(prompt('Enter number of test cases: '));

// Array to store inputs
let testCases = [];

// Read each string b
for (let i = 0; i < t; i++) {
  const b = prompt(`Enter string b for test case ${i + 1}: `);
  testCases.push(b);
}

console.log('\nReconstructed original strings:');

for (let b of testCases) {
  let a = b[0]; // start with first character
  for (let i = 1; i < b.length; i += 2) {
    a += b[i]; // take every 2nd character
  }
  console.log(a);
}
