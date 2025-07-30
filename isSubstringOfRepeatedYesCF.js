// Polycarp repeats the word "Yes" many times to say yes (like: "YesYesYes...").
// Due to noise, you heard only part of it, a substring.

// You are given multiple such heard substrings, and your task is to check for each one:

// Is it a substring of "YesYesYes..."?

// Input:
// First line: Integer t — number of test cases (1 ≤ t ≤ 1000)

// Next t lines: Each line contains a string s (1 ≤ |s| ≤ 50)

// Output:
// For each string s, print:

// "YES" — if s can be found inside "YesYesYes..."

// "NO" — otherwise

// Note: Matching is case-sensitive. So only "Yes" (capital Y, lowercase e, s) is valid — not "YES", "yes", etc.
//input

// 3
// esYes
// codeforces
// se

//output

// YES
// NO
// NO


const prompt = require('prompt-sync')();

const full = 'Yes'.repeat(18);
const t = parseInt(prompt());

for (let i = 0; i < t; i++) {
    const s = prompt();
    if (full.includes(s)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
