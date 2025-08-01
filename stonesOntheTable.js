// You have a row of stones colored Red (R), Green (G), or Blue (B).

// Your goal: Remove the minimum number of stones so that no two neighboring stones have the same color.

// Input:
// An integer n — the number of stones.

// A string s of length n — colors of the stones in order (R, G, or B).

// Output:
// Print the minimum number of stones to remove.



// //input
// 3
// RRG
// //output
// 1


// //input
// 5
// RRRRR

// //output
// 4

// //input
// 4
// BRBG

// //output
// 0



const prompt = require('prompt-sync')();

let n = parseInt(prompt());       // Read the number of stones
let s = prompt();                 // Read the string of colors

let min_count = 0;

for (let i = 1; i < n; i++) {
  if (s[i] === s[i - 1]) {
    min_count++;
  }
}

console.log(min_count);
