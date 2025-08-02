// // A soldier wants to buy w bananas.

// // The 1st banana costs k dollars.

// // The 2nd banana costs 2 × k,

// // The 3rd banana costs 3 × k,

// // ... and so on.
// // (The i-th banana costs i × k dollars)

// // The soldier has n dollars.

// // 👉 Task:
// // Calculate how many extra dollars he needs to borrow to buy all w bananas.
// // If he has enough money, print 0.

// // 🟦 Input:
// // Three integers: k n w

// // k: Cost of the first banana

// // n: Amount of money the soldier has

// // w: Number of bananas he wants

// // (Constraints: 1 ≤ k, w ≤ 1000, 0 ≤ n ≤ 10⁹)

// // 🟩 Output:
// // One integer — dollars the soldier needs to borrow.
// // Print 0 if no borrowing is needed.


// //input
// 3 17 4
// //output
// 13


// Explanation:
// 1st banana: 3

// 2nd banana: 6

// 3rd banana: 9

// 4th banana: 12
// → Total cost = 3 + 6 + 9 + 12 = 30

// He has 17, so needs to borrow 30 - 17 = 13 dollars.



const prompt = require('prompt-sync')();

// Read input values: cost of first banana (k), initial money (n), number of bananas (w)
const [k, n, w] = prompt("Enter k, n, w separated by space: ").split(" ").map(Number);

// Calculate total cost using the formula: k * (1 + 2 + ... + w) = k * w * (w + 1) / 2
const totalCost = k * w * (w + 1) / 2;

// Calculate how much the soldier needs to borrow
// If he has enough money, borrowAmount will be negative or zero → use Math.max to return 0 in that case
const borrowAmount = Math.max(0, totalCost - n);

// Output the result
console.log(borrowAmount);
