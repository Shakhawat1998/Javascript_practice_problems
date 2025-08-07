// Problem: Check if a given character appears in the string "codeforces".
//
// Input:
// - First line: integer t — number of test cases (1 ≤ t ≤ 26).
// - Next t lines: each contains a single lowercase letter.
//
// Output:
// - For each test case, print "YES" if the letter appears in "codeforces".
// - Otherwise, print "NO".
//
// You can print answers in any case (e.g. "yes", "YES", "No").
//
// -----------------------------------------
// Example:
//
// Input:
// 10
// a
// b
// c
// d
// e
// f
// g
// h
// i
// j
//
// Explanation:
// The string "codeforces" contains the letters:
// c, o, d, e, f, o, r, c, e, s
//
// For each character:
// 'a' → NO (not in the string)
// 'b' → NO
// 'c' → YES (appears multiple times)
// 'd' → YES
// 'e' → YES
// 'f' → YES
// 'g' → NO
// 'h' → NO
// 'i' → NO
// 'j' → NO
//
// Output:
// NO
// NO
// YES
// YES
// YES
// YES
// NO
// NO
// NO
// NO



const prompt = require('prompt-sync')();

const t = parseInt(prompt());
const target = "codeforces";

for (let i = 0; i < t; i++) {
  const c = prompt();
  if (target.includes(c)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
