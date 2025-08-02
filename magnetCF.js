// // Mike arranges magnets in a row. Each magnet has two poles:

// // "01" means plus-minus orientation

// // "10" means minus-plus orientation

// // When a magnet is placed next to the previous one:

// // If it has the same orientation as the previous magnet, it sticks together, forming the same group.

// // If it has a different orientation, it repels and starts a new group.

// // Task:
// // Given the orientations of n magnets placed one after another, determine how many groups of magnets are formed.

// // Input:
// // First line: integer n — number of magnets (1 ≤ n ≤ 100,000)

// // Next n lines: each line is "01" or "10" ORIENTATION of each magnet in order.

// // Output:
// // Print one integer — the number of groups formed.


// Input:
// 6
// 10
// 10
// 10
// 01
// 10
// 10

// Output:
// 3

// Explanation:

// Magnets 1, 2, 3: all "10" → same group (Group 1)

// Magnet 4: "01" different → new group (Group 2)

// Magnets 5, 6: "10" same → another new group (Group 3)

// Total groups = 3


// Input:
// 4
// 01
// 01
// 10
// 10

// Output:
// 2


// Explanation:

// Magnets 1, 2: "01" → Group 1

// Magnets 3, 4: "10" → Group 2

// Total groups = 2


const prompt = require('prompt-sync')();

let n = parseInt(prompt());        // Number of magnets
let x = prompt();                  // Orientation of the first magnet
let grp = 1;                      // Start with 1 group

for (let i = 1; i < n; i++) {
    let y = prompt();             // Orientation of the current magnet
    
    // If current magnet orientation differs from previous,
    // it forms a new group
    if (y !== x) {
        grp++;
    }
    x = y;  // Update previous orientation
}

console.log(grp);                 // Output the total number of groups

// Explanation:
// Read the number of magnets.

// Initialize group count to 1 (at least one group exists).

// For each magnet from the second onwards:

// If its orientation differs from the previous magnet, increment group count.

// Print the total groups after processing all magnets.