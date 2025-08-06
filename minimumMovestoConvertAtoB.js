// You have two integers, a and b.

// You want to change a to b by performing moves.
// In one move, you can:

// Add any integer k between 1 and 10 (inclusive) to a, or

// Subtract any integer k between 1 and 10 (inclusive) from a.

// You can use different values of k in each move.

// ✅ Your Task:
// Find the minimum number of moves needed to make a equal to b.

// 🧠 How to solve:
// Calculate the absolute difference:

// diff
// = abs(a-b)
// diff=∣b−a∣
// Each move can change a by up to 10 units.
// So, the minimum moves =ceil(diff/10)


// (Divide difference by 10 and round up)

// 🔍 Examples Explained:
// Example 1:

// Input: 5 5
// Difference = |5-5| = 0
// Moves needed = 0
// Example 2:

// Input: 13 42
// Difference = |42-13| = 29
// Moves = ceil(29/10) = 3 moves

// Example moves:
// 13 → 23 (+10)
// 23 → 32 (+9)
// 32 → 42 (+10)
// Example 3:

// Input: 18 4
// Difference = |4-18| = 14
// Moves = ceil(14/10) = 2 moves

// Example moves:
// 18 → 10 (-8)
// 10 → 4 (-6)
// Example 4:

// Input: 1337 420
// Difference = |420-1337| = 917
// Moves = ceil(917/10) = 92 moves
// Example 5:

// Input: 123456789 1000000000
// Difference = |1000000000 - 123456789| = 876543211
// Moves = ceil(876543211/10) = 87654322 moves
// Example 6:

// Input: 100500 9000
// Difference = |9000 - 100500| = 91500
// Moves = ceil(91500/10) = 9150 moves



const prompt = require('prompt-sync')();

// Read number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
    // Read the two integers a and b for each test case
    const [a, b] = prompt("Enter a and b: ").split(' ').map(Number);

    // Calculate the absolute difference between a and b
    const diff = Math.abs(b - a);

    // Calculate the minimum number of moves:
    // Each move can change a by up to 10,
    // so divide diff by 10 and round up
    const moves = Math.ceil(diff / 10);

    // Output the result for this test case
    console.log(moves);
}
