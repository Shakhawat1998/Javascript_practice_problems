/*
Problem:
--------
A string is called "square" if it can be formed by writing some string twice in a row.
Formally, a string s is square if:
    s = x + x
where x is some non-empty string.

Examples of square strings:
- "aa"      → "a" + "a"
- "abcabc"  → "abc" + "abc"
- "abab"    → "ab" + "ab"
- "baabaa"  → "baa" + "baa"

Examples of NOT square strings:
- "aaa"     → cannot be split into two identical halves
- "abaaab"  → halves are "aba" and "aab" (different)
- "abcdabc" → length is odd, can't be split evenly

Task:
-----
Given t test cases, each with a string s,
determine if s is square.

Input:
------
- First line: integer t (number of test cases)
- Next t lines: each line contains a string s

Output:
-------
For each string s, output "YES" if s is square, otherwise "NO".

------------------------------------------------------
Example Input:
10
a
aa
aaa
aaaa
abab
abcabc
abacaba
xxyy
xyyx
xyxy

Example Output:
NO      // "a" length is 1 (odd), can't split
YES     // "aa" = "a" + "a"
NO      // "aaa" length 3 (odd)
YES     // "aaaa" = "aa" + "aa"
YES     // "abab" = "ab" + "ab"
YES     // "abcabc" = "abc" + "abc"
NO      // "abacaba" length 7 (odd)
NO      // "xxyy" halves "xx" and "yy" differ
NO      // "xyyx" halves "xy" and "yx" differ
YES     // "xyxy" = "xy" + "xy"
*/


const prompt = require("prompt-sync")();

const t = Number(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
  const s = prompt(`Enter string for test case ${i + 1}: `);
  
  // A square string must have even length
  if (s.length % 2 !== 0) {
    console.log("NO");
    continue;
  }
  
  const half = s.length / 2;
  const firstHalf = s.slice(0, half);
  const secondHalf = s.slice(half);
  
  if (firstHalf === secondHalf) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

