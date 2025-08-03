// A pangram is a word or sentence that contains every letter of the English alphabet at least once.

// Problem:
// You are given a string containing only uppercase and lowercase Latin letters.

// Check if this string is a pangram (contains all letters 'a' to 'z', case-insensitive).

// Input:
// First line: integer n — length of the string (1 ≤ n ≤ 100)

// Second line: the string itself (only letters, uppercase or lowercase)

// Output:
// Print "YES" if the string is a pangram.

// Print "NO" otherwise.

// Examples:
// Example 1
// Input:


// 12
// toosmallword
// Explanation:

// The string "toosmallword" does not contain all letters of the alphabet.

// Missing many letters like 'b', 'c', 'e', 'f', etc.

// Output:

// NO
// Example 2
// Input:


// 35
// TheQuickBrownFoxJumpsOverTheLazyDog
// Explanation:

// This famous sentence contains every letter in the alphabet at least once.

// Uppercase and lowercase letters both count.

// Output:


// YES


// Uncomment the next line if using Node.js for input
const prompt = require('prompt-sync')();

// Step 1: Read input length (not really needed in JS but given)
const n = parseInt(prompt("Enter length of the string: "));

// Step 2: Read the string input
const inputStr = prompt("Enter the string: ");

// Step 3: Convert the string to lowercase to handle case-insensitivity
const lowerStr = inputStr.toLowerCase();

// Step 4: Create a Set to store unique letters found
const lettersSet = new Set();

// Step 5: Loop over each character and add it if it's a letter a-z
for (const char of lowerStr) {
    if (char >= 'a' && char <= 'z') {
        lettersSet.add(char);
    }
}

// Step 6: Check if the set size is 26 (all letters in the alphabet)
if (lettersSet.size === 26) {
    console.log("YES");
} else {
    console.log("NO");
}
