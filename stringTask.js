// Given a string of uppercase and lowercase English letters, transform it by:

// Removing all vowels (A, O, Y, E, U, I and their lowercase forms).

// Putting a dot . before each remaining consonant.

// Changing all uppercase consonants to lowercase.

// Input
// A single string of length 1 to 100, containing only English letters.

// Output
// The transformed string after applying the steps above.

// Examples
// Input:
// tour
// Output:
// .t.r

// Input:
// Codeforces
// Output:
// .c.d.f.r.c.s


const prompt = require('prompt-sync')();
const vowel = ["a", "o", "y", "e", "u", "i"];

let x = prompt().toLowerCase();
let newStr = "";

for (let i = 0; i < x.length; i++) {
    if (!vowel.includes(x[i])) {
        newStr += "." + x[i];
    }
}

console.log(newStr);
