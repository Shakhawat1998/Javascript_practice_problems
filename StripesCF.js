/*
Problem: Determine the last painted stripe color on an 8x8 grid.

- The grid is 8x8.
- Some rows are painted entirely red (R).
- Some columns are painted entirely blue (B).
- Stripes are painted one after another, repainting all cells they cover.
- The final grid shows the result after all stripes are painted.
- We need to find which color stripe was painted last.

Key details:
- Red stripes = full horizontal rows of 'R'.
- Blue stripes = full vertical columns of 'B'.
- The final grid is formed by painting some rows red and some columns blue in some order.
- At least one stripe is painted.
- Output:
  - 'R' if the last painted stripe was red.
  - 'B' if the last painted stripe was blue.

-----------------------------------------------------------
Examples:

Input:
4

....B...
....B...
....B...
RRRRRRRR
....B...
....B...
....B...
....B...

Output:
R
Explanation:
- There is a full red row (4th row).
- Blue columns are painted but since red row is fully red, and last painted stripe covers that row, answer is R.

-----------------------------------------------------------
Input:
RRRRRRRB
B......B
B......B
B......B
B......B
B......B
B......B
RRRRRRRB

Output:
B
Explanation:
- Some red rows and blue columns.
- The last painted stripe was blue (because the last blue column is visible fully).

-----------------------------------------------------------
Input:
RRRRRRBB
.B.B..BB
RRRRRRBB
.B.B..BB
.B.B..BB
RRRRRRBB
.B.B..BB
.B.B..BB

Output:
B

-----------------------------------------------------------
Input:
........
........
........
RRRRRRRR
........
........
........
........

Output:
R
*/




// Import prompt-sync for input reading
const prompt = require('prompt-sync')();

// Read the number of test cases
const t = parseInt(prompt());

for (let i = 0; i < t; i++) {
    // Flag to track if any full red row found
    let red = false;

    // For 8 rows
    for (let i = 0; i < 8; i++) {
        // Read the current row string
        const s = prompt();

        // Check if the entire row is red (all 'R')
        if (s === "RRRRRRRR") {
            red = true;  // Set flag true if full red row found
        }
    }

    // If any full red row was found, last painted stripe is red ('R')
    // Otherwise, it's blue ('B')
    console.log(red ? "R" : "B");
}
