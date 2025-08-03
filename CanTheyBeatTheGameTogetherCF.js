// There’s a game with n levels.
// Two players — Little X and Little Y — want to beat all n levels.

// Each of them can only complete some levels.
// But if they work together, maybe they can complete all levels.

// 🧾 Input Format
// First line: n — total number of levels (1 ≤ n ≤ 100)

// Second line:

// First number p — number of levels Little X can pass

// Followed by p distinct numbers — the actual level indices X can pass

// Third line:

// First number q — number of levels Little Y can pass

// Followed by q distinct numbers — the actual level indices Y can pass

// 🖨 Output Format
// If together they can pass all n levels → print
// "I become the guy."

// Otherwise → print
// "Oh, my keyboard!"

// 🧪 Examples Explained
// ✅ Example 1
// Input:

// 4
// 3 1 2 3
// 2 2 4
// Explanation:

// Little X can pass levels: 1, 2, 3

// Little Y can pass levels: 2, 4

// Together they can pass: 1, 2, 3, 4 → All 4 levels

// Output:


// I become the guy.


// ❌ Example 2
// Input:


// 4
// 3 1 2 3
// 2 2 3
// Explanation:

// Little X: 1, 2, 3

// Little Y: 2, 3

// Together: 1, 2, 3 → They are missing level 4

// Output:


// Oh, my keyboard!


// 🧠 How to Solve
// Combine the levels X and Y can pass into a single set

// If the set contains all levels from 1 to n, they succeed

// Else, they fail


// Uncomment if running in Node.js to read input
const prompt = require('prompt-sync')();

// Step 1: Read the total number of levels
let n = parseInt(prompt("Enter total levels: ")); // e.g., 4

// Step 2: Create a Set to store unique levels that can be passed by X and Y
let levelsPassed = new Set();

// Step 3: Loop twice (once for Little X, once for Little Y)
for (let player = 0; player < 2; player++) {
    // Read how many levels this player can pass
    let input = prompt(`Enter number of levels and levels passed by player ${player + 1}: `);
    
    // Split input into array of strings, convert to numbers
    let parts = input.trim().split(' ').map(Number);
    
    let count = parts[0];  // number of levels this player can pass
    let levels = parts.slice(1); // the actual levels
    
    // Step 4: Insert each level into the set to ensure uniqueness
    for (let i = 0; i < count; i++) {
        levelsPassed.add(levels[i]);
    }
}

// Step 5: Check if all levels from 1 to n are passed
if (levelsPassed.size === n) {
    console.log("I become the guy.");
} else {
    console.log("Oh, my keyboard!");
}

