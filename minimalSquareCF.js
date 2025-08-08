/*
Problem:
---------
You have TWO identical rectangles, each of size a × b.
You need to place both of them inside a square plot of land.
Rules:
  - The sides of the rectangles must be parallel to the sides of the square.
  - You can rotate the rectangles (swap a and b for either or both).
  - Rectangles can touch each other or the edges of the square, but cannot overlap.
Goal:
  Find the smallest possible square land area that can fit both rectangles.

Input:
------
t  → number of test cases (1 ≤ t ≤ 10000)
For each test case:
    a, b → dimensions of the rectangles (1 ≤ a, b ≤ 100)

Output:
-------
For each test case:
    Output the minimum square area required.

Idea:
-----
To fit two rectangles:
    - They can be placed SIDE BY SIDE or STACKED.
    - The required square side length will be the maximum of:
         * The larger rectangle side
         * The total combined width/height when placed together
    - Try both orientations (rotated or not) and pick the minimum.

--------------------------------------------------
Example Walkthrough:
--------------------------------------------------

Example 1:
Input:  a = 3, b = 2
Option 1 (side-by-side horizontally, no rotation):
    Width = 3 + 3 = 6
    Height = 2
    → Square side must be at least max(6, 2) = 6 → Area = 36 (not minimal)
Option 2 (rotate both to 2×3, stack vertically):
    Width = 2
    Height = 3 + 3 = 6
    → Square side = max(2, 6) = 6 → Area = 36 (same as above)
Better Option:
    Place them without rotation but touching along the longer side:
    Required square side = max(max(a, b) * 2, min(a, b) * 2) → Actually gives 4
    → Minimum area = 4 × 4 = 16
Output: 16

Example 2:
Input:  a = 4, b = 2
Minimal placement:
    Square side = max(4, 2×2 = 4) = 4
    Area = 16
Output: 16

Example 3:
Input:  a = 1, b = 1
Two tiny squares of size 1×1.
    Placing side-by-side or stacked: Square side = max(1, 1×2 = 2) = 2
    Area = 4
Output: 4

Example 4:
Input:  a = 3, b = 1
    Side-by-side horizontally:
        Width = 6, Height = 1 → Square side = 6
        Area = 36 (too big)
    Better: Rotate both to 1×3 and place side-by-side vertically:
        Width = 3, Height = 2
        Square side = 3 → Area = 9
Output: 9

Example 5:
Input:  a = 4, b = 7
    Best: Put them side-by-side along the shorter side after rotation.
    Required square side = max(7, 4×2 = 8) → 8
    Area = 64
Output: 64

Example 6:
Input:  a = 1, b = 3
    Required square side = max(3, 1×2 = 2) = 3
    Area = 9
Output: 9

Example 7:
Input:  a = 7, b = 4
    Same as Example 5 (just swapped a and b)
    Area = 64
Output: 64

Example 8:
Input:  a = 100, b = 100
    Two giant squares side-by-side:
    Square side = max(100, 100×2 = 200) = 200
    Area = 200×200 = 40000
Output: 40000
*/


const prompt = require("prompt-sync")();

// Number of test cases
let t = Number(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
    let a = Number(prompt("Enter a: "));
    let b = Number(prompt("Enter b: "));

    /*
      Logic:
      --------
      Minimal square side length = max(max(a, b), 2 * min(a, b))
      - max(a, b): ensures the square fits the larger dimension of a rectangle.
      - 2 * min(a, b): ensures space for two rectangles side-by-side along the shorter side.
    */
    let squareSide = Math.max(Math.max(a, b), 2 * Math.min(a, b));
    let area = squareSide * squareSide;

    console.log("Minimum square area:", area);
}

/*
Example run:
------------
Enter number of test cases: 3
Enter a: 3
Enter b: 2
Minimum square area: 16
Enter a: 4
Enter b: 2
Minimum square area: 16
Enter a: 1
Enter b: 1
Minimum square area: 4
*/
