/*
Problem Summary:
----------------
We are given:
- A string `s` of length n, where each character is '<' or '>'.
- We need to build an array `a` of length n+1 such that:
    For each i from 1 to n:
        s[i] == '<' means a[i] < a[i+1]
        s[i] == '>' means a[i] > a[i+1]

- The "cost" of an array is the number of distinct elements in it.
- We need to find the **minimum possible cost** among all arrays that satisfy the given condition.

--------------------------------
Key Idea:
---------
- The minimal cost depends on the longest consecutive run of the same symbol.
- If there are `m` consecutive '<' or '>', we will need `m+1` distinct values for that segment.
- The answer = (max consecutive length of same symbol) + 1

--------------------------------
Example 1:
----------
n = 4
s = "<<>>"

We need: a1 < a2 < a3 > a4 > a5

One possible array: [13, 37, 42, 37, 13]
Check:
    13 < 37 ✅
    37 < 42 ✅
    42 > 37 ✅
    37 > 13 ✅
Cost = distinct elements {13, 37, 42} = 3
Output: 3

--------------------------------
Example 2:
----------
n = 4
s = ">><<"

We need: a1 > a2 > a3 < a4 < a5

Possible array: [42, 37, 13, 37, 42]
Check:
    42 > 37 ✅
    37 > 13 ✅
    13 < 37 ✅
    37 < 42 ✅
Cost = distinct elements {42, 37, 13} = 3
Output: 3

--------------------------------
Example 3:
----------
n = 5
s = ">>>>>"

We need: a1 > a2 > a3 > a4 > a5 > a6

We must decrease 5 times in a row, so we need 6 distinct numbers.
Example: [6, 5, 4, 3, 2, 1]
Cost = 6
Output: 6

--------------------------------
Example 4:
----------
n = 7
s = "<><><><"

Pattern alternates: < > < > < > <
Max consecutive same symbol length = 1
So answer = 1 + 1 = 2

Example array: [1, 2, 1, 2, 1, 2, 1, 2]
Check: works fine
Cost = {1, 2} = 2
Output: 2
*/


// Import prompt-sync for local testing
const prompt = require("prompt-sync")();

// Read number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

// Loop through all test cases
for (let _ = 0; _ < t; _++) {
    // Read n (length of string s)
    const n = parseInt(prompt("Enter n: "));

    // Read string s (sequence of '<' and '>')
    const s = prompt("Enter string s: ").trim();

    /*
      Intuition:
      ----------
      - We need the longest consecutive sequence of identical characters ('<' or '>').
      - Why? Because:
        * X consecutive '<' means we need X+1 distinct numbers in increasing order.
        * X consecutive '>' means we need X+1 distinct numbers in decreasing order.
      - The minimal cost = (longest consecutive same character length) + 1.
      - Example:
          s = ">>>>>"
          Longest streak of '>' = 5 → Need 6 numbers → Answer = 6
    */

    let maxStreak = 1;   // Longest streak found so far (starts at 1 because at least one char exists)
    let currentStreak = 1; // Current streak length

    // Loop through the string to find the longest same-character streak
    for (let i = 1; i < n; i++) {
        if (s[i] === s[i - 1]) {
            // Same as previous → increase current streak
            currentStreak++;
        } else {
            // Different char → reset current streak
            currentStreak = 1;
        }
        // Update the maximum streak length
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    }

    // Minimum cost = longest streak + 1
    console.log(maxStreak + 1);
}
