// Petya, Vasya, and Tonya are friends joining a programming contest.
// They agreed to solve a problem only if at least 2 of them are confident about the solution.

// You are given n problems. For each problem, you are told whether each of the three friends is confident (1) or not (0).

// 🔢 Input:
// First line: An integer n (1 ≤ n ≤ 1000) — number of problems.

// Next n lines: Each line has 3 integers (0 or 1), showing whether Petya, Vasya, and Tonya are confident for that problem.

// 🧾 Output:
// Print how many problems they will solve (i.e., have at least 2 friends confident).

// 📘 Example:
// Input:

// Copy code
// 3
// 1 1 0
// 1 1 1
// 1 0 0
// Output:

// Copy code
// 2
// Explanation:

// 1st problem: Petya & Vasya — ✅

// 2nd problem: All three — ✅

// 3rd problem: Only Petya — ❌

// Total = 2 problems solved.




//aproach

// 1. Read the number of problems (n).
// 2. For each problem:
//    - Read the confidence of Petya, Vasya, and Tonya (0 or 1).
//    - If the sum of their confidence is >= 2,
//      it means at least two of them are confident, so they’ll solve the problem.
// 3. Count how many such problems there are and print the result.




const prompt = require('prompt-sync')(); // For Node.js input

// Read number of problems
let t = parseInt(prompt("Enter number of problems: "), 10);

let count = 0; // Counter for problems they will solve

while (t--) {
    // Read 3 space-separated integers for one problem
    let [a, b, c] = prompt("Enter 3 values (0 or 1): ").split(' ').map(Number);

    // Check if at least two are confident
    if (a + b + c >= 2) {
        count++;
    }
}

// Output the result
console.log(count);
