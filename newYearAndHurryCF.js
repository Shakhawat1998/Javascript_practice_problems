// Limak is in a contest that starts at 20:00 and lasts exactly 4 hours (240 minutes).
// He wants to solve some problems and still reach a New Year's Eve party at midnight or earlier.

// Details:
// There are n problems sorted by difficulty (1 = easiest, n = hardest).

// Solving problem i takes exactly 5 × i minutes.

// Limak needs k minutes to get from his house to the party.

// Total contest time is 240 minutes (from 20:00 to midnight).

// Limak must finish solving problems and travel to the party within 240 minutes.

// Question:
// What is the maximum number of problems Limak can solve so that he still arrives at the party by midnight?

// Input:
// Two integers:

// n — number of problems (1 ≤ n ≤ 10)

// k — minutes needed to get to the party (1 ≤ k ≤ 240)

// Output:
// One integer — the maximum number of problems Limak can solve.

// How to solve:
// Calculate the total time Limak has for solving problems: time_for_solving = 240 - k

// Starting from problem 1, add the time for each problem 5 × i until the total exceeds time_for_solving.

// The count of problems solved before exceeding the limit is the answer.

// Examples Explained
// Example 1:
// Input:


// 3 222
// Problems: 3 (times needed: 5, 10, 15)

// Time to party: 222 minutes

// Available solving time = 240 - 222 = 18 minutes

// Try solving problems:

// Problem 1: 5 minutes → total 5 ≤ 18 ✔️

// Problem 2: 10 minutes → total 15 ≤ 18 ✔️

// Problem 3: 15 minutes → total 30 > 18 ✖️

// Limak can solve 2 problems and still make it to the party on time.

// Example 2:
// Input:


// 4 190
// Problems: 4 (times: 5, 10, 15, 20)

// Time to party: 190 minutes

// Available solving time = 240 - 190 = 50 minutes

// Try solving:

// 5 + 10 + 15 + 20 = 50 minutes exactly

// Limak can solve all 4 problems.

// Example 3:
// Input:


// 7 1
// Problems: 7 (times: 5, 10, 15, 20, 25, 30, 35)

// Time to party: 1 minute

// Available solving time = 240 - 1 = 239 minutes

// Sum for all problems:
// 5 + 10 + 15 + 20 + 25 + 30 + 35 = 140 minutes

// 140 ≤ 239 → Limak can solve all 7 problems.

// Summary:
// Calculate how many problems fit into 240 - k minutes by adding their solving times one by one.


const prompt = require('prompt-sync')();

// Read inputs
const [n, k] = prompt('Enter n and k: ').trim().split(' ').map(Number);

function maxProblemsSolved(n, k) {
  const totalTime = 240;
  const availableTime = totalTime - k;

  let timeSpent = 0;
  let problemsSolved = 0;

  for (let i = 1; i <= n; i++) {
    const timeForProblem = 5 * i;

    if (timeSpent + timeForProblem <= availableTime) {
      timeSpent += timeForProblem;
      problemsSolved++;
    } else {
      break;
    }
  }
  return problemsSolved;
}

console.log(maxProblemsSolved(n, k));
