// 🏫 Team Formation in School №0 (Berland)
//
// Problem:
// Each child is good at ONE of 3 subjects:
//   1 → Programming
//   2 → Maths
//   3 → PE (Physical Education)
//
// To form a valid team:
// - It must have 3 students: one from each subject.
// - Each child can only be used in **one** team.
//
// Task:
// - Given n students and their skill types, form the **maximum number of valid teams**.
// - Print how many teams can be formed.
// - Then, for each team, print 3 indices (1-based) of the students in that team.
//
// Input:
// - First line: integer n (number of children) → 1 ≤ n ≤ 5000
// - Second line: n integers (t1 to tn), each value is 1, 2, or 3 representing skill
//
// Output:
// - First line: number w (maximum number of full teams)
// - Next w lines: each line contains 3 indices (one programmer, one mathematician, one PE student)
//
// 🧪 Examples:
//
// Example 1:
// Input:
// 7
// 1 3 1 3 2 1 2
//
// Explanation:
// - Programmers (1): index 1, 3, 6
// - PE (3): index 2, 4
// - Maths (2): index 5, 7
// Can form 2 full teams:
// Output:
// 2
// 3 5 2
// 6 7 4
//
// Example 2:
// Input:
// 4
// 2 1 1 2
//
// Explanation:
// Only 1 PE student is missing → cannot form any complete team.
// Output:
// 0



// 🏫 Team Formation in School №0 (Berland)

const prompt = require('prompt-sync')();

// Read number of children
const n = parseInt(prompt("Enter number of children: "));

// Read skill types of children
const skills = prompt("Enter skill types (space-separated): ")
  .split(' ')
  .map(Number);

// Arrays to store indices of children by skill
let programmers = [];
let mathematicians = [];
let athletes = [];

// Group children based on their skill type
for (let i = 0; i < n; i++) {
  if (skills[i] === 1) {
    programmers.push(i + 1); // 1-based index
  } else if (skills[i] === 2) {
    mathematicians.push(i + 1);
  } else if (skills[i] === 3) {
    athletes.push(i + 1);
  }
}

// Calculate the maximum number of complete teams
const w = Math.min(programmers.length, mathematicians.length, athletes.length);
console.log(w);

// Print team member indices for each team
for (let i = 0; i < w; i++) {
  console.log(`${programmers[i]} ${mathematicians[i]} ${athletes[i]}`);
}
