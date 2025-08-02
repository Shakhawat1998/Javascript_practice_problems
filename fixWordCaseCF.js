// // Vasya wants to fix words that mix uppercase and lowercase letters.

// // For a given word, change all its letters to either:

// // all lowercase, or

// // all uppercase,

// // so that the fewest letters are changed.

// // Rules:

// // If the word has more uppercase letters, convert it to all uppercase.

// // Otherwise (if lowercase letters are equal or more), convert it to all lowercase.

// // Input:
// // One word s consisting of uppercase and lowercase Latin letters (length 1 to 100).

// // Output:
// // The corrected word after changing its letters according to the rules.



// //input
// HoUse

// //output
// house

// //input
// ViP

// //output
// VIP


// //input
// maTRIx

// //output
// matrix



// Read input from user
const prompt = require('prompt-sync')();
let word = prompt("Enter the word: ");

// Counters for uppercase and lowercase letters
let upperCount = 0;
let lowerCount = 0;

// Count uppercase and lowercase letters in the word
for (let char of word) {
    if (char >= 'a' && char <= 'z') {
        lowerCount++;
    } else if (char >= 'A' && char <= 'Z') {
        upperCount++;
    }
}

// If uppercase letters are strictly more, convert word to uppercase
// Otherwise convert word to lowercase
if (upperCount > lowerCount) {
    word = word.toUpperCase();
} else {
    word = word.toLowerCase();
}

// Output the corrected word
console.log(word);

