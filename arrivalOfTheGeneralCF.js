// A general inspects soldiers lined up in a row.

// Soldiers should ideally stand in non-increasing order of height (tallest to shortest).

// But they lined up in a random order.

// The general is short-sighted and only cares about:

// The first soldier in line must have the maximum height.

// The last soldier in line must have the minimum height.

// The order of the soldiers in between does not matter, including if there are multiple soldiers with max or min heights.

// 🧾 Input
// First line: integer n — number of soldiers (2 ≤ n ≤ 100)

// Second line: n integers — heights of soldiers in the current order (each between 1 and 100)

// 🖨 Output
// Print the minimum number of seconds (moves) the colonel needs to swap adjacent soldiers so that the general will like the lineup.

// 🔄 How swaps work
// In one second, the colonel can swap any two neighboring soldiers.

// 🧪 Examples with Explanation
// Example 1
// Input:


// 4
// 33 44 11 22
// Max height = 44 (found at position 2)

// Min height = 11 (found at position 3)

// Goal: Move the tallest soldier to the front and shortest to the end

// Steps:

// Swap soldiers at positions 1 and 2 → lineup: 44 33 11 22 (1 second)

// Swap soldiers at positions 3 and 4 → lineup: 44 33 22 11 (2 seconds)

// Output:


// 2
// Example 2
// Input:


// 7
// 10 10 58 31 63 40 76
// Max height = 76 (at position 7)

// Min height = 10 (the first 10 is at position 1, the other at 2)

// But to satisfy the general:

// Max height soldier must be at position 1

// Min height soldier must be at position 7

// Moves to bring max height to front:

// Move 76 from position 7 to position 1 → requires 6 swaps

// Moves to bring min height to end:

// The leftmost minimum height soldier is at position 1, but we want a min soldier at position 7

// The rightmost minimum soldier is at position 2

// Moving min soldier at position 2 to position 7 requires 5 swaps

// Total moves = 6 + 5 - 1 (because one swap overlaps when max soldier passes min soldier)
// Final total = 10 moves

// Output:


// 10
// 🧠 Key points
// Find the first occurrence of the maximum height soldier from the left.

// Find the last occurrence of the minimum height soldier from the right.

// Number of moves to bring max to front = index of max soldier (0-based)

// Number of moves to bring min to end = (n - 1) - index of min soldier

// If the max soldier’s position is before the min soldier, total moves = sum of moves

// If max soldier’s position is after min soldier, total moves = sum of moves - 1 (because their paths overlap once)




// Uncomment the following line if running in Node.js for input
// const prompt = require('prompt-sync')();

// Step 1: Read the number of soldiers
const n = parseInt(prompt());

// Step 2: Read the array of soldiers' heights
const heights = prompt()
  .trim()
  .split(' ')
  .map(Number);

// Step 3: Find the index of the first max height soldier from the left
let maxHeight = Math.max(...heights);
let maxIndex = heights.indexOf(maxHeight); // first occurrence of max height

// Step 4: Find the index of the last min height soldier from the right
let minHeight = Math.min(...heights);
let minIndex = heights.lastIndexOf(minHeight); // last occurrence of min height

// Step 5: Calculate moves to bring max soldier to the front
// Number of swaps = maxIndex (because each swap moves max soldier one step left)
let movesForMax = maxIndex;

// Step 6: Calculate moves to bring min soldier to the end
// Number of swaps = (n - 1) - minIndex (each swap moves min soldier one step right)
let movesForMin = (n - 1) - minIndex;

// Step 7: If max soldier is ahead of min soldier, subtract one because their paths overlap
let totalMoves = movesForMax + movesForMin;
if (maxIndex > minIndex) {
  totalMoves -= 1;
}

// Step 8: Output the result
console.log(totalMoves);
