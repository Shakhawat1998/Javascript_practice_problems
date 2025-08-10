/*
Problem: Most Frequent Two-Gram

We are given:
- An integer n (2 ≤ n ≤ 100), the length of a string s.
- A string s consisting of n capital Latin letters (A–Z).

Task:
- A "two-gram" is any substring of length 2 (two consecutive characters).
- Find the two-gram that appears the most times in s.
- Occurrences can overlap.
- If there are multiple two-grams with the same maximum count, print any one of them.

------------------------------------------------------------
Example 1:
Input:
7
ABACABA

All two-grams:
AB, BA, AC, CA, AB, BA
Counts:
AB → 2 times
BA → 2 times
AC → 1 time
CA → 1 time
Max count = 2 → "AB" or "BA" both are valid outputs.

Output:
AB
(or BA is also correct)

------------------------------------------------------------
Example 2:
Input:
5
ZZZAA

All two-grams:
ZZ, ZZ, ZA, AA
Counts:
ZZ → 2 times
ZA → 1 time
AA → 1 time
Max count = 2 → "ZZ" is the only valid answer.

Output:
ZZ
*/




const prompt = require("prompt-sync")();

// Read n
const n = parseInt(prompt("Enter length of string: "));

// Read the string
const s = prompt("Enter the string: ");

// Variable to store the maximum count found so far
let maxCount = 0;

// Variable to store the most frequent two-gram
let twoGram = "";

// Object to store frequency of each two-gram
const freqMap = {};

// Loop through to get all two-grams
for (let i = 0; i < n - 1; i++) {
    // Create the two-gram
    const tg = s[i] + s[i + 1];

    // Count frequency
    freqMap[tg] = (freqMap[tg] || 0) + 1;

    // Update max if needed
    if (freqMap[tg] > maxCount) {
        maxCount = freqMap[tg];
        twoGram = tg;
    }
}

// Output result
console.log(twoGram);
