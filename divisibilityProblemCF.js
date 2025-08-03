// You are given two positive integers a and b.
// Your goal is to make a divisible by b by increasing a by 1 as few times as possible.

// You can add 1 to a repeatedly (each addition is called a "move").

// Sometimes a is already divisible by b, so you don’t need to make any moves.

// You have to answer this for t test cases independently.

// 🧾 Input
// First line: t — number of test cases (1 ≤ t ≤ 10,000)

// Then t lines follow, each with two integers a and b (1 ≤ a, b ≤ 10^9)

// 🖨 Output
// For each test case, print the minimum number of moves to make a divisible by b.

// 🧪 Examples Explained
// Example 1
// Input:

// 10 4
// a = 10, b = 4

// 10 % 4 = 2 (remainder when dividing 10 by 4)

// To make a divisible by b, add 4 - 2 = 2 moves.

// New a after 2 moves = 12, which is divisible by 4.

// Output:

// 2
// Example 2
// Input:


// 13 9
// a = 13, b = 9

// 13 % 9 = 4

// Moves needed = 9 - 4 = 5

// After 5 moves, a = 18 divisible by 9.

// Output:


// 5
// Example 3
// Input:


// 100 13
// 100 % 13 = 9

// Moves = 13 - 9 = 4

// After 4 moves, a = 104 divisible by 13.

// Output:


// 4
// Example 4
// Input:


// 123 456
// 123 % 456 = 123 (since 123 < 456)

// Moves = 456 - 123 = 333

// After 333 moves, a = 456 divisible by 456.

// Output:

// 333
// Example 5
// Input:


// 92 46
// 92 % 46 = 0

// Already divisible, so moves = 0

// Output:

// 0

// Uncomment this if running in Node.js to read input from console
 const prompt = require('prompt-sync')();

// Step 1: Read number of test cases
let t = parseInt(prompt()); // e.g., 5

// Step 2: Loop through each test case
while (t--) {
    // Step 3: Read a and b for current test case
    let input = prompt();
    let [a, b] = input.trim().split(' ').map(Number);

    // Step 4: Check if 'a' is already divisible by 'b'
    if (a % b === 0) {
        // No moves needed
        console.log(0);
    } else {
        // Step 5: Calculate the minimum moves needed:
        // ((Math.floor(a / b) + 1) * b) - a
        let moves = ((Math.floor(a / b) + 1) * b) - a;
        console.log(moves);
    }
}


// a % b === 0
// Checks if a is divisible by b.

// If yes, moves = 0 because no increment needed.

// Otherwise:

// Calculate the next multiple of b after a:
// ((Math.floor(a / b) + 1) * b)

// Moves needed = that multiple minus current a.


// Example to clarify
// Let a = 13, b = 9

// q = Math.floor(13 / 9) = 1

// Next multiple after 13 is (1 + 1) * 9 = 18

// Moves needed = 18 - 13 = 5