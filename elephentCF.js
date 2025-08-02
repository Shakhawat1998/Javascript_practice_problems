// An elephant wants to go from position 0 to position x on a number line.
// In one step, the elephant can move 1, 2, 3, 4, or 5 units forward.

// 👉 Task:
// Find the minimum number of steps the elephant needs to reach position x.

// 🟦 Input:
// One integer x (1 ≤ x ≤ 1,000,000)
// — the position of the friend’s house.

// 🟩 Output:
// Print one integer — the minimum number of steps to reach position x.


// //input
// 5
// //output
// 1

// Explanation:
// The elephant takes 1 step of 5 units to reach 5.

// //input 
// 12
// //output
// 3

// Explanation:
// The elephant can take steps like:

// 5 + 5 + 2 = 12

// or 4 + 4 + 4 = 12
// Either way, 3 steps are enough. Fewer than 3 is not possible.




// The elephant wants to cover distance x using the fewest number of steps, where each step can be at most 5 units.
// To do that, divide x by 5 and round up — because partial steps still count as a full step.

// Minimum steps = Math.ceil(x / 5)


const prompt = require('prompt-sync')();

// Read the input value x
const x = parseInt(prompt("Enter the friend's position (x): "));

// Minimum steps = ceiling of x divided by 5
const steps = Math.ceil(x / 5);

// Output the result
console.log(steps);
