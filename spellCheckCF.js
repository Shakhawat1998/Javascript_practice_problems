/*
PROBLEM:
Timur allows any permutation (rearrangement) of the letters in "Timur" 
as a valid spelling of his name. 

Rules for a correct spelling:
1. First letter must be uppercase 'T'.
2. Remaining letters must be lowercase 'i', 'm', 'u', 'r'.
3. Length must be exactly 5 characters.
4. It must be a permutation of the letters in "Timur".

We are given t test cases. 
For each test case:
- We get an integer n (length of string s).
- We get the string s.
We must print:
- "YES" if s is a valid permutation of "Timur".
- "NO" otherwise.

-----------------------------------
EXAMPLES:

Example 1:
Input:
5
Timur
Output: YES
Reason: Exact match to "Timur".

Example 2:
5
miurT
Output: YES
Reason: Same letters as "Timur" but rearranged; 
         'T' is uppercase, others lowercase.

Example 3:
5
timur
Output: NO
Reason: First letter is lowercase, so not valid.

Example 4:
4
Timr
Output: NO
Reason: Length is not 5, so cannot be valid.

Example 5:
6
Timuur
Output: NO
Reason: Has extra 'u', so letters do not match exactly.

Example 6:
10
TimurTimur
Output: NO
Reason: Length > 5, so invalid.

Example 7:
5
TIMUR
Output: NO
Reason: Wrong casing (all uppercase).
*/



// Import prompt-sync for input (only needed if running locally with Node.js)
const prompt = require("prompt-sync")();

// Read number of test cases
const t = parseInt(prompt());

// Loop over all test cases
for (let i = 0; i < t; i++) {
  // Read n (length of string)
  const n = parseInt(prompt());
  
  // Read the string s
  const s = prompt();

  // Check condition 1: length must be exactly 5
  if (n !== 5) {
    console.log("NO");
    continue; // Move to the next test case
  }

  // Define the correct name
  const correct = "Timur";

  // Sort both strings and compare (sorting ensures letters match regardless of order)
  const sortedInput = s.split("").sort().join("");
  const sortedCorrect = correct.split("").sort().join("");

  // Output YES if sorted strings match exactly, otherwise NO
  if (sortedInput === sortedCorrect) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
