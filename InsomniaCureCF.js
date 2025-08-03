// A princess is trying to fall asleep by imagining and counting dragons. She imagines that out of the total d dragons:

// Every k-th dragon is hit with a frying pan 🥘

// Every l-th dragon gets their tail shut in a door 🚪

// Every m-th dragon has their paws trampled with heels 👠

// Every n-th dragon is scared off by threats to call mom 😱

// She wants to know how many dragons got damaged in total — that is, how many dragons got hit in any of these 
// four ways (a dragon might be damaged in more than one way, but we only count each dragon once).

// ✅ Input Format:
// You are given 5 integers:


// k   // every k-th dragon is hit with a frying pan
// l   // every l-th dragon gets their tail shut
// m   // every m-th dragon gets paws trampled
// n   // every n-th dragon gets threatened
// d   // total number of dragons
// (1 ≤ k, l, m, n ≤ 10 and 1 ≤ d ≤ 100000)

// 📌 Output:
// One integer — the total number of damaged dragons (i.e. dragons affected by any of the 4 conditions above).

// 📘 Example 1:
// Input:


// 1
// 2
// 3
// 4
// 12
// Explanation:

// Every 1st, 2nd, 3rd, or 4th dragon is damaged. Since every number from 1 to 12 is divisible by at least
//  one of those numbers, all 12 dragons are damaged.

// Output:


// 12
// 📘 Example 2:
// Input:


// 2
// 3
// 4
// 5
// 24
// Explanation:

// Now the dragons damaged are the ones at:

// Every 2nd → 2, 4, 6, 8, ...

// Every 3rd → 3, 6, 9, ...

// Every 4th → 4, 8, 12, ...

// Every 5th → 5, 10, 15, ...

// If you count unique dragons among these up to 24, 17 dragons are damaged.

// Output:


// 17




// Read input values: k, l, m, n, d
const prompt = require('prompt-sync')(); // Use prompt-sync for user input in Node.js

// Read the 5 integers
let k = parseInt(prompt("Enter k: "));
let l = parseInt(prompt("Enter l: "));
let m = parseInt(prompt("Enter m: "));
let n = parseInt(prompt("Enter n: "));
let d = parseInt(prompt("Enter d: "));

// Initialize counter to keep track of damaged dragons
let count = 0;

// Loop through all dragons from 1 to d
for (let i = 1; i <= d; i++) {
    // Check if this dragon is affected by any of the 4 conditions
    if (i % k === 0 || i % l === 0 || i % m === 0 || i % n === 0) {
        count++; // This dragon is damaged, so increment the counter
    }
}

// Output the total number of damaged dragons
console.log(count);
