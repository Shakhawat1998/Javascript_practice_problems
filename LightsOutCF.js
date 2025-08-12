/*
PROBLEM SIMPLIFIED:
-------------------
We have a 3×3 grid of lights.
- Initially, all lights are ON (represented by "1").
- Pressing a light toggles:
    - itself
    - its UP, DOWN, LEFT, and RIGHT neighbors (if they exist).
- Toggling means:
    - If light is ON → turn OFF
    - If light is OFF → turn ON

You are given a 3×3 grid of integers.
- Each number tells how many times that light was pressed.

Your task:
- Determine the final ON/OFF state of each light after all presses.

RULE:
- Only the parity of presses matters.
    - Even presses → No change to initial ON state.
    - Odd presses → Toggle the initial ON state.

------------------------------------------------
EXAMPLES & EXPLANATIONS:
------------------------------------------------

Example 1:
----------
Input:
1 0 0
0 0 0
0 0 1

Step-by-step:
Initial grid (all ON):
1 1 1
1 1 1
1 1 1

Press (0,0) once:
- Toggles itself, right neighbor (0,1), and bottom neighbor (1,0)
  Result:
  0 0 1
  0 1 1
  1 1 1

Press (2,2) once:
- Toggles itself, left neighbor (2,1), and top neighbor (1,2)
  Result:
  0 0 1
  0 1 0
  1 0 0

Final Output:
001
010
100


Example 2:
----------
Input:
1 0 1
8 8 8
2 0 3

Observation:
- Any even number of presses = no net effect (ON stays ON).
- Odd number of presses = toggle.

Only cells with odd presses affect final state:
(0,0), (0,2), (2,2) are odd presses.

Simulate toggles:
Initial:
1 1 1
1 1 1
1 1 1

Press (0,0):
Toggles (0,0), (0,1), (1,0)

Press (0,2):
Toggles (0,2), (0,1), (1,2)

Press (2,2):
Toggles (2,2), (2,1), (1,2)

Final result:
0 1 0
0 1 1
1 0 0

Output:
010
011
100
*/



// Import prompt-sync for synchronous input in Node.js (local testing)
const prompt = require("prompt-sync")();

// Create an empty array to hold the 3x3 press-count grid
let grid = [];
// Read 3 lines from input; each line has 3 integers (press counts)
for (let i = 0; i < 3; i++) {
    // prompt() reads a line like "1 0 0"; split into strings and map to numbers
    grid.push(prompt().split(" ").map(Number));
}

// Initialize the lights' state: 3x3 array, all lights ON (1)
let state = Array.from({ length: 3 }, () => Array(3).fill(1));

// Directions to toggle when a cell is pressed: itself + up/down/left/right
let dirs = [
    [0, 0],    // itself
    [-1, 0],   // up
    [1, 0],    // down
    [0, -1],   // left
    [0, 1]     // right
];

// Iterate over each cell (row r, column c) of the 3x3 grid
for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
        // If the press count at (r,c) is odd, we should toggle neighbors
        if (grid[r][c] % 2 !== 0) {
            // For each direction (dr,dc) from dirs
            for (let [dr, dc] of dirs) {
                // Compute neighbour coordinates
                let nr = r + dr;
                let nc = c + dc;
                // Ensure neighbour is inside the 3x3 bounds
                if (nr >= 0 && nr < 3 && nc >= 0 && nc < 3) {
                    // Toggle the light: 1->0 or 0->1 using XOR
                    state[nr][nc] ^= 1;
                }
            }
        }
    }
}

// Print final state row by row with no spaces (e.g., "001")
for (let r = 0; r < 3; r++) {
    console.log(state[r].join(""));
}



// Step-by-step execution for Example 1
// Input (three lines you type when prompted):


// 1 0 0
// 0 0 0
// 0 0 1
// Interpretation of input as grid[row][col] (press counts):


// grid =
// [ [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 1] ]
// Important note: The code tests grid[r][c] % 2 !== 0 — only odd press counts cause toggles. Here the odd cells are (0,0) and (2,2).

// Step 0 — initial lights state (all ON)

// state =
// 1 1 1
// 1 1 1
// 1 1 1
// Process cell (0,0) — grid[0][0] = 1 (odd) ⇒ toggle:
// Neighbors toggled: (0,0) (itself), (1,0) (down), (0,1) (right).

// Toggle (0,0): 1 → 0

// Toggle (1,0): 1 → 0

// Toggle (0,1): 1 → 0

// State after processing (0,0):


// state =
// 0 0 1
// 0 1 1
// 1 1 1
// (All other grid cells with even presses cause no toggles, so we skip them.)

// Process cell (2,2) — grid[2][2] = 1 (odd) ⇒ toggle:
// Neighbors toggled: (2,2) (itself), (1,2) (up), (2,1) (left).

// Toggle (2,2): 1 → 0

// Toggle (1,2): 1 → 0

// Toggle (2,1): 1 → 0

// Final state after processing (2,2):


// state =
// 0 0 1
// 0 1 0
// 1 0 0

// Printed output (each console.log prints one row):

// 001
// 010
// 100