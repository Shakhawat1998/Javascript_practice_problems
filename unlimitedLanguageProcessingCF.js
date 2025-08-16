// /*
// Problem: Splitting Lura's Word into Syllables

// We have:
// - Letters used: a, b, c, d, e
// - Vowels: a, e → represented as V
// - Consonants: b, c, d → represented as C

// Two valid syllable types:
// 1. CV  → consonant + vowel  (example: ba, ce)
// 2. CVC → consonant + vowel + consonant (example: bab, ced)

// Rules:
// - A valid word = sequence of syllables (CV or CVC).
// - Our job: split the given word into syllables, separated by dots (.).

// Input format:
// t → number of test cases
// For each test case:
//     n → length of the word
//     word → string of length n

// Constraints:
// 1 ≤ t ≤ 100
// 1 ≤ n ≤ 2*10^5
// Sum of n across test cases ≤ 2*10^5
// Word is always valid and can be split into syllables.

// Output:
// For each test case, output the word with syllables separated by dots.
// If multiple answers are possible, any valid one is fine.

// */


// // Example 1:
// n = 8
// word = "bacedbab"
// /*
// Word breakdown:
// b a c e d b a b
// C V C V C C V C
// Possible syllable split: ba . ced . bab
// Output: ba.ced.bab
// */


// // Example 2:
// n = 4
// word = "baba"
// /*
// b a b a
// C V C V
// Split: ba . ba
// Output: ba.ba
// */


// // Example 3:
// n = 13
// word = "daddecabeddad"
// /*
// d a d d e c a b e d d a d
// C V C C V C V C V C C V C
// Split: dad . de . ca . bed . dad
// Output: dad.de.ca.bed.dad
// */


// // Example 4:
// n = 3
// word = "dac"
// /*
// d a c
// C V C
// Only one syllable
// Output: dac
// */


// // Example 5:
// n = 6
// word = "dacdac"
// /*
// Split: dac . dac
// Output: dac.dac
// */


// // Example 6:
// n = 22
// word = "dababbabababbabbababba"
// /*
// One valid split: da . bab . ba . ba . bab . bab . ba . bab . ba
// Output: da.bab.ba.ba.bab.bab.ba.bab.ba
// */


// Import prompt-sync for taking input in Node.js (for local testing)
const prompt = require("prompt-sync")();

/*
   Intuition:
   The problem takes a string made of characters {a, b, c, d, e}.
   - 'a' and 'e' are vowels.
   - {b, c, d} are consonants.
   We need to split the string into parts:
       - If the last character is a vowel, group it with the one before it.
       - If it's a consonant, group it with the 2 before it.
   Then insert '.' (dot) as separators to mark these groups.
*/

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {
    // Read string length
    let n = parseInt(prompt());

    // Read the string
    let str = prompt();

    // Array to mark split positions (like vector<bool> in C++)
    // Extra size added just like "n+10" in C++
    let p = new Array(n + 10).fill(false);

    /*
       Intuition:
       Traverse the string from right to left.
       - If current char is a vowel ('a' or 'e'):
            Take it with the previous one => move back 1 more index.
       - If consonant:
            Take it with 2 previous ones => move back 2 more indexes.
       Mark the starting index of each group in p[].
    */
    for (let i = n - 1; i >= 0; i--) {
        if (str[i] === 'a' || str[i] === 'e') {
            i--;        // move back 1 more index since group size = 2
            p[i] = true; // mark start of group
        } else {
            i -= 2;     // move back 2 more indexes since group size = 3
            p[i] = true; // mark start of group
        }
    }

    /*
       Intuition:
       Now print the string character by character.
       Before printing a character:
         - If p[i] is true (meaning this index starts a new group)
           and i != 0 (not the first group),
           then insert '.' before printing.
    */
    let result = "";
    for (let i = 0; i < n; i++) {
        if (i !== 0 && p[i]) {
            result += ".";
        }
        result += str[i];
    }

    // Print final result for this test case
    console.log(result);
}


