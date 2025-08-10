/*
Problem: Magic Number Check

A magic number is formed by concatenating the numbers: 1, 14, and 144 any number of times.

Examples of magic numbers:
- 14144 (14 + 144)
- 141414 (14 + 14 + 14)
- 1411 (14 + 1 + 1)

Examples of NOT magic numbers:
- 1444 (ends with 4 which can't form 1, 14, or 144 properly)
- 514 (contains 5, which is invalid)
- 414 (starts with 4 but not preceded by 1)

Input:
- An integer n (1 ≤ n ≤ 10^9), no leading zeros

Output:
- Print "YES" if n is a magic number
- Print "NO" otherwise

-------------------------------------------------
Examples:

Input: 114114
Output: YES
Explanation: "1" + "14" + "114" (which is "1" + "14" + "14")

Input: 1111
Output: YES
Explanation: "1" + "1" + "1" + "1"

Input: 441231
Output: NO
Explanation: Number contains digits not forming "1", "14" or "144" pattern.
*/



// Import prompt-sync for taking input from the console
const prompt = require('prompt-sync')();

// Read the number as a string (so we can check each digit easily)
let s = prompt();  

// Variable to track if the number is magic or not
let isMagic = true;

// Iterate through the string using a manual index
for (let i = 0; i < s.length;) {

    // If the current character is not '1' or '4', it's not a magic number
    if (s[i] !== '1' && s[i] !== '4') {
        isMagic = false;
        break; // No need to check further
    }

    // If the substring starting at i matches "144"
    else if (s[i] === '1' && s[i + 1] === '4' && s[i + 2] === '4') {
        i += 3; // Move forward by 3 characters
    }

    // If the substring starting at i matches "14"
    else if (s[i] === '1' && s[i + 1] === '4') {
        i += 2; // Move forward by 2 characters
    }

    // If it's just '1'
    else if (s[i] === '1') {
        i += 1; // Move forward by 1 character
    }

    // Any other case is invalid
    else {
        isMagic = false;
        break;
    }
}

// Output the result
console.log(isMagic ? "YES" : "NO");
