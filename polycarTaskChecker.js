// Problem: polycarpTaskChecker
//
// Polycarp solves 1 task per day and logs the task as a capital letter.
// He must finish a task completely before switching to a new one,
// and once he switches, he cannot return to the previous task.
//
// For each test case, check if he followed this rule.
//
// Input:
// - First line: number of test cases t
// - For each test case:
//   - Line 1: n (number of days)
//   - Line 2: a string of length n (sequence of tasks solved)
//
// Output:
// - "YES" if Polycarp followed the rules
// - "NO" otherwise

// Examples:

// Input:
// 5
// 3
// ABA         // ❌ Polycarp worked on A, then B, then returned to A → NO
// 11
// DDBBCCCBBEZ // ❌ Polycarp switched from B to C, then came back to B → NO
// 7
// FFGZZZY     // ✅ Each task block is continuous → YES
// 1
// Z           // ✅ Only one task → YES
// 2
// AB          // ✅ Two different tasks, not repeating → YES

// Output:
// NO
// NO
// YES
// YES
// YES



// Importing prompt-sync to read input from the user in Node.js
const prompt = require('prompt-sync')();

// Read number of test cases from user input and convert it to integer
const t = parseInt(prompt());

// Loop through each test case
for (let i = 0; i < t; i++) {
  // Read the number of days Polycarp solved tasks in this test case
  const n = parseInt(prompt());

  // Read the task sequence string (uppercase Latin letters)
  const tasks = prompt();

  // Create a Set to keep track of tasks that have already been solved
  const seen = new Set();

  // Assume the sequence is valid (teacher is not suspicious)
  let valid = true;

  // Loop through each day's task in the sequence
  for (let j = 0; j < n; j++) {
    // Get the current task character
    const current = tasks[j];

    // Get the previous task character if it exists, else set as empty string
    const prev = j > 0 ? tasks[j - 1] : '';

    // If current task is different from previous one and already seen before
    if (current !== prev && seen.has(current)) {
      // Then it's suspicious — mark the test case as invalid
      valid = false;
      break; // No need to check further for this test case
    }

    // Add the current task to the set of seen tasks
    seen.add(current);
  }

  // Output result for this test case — YES if valid, NO if suspicious
  console.log(valid ? "YES" : "NO");
}
