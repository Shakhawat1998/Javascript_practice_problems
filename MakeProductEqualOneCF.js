// Problem Summary:
// We have n integers a1, a2, ..., an.
// Operation allowed (cost = 1 coin per step):
//     Choose one number and either add 1 or subtract 1 from it.
// Goal:
//     Make the product of ALL numbers equal to 1.
// Question:
//     What is the minimum number of coins needed?

// Key points:
// - You can apply the operation multiple times to the same number.
// - The product must be exactly 1 in the end.
// - The numbers can be positive, negative, or zero.

// Constraints:
// 1 ≤ n ≤ 10^5
// -10^9 ≤ ai ≤ 10^9

// Output:
// A single integer = minimal number of coins.

// Approach idea:
// 1. To make product = 1, each number should be either 1 or -1 in the final array.
// 2. Cost to make x → 1: |x - 1|
// 3. Cost to make x → -1: |x + 1|
// 4. Zeros can go to either 1 or -1 in 1 coin.
// 5. If there’s an odd number of -1s, product will be -1 → need to flip one (-1 → 1), costing 2 coins unless we can flip a zero cheaply.

// ----------------------
// Example 1:
// Input:
// 2
// -1 1
//
// We have:
// - First element: already -1 (no cost)
// - Second element: already 1 (no cost)
// Product = -1 * 1 = -1 (not 1)
// Need to flip one -1 to 1 → cost = 2 coins
// Final array: [1, 1], product = 1
// Output: 2


// ----------------------
// Example 2:
// Input:
// 4
// 0 0 0 0
//
// All zeros → product = 0
// We must make all numbers either 1 or -1
// Cheapest: make all zeros into 1 → cost = 1 coin per zero
// Total cost = 4 * 1 = 4
// Product = 1*1*1*1 = 1
// Output: 4


// ----------------------
// Example 3:
// Input:
// 5
// -5 -3 5 3 0
//
// Step 1: Convert each to -1 or 1
// - -5 → -1 (cost = |-5 + 1| = 4 coins)
// - -3 → -1 (cost = |-3 + 1| = 2 coins)
// - 5 →  1 (cost = |5 - 1| = 4 coins)
// - 3 →  1 (cost = |3 - 1| = 2 coins)
// - 0 →  1 (cost = 1 coin)
//
// Total cost so far = 4 + 2 + 4 + 2 + 1 = 13
//
// Step 2: Count -1s → we have 2 (-1, -1) → even → product = 1 already
// No extra cost needed
// Output: 13


// Import prompt-sync for local testing (remove in Codeforces / online judges)
const prompt = require("prompt-sync")();

// Read number of elements
let n = parseInt(prompt());

// Read the array of integers
let arr = prompt().split(" ").map(Number);

// Variables to store total cost, count of negative numbers, and count of zeros
let totalCost = 0;
let negCount = 0;
let zeroCount = 0;

// Step 1: Process each element
for (let i = 0; i < n; i++) {
    let x = arr[i];

    if (x > 0) {
        // Positive number → best to convert it to 1
        // Cost = |x - 1|
        totalCost += Math.abs(x - 1);
    }
    else if (x < 0) {
        // Negative number → best to convert it to -1
        // Cost = |x + 1|
        totalCost += Math.abs(x + 1);
        negCount++; // Count number of negative numbers
    }
    else {
        // Zero → can be converted to 1 or -1
        // Cost = 1 coin
        totalCost += 1;
        zeroCount++; // Count zeros for later decision
    }
}

// Step 2: Ensure final product is 1
// If the number of -1s is odd, product is -1 → need to fix
if (negCount % 2 !== 0) {
    if (zeroCount > 0) {
        // If there was a zero, we could have made it -1 instead of 1
        // This automatically fixes the product without extra cost
        // So we do nothing here
    } else {
        // No zeros to help → must change one -1 to 1
        // Cost = 2 coins
        totalCost += 2;
    }
}

// Step 3: Output the total minimal cost
console.log(totalCost);

/*
Intuition:
----------
- We aim for all elements to be 1 or -1.
- Positive → go to 1 (cheaper than -1 for positives).
- Negative → go to -1 (cheaper than 1 for negatives).
- Zero → goes to 1 (or -1 if needed to fix product).
- If number of -1's is odd, we must flip one to 1:
  - If a zero exists, we handle it cheaply during conversion (no extra cost).
  - Otherwise, flipping costs exactly 2 coins.
*/
