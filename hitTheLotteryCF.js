// Allen wants to withdraw n dollars using the fewest number of bills.
// He can use the following bill denominations:

// 100

// 20

// 10

// 5

// 1

// Your job is to calculate the minimum number of bills he needs to get exactly n dollars.

// ✅ How to Solve:
// We use greedy strategy — always pick the largest possible bill first, then move to smaller ones.

// 🧪 Examples Explained:
// Example 1:
// Input:


// 125
// Explanation:

// 1 bill of 100 → 100

// 1 bill of 20 → 120

// 1 bill of 5 → 125
// ✅ Total: 3 bills

// Output:


// 3
// Example 2:
// Input:


// 43
// Explanation:

// 2 bills of 20 → 40

// 3 bills of 1 → 43
// ✅ Total: 5 bills

// Output:


// 5
// Example 3:
// Input:


// 1000000000
// Explanation:

// 100 dollar bills only → 1000000000 ÷ 100 = 10,000,000
// ✅ Total: 10,000,000 bills

// Output:


// 10000000
// 🧠 Key Insight:
// Use as many 100s as possible, then 20s, then 10s, then 5s, then 1s — always reducing the remaining amount.


const prompt = require('prompt-sync')(); // Import the prompt-sync module for reading input in Node.js

let n = parseInt(prompt()); // Read the input amount as a string and convert it to an integer

let denominations = [100, 20, 10, 5, 1]; // List of available bill denominations in descending order

let billCount = 0; // Variable to keep track of the total number of bills used

// Loop through each denomination
for (let i = 0; i < denominations.length; i++) {
    let use = Math.floor(n / denominations[i]); // Calculate how many bills of this denomination can be used
    billCount += use; // Add that number to the total bill count
    n -= use * denominations[i]; // Subtract the used amount from the total money left
}

console.log(billCount); // Output the total minimum number of bills needed
