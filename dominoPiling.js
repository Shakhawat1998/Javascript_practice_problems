// You are given a board with M rows and N columns.

// You have unlimited 2×1 domino pieces (each covers exactly 2 squares), and you can place them horizontally or vertically.

// Your task:
// Find the maximum number of dominoes you can place on the board so that:

// Each domino fully covers 2 squares,

// No dominoes overlap,

// All dominoes stay inside the board.

// 📥 Input:
// A single line with two integers M and N — the size of the board.
// (1 ≤ M ≤ N ≤ 16)

// 📤 Output:
// Print the maximum number of dominoes that can fit on the board.

// ✅ Example 1:
// Input:

// Copy code
// 2 4
// Explanation:

// The board has 2×4 = 8 squares.

// Each domino covers 2 squares.

// So, maximum number of dominoes = 8 / 2 = 4

// Output:

// Copy code
// 4
// ✅ Example 2:
// Input:

// Copy code
// 3 3
// Explanation:

// The board has 3×3 = 9 squares.

// You can fit 4 dominoes (8 squares), and 1 square will be left out.

// Output:

// Copy code
// 4
// 🧠 Tip:
// Just divide the total number of squares by 2 (use integer division):



const prompt = require('prompt-sync')();

// Input: m and n
const [m, n] = prompt("Enter m and n: ").split(' ').map(Number);

// Compute and print the result
console.log(Math.floor((m * n) / 2));
