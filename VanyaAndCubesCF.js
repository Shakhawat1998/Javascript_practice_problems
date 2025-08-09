/*
Problem: Maximum Pyramid Height with Cubes

https://codeforces.com/problemset/problem/492/A

Vanya has n cubes and wants to build a pyramid.

Pyramid structure:
- Level 1: 1 cube
- Level 2: 1 + 2 = 3 cubes
- Level 3: 1 + 2 + 3 = 6 cubes
- Level i: sum of first i natural numbers = i*(i+1)/2 cubes

Goal:
- Find the maximum height h such that the total cubes used from level 1 to h
  (which is sum of sums) is less than or equal to n.

Total cubes for pyramid height h:
- sum_{i=1 to h} (i*(i+1)/2)

Example 1:
Input: 1
Level 1 needs 1 cube, which fits.
Output: 1

Example 2:
Input: 25
Level 1: 1 cube
Level 2: 3 cubes, total so far 4
Level 3: 6 cubes, total so far 10
Level 4: 10 cubes, total so far 20
Level 5: 15 cubes, total would be 35 (exceeds 25)
So max height = 4
Output: 4
*/


const prompt = require('prompt-sync')();  // Import prompt-sync to read input

const n = Number(prompt());  // Read the number of cubes available (n)

let totalCubes = 0;  // Initialize total cubes used so far
let height = 0;      // Initialize pyramid height

while (true) {
  height++;  // Move to the next level

  // Calculate cubes needed for current level: sum of 1 to height = height*(height+1)/2
  const cubesThisLevel = (height * (height + 1)) / 2;

  // If adding this level exceeds available cubes, stop building
  if (totalCubes + cubesThisLevel > n) break;

  // Otherwise, add current level cubes to total used cubes
  totalCubes += cubesThisLevel;
}

console.log(height - 1);  // Output the maximum pyramid height that fits within n cubes

