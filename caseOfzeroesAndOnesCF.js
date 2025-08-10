/*
Problem: Minimum String Length After Removing "01" or "10"

We have:
- A binary string (only '0' and '1') of length n.
- We can repeatedly choose any two adjacent positions where one is '0' and the other is '1'.
- If found, we remove both characters.
- Each removal reduces the string length by 2.

Goal:
Find the minimum possible length of the string after applying the operation as many times as possible.

Key Insight:
- Each operation removes one '0' and one '1'.
- The maximum removals possible = min(count of '0', count of '1')
- Minimum length remaining = n - 2 * min(count0, count1)

-----------------------------------------------------------
Example 1:
Input:
4
1100

count0 = 2, count1 = 2
We can remove min(2, 2) = 2 pairs → remove 4 characters.
Remaining length = 4 - 4 = 0

-----------------------------------------------------------
Example 2:
Input:
5
01010

count0 = 3, count1 = 2
We can remove min(3, 2) = 2 pairs → remove 4 characters.
Remaining length = 5 - 4 = 1

-----------------------------------------------------------
Example 3:
Input:
8
11101111

count0 = 1, count1 = 7
We can remove min(1, 7) = 1 pair → remove 2 characters.
Remaining length = 8 - 2 = 6
*/



const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Read n (length of string) from input
let n = parseInt(prompt('Enter length of string: '));

// Read the binary string
let s = prompt('Enter the binary string: ').trim();

let count0 = 0; // To count number of '0's
let count1 = 0; // To count number of '1's

// Loop through each character in the string
for (let ch of s) {
  if (ch === '0') {
    count0++; // Count zeros
  } else {
    count1++; // Count ones
  }
}

// The maximum number of removable pairs is min(count0, count1)
// Each pair removes 2 characters from the string
let pairs = Math.min(count0, count1);

// Remaining length = total length - characters removed (pairs * 2)
let remainingLength = n - (pairs * 2);

// Output the result
console.log(remainingLength);

