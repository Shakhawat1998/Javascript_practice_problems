// Polycarp wants to buy at least one shovel.
// Each shovel costs k burles.

// He can pay using:

// Unlimited coins of 10 burles

// One coin of r burles (where 1 ≤ r ≤ 9)

// He wants to buy as few shovels as possible so that:

// The total price can be paid exactly,

// Using just 10-burle coins or 10-burle coins + the one r-burle coin.

// ✅ Your Task:
// Find the minimum number of shovels he needs to buy so that the total price:

// Ends in 0 (can be paid with only 10-burle coins),
// OR

// Ends in r (can be paid using the r-burle coin + the rest in 10s)

// 🧠 Logic:
// For i = 1 to 10:

// Calculate total = i * k

// If total % 10 == 0 or total % 10 == r, print i and stop

// 🔍 Examples Explained:
// Example 1:
// Input: 117 3
// Try i = 1 to 9:

// 117, 234, 351, 468, 585, 702, 819, 936, 1053

// 1053 ends in 3 → matches r = 3
// ✅ Answer: 9

// Example 2:
// Input: 237 7
// Try i = 1:

// 237 ends in 7 → matches r = 7
// ✅ Answer: 1

// Example 3:
// Input: 15 2
// Try i = 1: 15 → ends in 5
// Try i = 2: 30 → ends in 0
// ✅ Answer: 2




const prompt = require('prompt-sync')();

// Input: price of one shovel (k) and r-burle coin value (r)
let [k, r] = prompt("Enter k and r: ").split(' ').map(Number);

// Try buying 1 to 10 shovels
for (let i = 1; i <= 10; i++) {
    let totalCost = i * k; // Total cost for i shovels

    // Check if the last digit of total cost is 0 or equal to r
    if (totalCost % 10 === 0 || totalCost % 10 === r) {
        console.log(i); // Minimum number of shovels needed
        break;
    }
}

