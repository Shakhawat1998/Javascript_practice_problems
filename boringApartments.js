/*
Problem: Boring Apartments Keypress Count

We have an apartment building with apartments numbered 1 to 10,000.

A "boring apartment" is one whose number is made of the same digit repeated.
Examples:
    1, 11, 111, 1111
    2, 22, 222, 2222
    ...
    9, 99, 999, 9999

The character calls apartments in this order:
    - First, all boring apartments made of digit 1: 1 → 11 → 111 → 1111
    - Then, all boring apartments made of digit 2: 2 → 22 → 222 → 2222
    - ...
    - Until he reaches the given apartment `x` (where the resident answers)

He wants to know: **How many total digits did he press**?

---------------------------------------------------
Input:
    t → number of test cases (1 ≤ t ≤ 36)
    For each test case:
        x → the apartment number where the call is answered
        (Guaranteed that x is boring: all digits same)

Output:
    For each test case: total number of digits pressed

---------------------------------------------------
Example:

Input:
4
22
9999
1
777

Step-by-step:

Test case 1: x = 22
  Calls:
    1   → 1 digit
    11  → 2 digits
    111 → 3 digits
    1111 → 4 digits
    2   → 1 digit
    22  → 2 digits ← answer here
  Total digits = 1 + 2 + 3 + 4 + 1 + 2 = 13

Test case 2: x = 9999
  Calls all boring apartments from digit 1 to digit 9:
  For digits 1 to 8: each has 1+2+3+4 = 10 digits total → 8 × 10 = 80
  For digit 9: calls 9 (1), 99 (2), 999 (3), 9999 (4) → 1+2+3+4 = 10
  Total = 80 + 10 = 90

Test case 3: x = 1
  Only one call:
  1 → 1 digit
  Total = 1

Test case 4: x = 777
  Digits 1 to 6: each gives 10 digits total → 6 × 10 = 60
  Digit 7: calls 7 (1), 77 (2), 777 (3) → 1+2+3 = 6
  Total = 60 + 6 = 66

---------------------------------------------------
How to Solve:
1. Find the first digit of x → `d`
2. Find the length of x → `len`
3. Digits before d: each group gives 1+2+3+4 = 10 digits pressed
   → Add (d - 1) × 10
4. For current digit group: sum of 1 to len → len × (len+1) / 2
5. Total = (d - 1) × 10 + (len × (len+1) / 2)
*/



// Import prompt-sync for input in Node.js
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt("Enter number of test cases: "));

// Loop through each test case
for (let i = 0; i < t; i++) {
    // Read apartment number x
    let x = prompt("Enter apartment number: ").trim();

    // Step 1: First digit of x
    let d = parseInt(x[0]);

    // Step 2: Length of x
    let len = x.length;

    // Step 3: Digits before d → each group gives 10 keypresses
    let total = (d - 1) * 10;

    // Step 4: Add current digit group keypresses
    total += (len * (len + 1)) / 2;

    // Output the total keypresses
    console.log(total);
}


// (d - 1) * 10 → counts all digits pressed for boring apartments before the first digit of x.

// len * (len + 1) / 2 → counts digits pressed within the current group until we reach x.


// Example 2 — x = 9999
// Interpretation

// First digit d = 9

// Length len = 4

// Reasoning

// For digits 1 through 8, each full group (1, 11, 111, 1111) contributes 1+2+3+4 = 10 digits.
// So digits before 9 contribute 8 * 10 = 80.

// For digit 9, we call 9 (1), 99 (2), 999 (3), 9999 (4) → 1+2+3+4 = 10.

// Total = 80 + 10 = 90

// Formula check:
// Total = (9 - 1) * 10 + (1+2+3+4)
// = 8 * 10 + 10 = 80 + 10 = 90


