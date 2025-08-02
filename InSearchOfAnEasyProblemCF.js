// // You're given opinions from n people about a problem.
// // Each person says either:

// // 0 → the problem is easy

// // 1 → the problem is hard

// // If anyone says the problem is hard (1), then it's considered HARD.
// // If everyone says it's easy (0), then it's considered EASY.

// // 🔹Input:
// // First line: an integer n (1 ≤ n ≤ 100) — number of people.

// // Second line: n space-separated integers (only 0 or 1) — opinions.

// // 🔹Output:
// // Print:

// // "HARD" → if at least one person says it's hard

// // "EASY" → if everyone says it's easy



// //input 
// 3
// 0 0 1

// //output 
// HARD 

// //input 
// 1
// 0

// //output
// EASY

const prompt = require('prompt-sync')(); 


// Get input
let n = parseInt(prompt("Enter number of people:"));
let opinions = prompt("Enter opinions (0 for easy, 1 for hard):").split(' ').map(Number);

// Check if any person thinks it's hard
let isHard = false;
for (let i = 0; i < n; i++) {
  if (opinions[i] === 1) {
    isHard = true;
    break;
  }
}

// Output result
console.log(isHard ? "HARD" : "EASY");
