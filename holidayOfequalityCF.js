// 🎉 Berland Holiday of Equality
//
// Problem:
// In Berland, there are `n` citizens. Each citizen has some amount of wealth (in burles).
// The king wants to make all citizens equally wealthy by **giving** money only (he can't take any).
//
// Task:
// As the royal treasurer, calculate the **minimum total burles** needed
// to make everyone's wealth equal.
//
// Input:
// - First line: integer `n` (1 ≤ n ≤ 100) → number of citizens
// - Second line: `n` integers a1, a2, ..., an (0 ≤ ai ≤ 1e6) → current wealth of each citizen
//
// Output:
// - A single integer: minimum burles to spend from treasury to equalize wealth
//
// 🔍 Approach:
// - Find the **maximum** wealth value among all citizens.
// - For each citizen, calculate how much money to give to reach that max.
// - Sum up all these values → that's your answer.
//
// 🧪 Examples:
//
// Input:
// 5
// 0 1 2 3 4
// Output:
// 10
// Explanation:
// Target = 4
// Give: 4+3+2+1+0 = 10
//
// Input:
// 5
// 1 1 0 1 1
// Output:
// 1
// Explanation:
// Target = 1
// Only 1 person needs 1 burle.
//
// Input:
// 3
// 1 3 1
// Output:
// 4
// Explanation:
// Target = 3
// Give 2 to first, 0 to second, 2 to third → 2+0+2 = 4
//
// Input:
// 1
// 12
// Output:
// 0
// Explanation:
// Only one citizen, no need to give anything.


// 🎉 Berland Holiday of Equality
// Goal: Calculate the minimum burles needed to make all citizens equally wealthy

const prompt = require('prompt-sync')();

// Read number of citizens
const n = parseInt(prompt("Enter number of citizens: "));

// Read the wealth of each citizen
const a = prompt("Enter wealth values (space-separated): ")
  .split(' ')
  .map(Number);

// Step 1: Find the maximum wealth
const maxWealth = Math.max(...a);

// Step 2: Calculate total burles to give
let totalBurles = 0;
for (let i = 0; i < n; i++) {
  totalBurles += maxWealth - a[i]; // Give each citizen enough to reach max
}

// Output the result
console.log(totalBurles);
