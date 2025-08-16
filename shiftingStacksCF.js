// // Problem: Shifting Stacks

// /*
// You have `n` stacks of blocks.
// The i-th stack has `h[i]` blocks (height = number of blocks).

// You can make a move:
//     - Take 1 block from stack i (if possible)
//     - Put it on stack i+1

// Goal:
//     Can you rearrange blocks so that heights become STRICTLY increasing?
//     (h[1] < h[2] < h[3] < ... < h[n])

// Constraints:
//     1 ≤ t ≤ 10^4   // number of test cases
//     1 ≤ n ≤ 100
//     0 ≤ h[i] ≤ 10^9
//     Sum of all n across all test cases ≤ 10^4

// Output:
//     YES → If it's possible to make heights strictly increasing
//     NO  → If not possible

// Note:
//     Stacks do not disappear if they reach height 0
// */


// // Example 1:
// n = 2
// h = [1, 2]
// /*
// Already strictly increasing: 1 < 2
// No moves needed.
// Output: YES
// */


// // Example 2:
// n = 2
// h = [1, 0]
// /*
// We can move 1 block from stack 1 → stack 2:
// Now h = [0, 1]
// 0 < 1 → strictly increasing
// Output: YES
// */


// // Example 3:
// n = 3
// h = [4, 4, 4]
// /*
// Move 1 from stack 1 → stack 2: [3, 5, 4]
// Move 1 from stack 2 → stack 3: [3, 4, 5]
// 3 < 4 < 5 → strictly increasing
// Output: YES
// */


// // Example 4:
// n = 2
// h = [0, 0]
// /*
// No blocks to move.
// Sequence: 0 0 → not strictly increasing (0 is not < 0)
// Output: NO
// */


// // Example 5:
// n = 3
// h = [0, 1, 0]
// /*
// Move 1 from stack 2 → stack 3: [0, 0, 1]
// 0 < 0? No → still not strictly increasing.
// No other possible moves.
// Output: NO
// */


// // Example 6:
// n = 4
// h = [1000000000, 1000000000, 1000000000, 1000000000]
// /*
// We have a LOT of blocks to move:
// We can redistribute so that each stack height increases by 1 from left to right.
// Possible to make strictly increasing sequence.
// Output: YES
// */



// Require prompt-sync to take input from console
const prompt = require("prompt-sync")({ sigint: true });

// Read number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

// Loop through each test case
for (let caseIndex = 0; caseIndex < t; caseIndex++) {

    // Read number of stacks
    const n = parseInt(prompt("Enter number of stacks: "));

    // Read heights as an array of integers
    const h = prompt("Enter stack heights: ")
                .split(" ")
                .map(Number);

    // Flag to check if possible
    let possible = true;

    // Variable to store extra blocks that can be passed forward
    let extra = 0;

    // Loop through each stack
    for (let i = 0; i < n; i++) {

        // Add the current stack's height to extra
        extra += h[i];

        // Minimum required height for strictly increasing
        let minRequired = i;

        // If we don't have enough blocks to make height >= minRequired
        if (extra < minRequired) {
            possible = false;
            break; // No need to check further
        }

        // Use up blocks needed for this stack
        extra -= minRequired;
    }

    // Print result
    console.log(possible ? "YES" : "NO");
}
