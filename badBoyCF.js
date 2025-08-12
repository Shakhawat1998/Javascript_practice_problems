//https://codeforces.com/problemset/problem/1537/B


/*
PROBLEM SIMPLIFIED:
-------------------
Anton is standing in a rectangular room with 'n' rows and 'm' columns.
His position is given by (i, j).

Riley throws EXACTLY two yo-yos somewhere in the room (could be in the same cell).
Anton must:
  1. Start from his position (i, j),
  2. Visit both yo-yos (order can be any),
  3. Return back to his starting position.

Anton moves to adjacent cells (up, down, left, right), 1 step per move.

We need to find two positions for the yo-yos such that the total distance Anton travels is **maximum possible**.

The output for each test case is:
  (x1, y1) -> position of first yo-yo
  (x2, y2) -> position of second yo-yo

---------------------------------
Key Insight:
- The longest possible distance is achieved when we put the yo-yos at the two opposite corners of the room.
- This forces Anton to travel between farthest points.

We just need to check which two opposite corners give the longest round trip from (i, j).
Corners are:
  (1,1), (1,m), (n,1), (n,m)
We pick the pair that maximizes the total path length.

---------------------------------
EXAMPLES EXPLAINED:
---------------------------------

Example 1:
Input:
n = 2, m = 3, i = 1, j = 1
Room:
(1,1) (1,2) (1,3)
(2,1) (2,2) (2,3)
Anton starts at (1,1)
Best choice: (1,2) and (2,3)
Max path length found by calculation
Output: 1 2 2 3

---------------------------------

Example 2:
n = 4, m = 4, i = 1, j = 2
Room: 4x4 grid
Best choice: (4,1) and (4,4)
Output: 4 1 4 4

---------------------------------

Example 3:
n = 3, m = 5, i = 2, j = 2
Best choice: (3,1) and (1,5)
Output: 3 1 1 5

---------------------------------

Example 4:
n = 5, m = 1, i = 2, j = 1
Only one column
Best choice: (5,1) and (1,1)
Output: 5 1 1 1

---------------------------------

Example 5:
n = 3, m = 1, i = 3, j = 1
Best choice: (1,1) and (2,1)
Output: 1 1 2 1

---------------------------------

Example 6:
n = 1, m = 1, i = 1, j = 1
Only one cell
Both yo-yos in same cell
Output: 1 1 1 1

---------------------------------

Example 7:
n = 1e9, m = 1e9, i = 1e9, j = 50
Huge room
Best choice: (50,1) and (1, 1e9)
Output: 50 1 1 1000000000
*/



// Import prompt-sync for local input (remove if using online judge like Codeforces)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
for (let i= 0; i < t; i++) {

    // Read n (rows), m (columns), i (Anton’s row), j (Anton’s column)
    let [n, m, i, j] = prompt().split(" ").map(Number);

    // Predefine all four corners of the grid
    let corners = [
        [1, 1],       // top-left corner
        [1, m],       // top-right corner
        [n, 1],       // bottom-left corner
        [n, m]        // bottom-right corner
    ];

    // Function to calculate Manhattan distance between two points
    // Manhattan distance = |x1 - x2| + |y1 - y2|
    function dist(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    // We will try every possible pair of corners
    // and find the one that gives the maximum total path length
    let bestPair = [1, 1, 1, 1]; // default
    let maxDist = -1;

    for (let c1 of corners) {
        for (let c2 of corners) {

            // Distance calculation:
            // Anton starts at (i, j), visits yo-yo1 at c1, then yo-yo2 at c2, then returns to start
            // Total = start → yo-yo1 + yo-yo1 → yo-yo2 + yo-yo2 → start
            let totalDist =
                dist(i, j, c1[0], c1[1]) +
                dist(c1[0], c1[1], c2[0], c2[1]) +
                dist(c2[0], c2[1], i, j);

            // If this path is longer than the best so far, store it
            if (totalDist > maxDist) {
                maxDist = totalDist;
                bestPair = [c1[0], c1[1], c2[0], c2[1]];
            }
        }
    }

    // Output the best coordinates found
    console.log(bestPair.join(" "));
}

/*
Explanation of logic:
---------------------
- The farthest points in a rectangle are always at corners.
- We check all combinations of two corners (including same corner twice).
- For each combination, calculate the total round-trip distance starting from Anton's position.
- Pick the combination that gives the maximum distance.
- Output those coordinates.
*/
