// // You are given the scores of n contestants in a contest, sorted in non-increasing order (from highest to lowest). A contestant moves to the next round if:

// // Their score is at least as high as the k-th place score, and

// // Their score is greater than 0

// // Input:

// // First line: two integers n and k (1 ≤ k ≤ n ≤ 50)

// // Second line: n space-separated integers representing scores (0 ≤ score ≤ 100), sorted in non-increasing order

// // Output:

// // Print how many contestants advance to the next round.

// Input:
// 8 5
// 10 9 8 7 7 7 5 5

// Output:
// 6

// Input:
// 4 2
// 0 0 0 0

// Output:
// 0


// What You Need to Do:
// Count how many participants have:

// A score ≥ score of the k-th contestant

// And > 0



const prompt = require('prompt-sync')(); // for input

// Read n and k
const [n, k] = prompt().split(' ').map(Number);

// Read scores into array
const v = prompt().split(' ').map(Number);

// Get k-th score (0-based indexing)
const check = v[k - 1];

let count = 0;

// Count how many scores are >= check and > 0
for (let i = 0; i < n; i++) {
    if (v[i] >= check && v[i] > 0) {
        count++;
    } else {
        break;
    }
}

console.log(count);
