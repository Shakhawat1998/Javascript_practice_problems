/*
PROBLEM (Simplified):

Ms. Manana wants to buy exactly n puzzles for her n students from m available puzzles.

Each puzzle has a number of pieces: f1, f2, ..., fm.

She wants to choose n puzzles so that the difference between the largest and smallest puzzle piece counts is as small as possible.

Formally:
- Let A = number of pieces in the largest chosen puzzle.
- Let B = number of pieces in the smallest chosen puzzle.
Find the minimum possible value of A - B.

------------------------------------------------------
INPUT:
- n (number of students / puzzles to buy)
- m (total puzzles available)
- m integers representing puzzle pieces count

------------------------------------------------------
EXAMPLE:

Input:
4 6
10 12 10 7 5 22

Explanation:
- Need to pick 4 puzzles out of 6
- Puzzle piece counts: [10, 12, 10, 7, 5, 22]

Possible choices and their max-min differences:
- Choose puzzles with pieces [10, 12, 10, 7]
  max = 12, min = 7, difference = 5
- Choose puzzles [10, 10, 7, 5]
  max = 10, min = 5, difference = 5
- Choose puzzles [7, 5, 22, 10]
  max = 22, min = 5, difference = 17 (worse)

Minimum difference is 5.

------------------------------------------------------
OUTPUT:
Print a single integer — the minimum difference possible (5 in the example).
*/



const prompt = require("prompt-sync")();

// Read the two integers n (puzzles to choose) and m (total puzzles)
const [n, m] = prompt().split(" ").map(Number);

// Read the array of puzzle piece counts
const puzzles = prompt().split(" ").map(Number);

// Sort puzzles ascendingly to easily find minimal difference segments
puzzles.sort((a, b) => a - b);

let minDiff = Infinity; // Initialize minimum difference with a large number

// Iterate through all consecutive segments of length n
for (let i = 0; i <= m - n; i++) {
    // Calculate difference between max and min in this segment
    let diff = puzzles[i + n - 1] - puzzles[i];

    // Update minDiff if this difference is smaller
    if (diff < minDiff) {
        minDiff = diff;
    }
}

// Print the least possible difference
console.log(minDiff);

/*
Example:
Input:
4 6
10 12 10 7 5 22

Sorted puzzles: [5, 7, 10, 10, 12, 22]

Check segments of length 4:
- [5, 7, 10, 10]: diff = 10 - 5 = 5
- [7, 10, 10, 12]: diff = 12 - 7 = 5
- [10, 10, 12, 22]: diff = 22 - 10 = 12

Minimum difference = 5
*/
