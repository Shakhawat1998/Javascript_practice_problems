/*
Problem:
--------
Bati bhai wants to find out if a given string is a "Shera" string or not.

Definition:
-----------
- A "Shera" string contains an **even number** of palindromic substrings.
- A palindromic substring is any substring that reads the same forwards and backwards.
- Substrings are contiguous parts of the string.

Examples:
---------
1) Input: "comilla"
   Palindromic substrings:
     "c", "o", "m", "i", "l", "l", "a", "ll"
   Count = 8 (even)
   Output: "Shera"

2) Input: "abcde"
   Palindromic substrings:
     "a", "b", "c", "d", "e"
   Count = 5 (odd)
   Output: "Not Shera"

3) Input: "aaaa"
   Palindromic substrings:
     "a", "a", "a", "a", "aa", "aa", "aa", "aaa", "aaa", "aaaa"
   Count = 10 (even)
   Output: "Shera"

Input:
------
- First line: integer n (length of the string)
- Second line: string s of length n, consisting of lowercase letters

Output:
-------
- Print "Shera" if the count of palindromic substrings is even
- Otherwise print "Not Shera"
*/


const prompt = require("prompt-sync")(); // Import prompt-sync for input

const n = parseInt(prompt());            // Read integer n: length of string
const s = prompt();                      // Read string s

let count = 0;                          // Initialize count of palindromic substrings

// Function to count palindromes expanding around center indices left and right
function expandAroundCenter(left, right) {
  let localCount = 0;                   // Local count for palindromes from this center
  while (left >= 0 && right < n && s[left] === s[right]) {  // While substring is palindrome
    localCount++;                       // Increment count for current palindrome
    left--;                            // Expand left pointer outward
    right++;                           // Expand right pointer outward
  }
  return localCount;                   // Return count found for this center
}

for (let i = 0; i < n; i++) {          // Loop over each character in string as center
  count += expandAroundCenter(i, i);    // Count odd-length palindromes centered at i
  count += expandAroundCenter(i, i + 1); // Count even-length palindromes centered between i and i+1
}

if (count % 2 === 0) {                 // Check if total palindrome count is even
  console.log("Shera");                // Print Shera if even
} else {
  console.log("Not Shera");            // Print Not Shera if odd
}


// How to efficiently count palindromic substrings?
// 1. Expand Around Center Approach
// Each palindrome can be centered around:

// A single character (odd-length palindromes)

// Between two characters (even-length palindromes)

// For example, in "aba":

// Odd-length centered at 'b': "aba"

// Even-length between 'a' and 'b': none

// Steps:
// Iterate over each index i in the string.

// For odd-length palindromes, expand pointers left and right from i (left = i, right = i), while characters match.

// For even-length palindromes, expand pointers left = i, right = i + 1.

// Count how many palindromes exist from each center expansion.

// Sum all these counts to get total palindromic substrings.

// Why is this approach good?
// Time complexity: O(n²) — for each center, expanding pointers costs O(n), and there are O(n) centers.

// Since n ≤ 100 in this problem, O(n²) is very efficient.

// It directly counts every palindromic substring once.

// Final step
// After counting all palindromic substrings, check if the total count is even.

// If even, print "Shera", else print "Not Shera".

// Summary:
// The solution exploits the fact that all palindromic substrings can be enumerated by expanding around every possible center.

// It counts the palindromes directly, avoiding costly substring extraction or repeated checks.

// The parity of the total count determines the output.