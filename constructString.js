/*
Problem: Construct a string with substring distinct letters

Given:
- n: length of the string s to construct
- a: length of each substring we consider
- b: number of distinct letters required in every substring of length a

Task:
Construct a string s of length n consisting of lowercase letters such that
every substring of length a in s has exactly b distinct letters.

Notes:
- It is guaranteed that such a string exists.
- You have t test cases to process.
- If multiple valid strings exist, printing any one is fine.

Example:

Input:
4        // number of test cases
7 5 3    // n=7, a=5, b=3
6 1 1    // n=6, a=1, b=1
6 6 1    // n=6, a=6, b=1
5 2 2    // n=5, a=2, b=2

Output:
tleelte  // substrings of length 5: "tleel", "leelt", "eelte"
         // each has exactly 3 distinct letters: t,l,e
qwerty   // substrings length 1 have exactly 1 distinct letter by default
vvvvvv   // substring length 6 has only 1 letter repeated (v)
abcde    // substrings length 2: "ab", "bc", "cd", "de"
         // each has exactly 2 distinct letters
*/



const prompt = require('prompt-sync')(); // Import prompt-sync for user input

let t = parseInt(prompt('Enter number of test cases: ')); // Read total test cases

while (t--) { // Loop for each test case
    let [n, a, b] = prompt('Enter n, a, b: ').split(' ').map(Number); // Read n, a, b
    let s = ''; // Result string

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Predefined lowercase letters

    // Step 1: Add first 'b' distinct letters from alphabet
    for (let i = 0; i < b; i++) {
        s += alphabet[i]; // Add letter directly from alphabet string
    }

    // Step 2: Complete the first 'a' letters by repeating from start
    for (let i = 0; i < a - b; i++) {
        s += s[i]; // Repeat earlier characters from s
    }

    // Step 3: Fill until length 'n' by repeating from start again
    for (let i = 0; i < n - a; i++) {
        s += s[i]; // Keep repeating characters in order
    }

    // Step 4: Output the final string
    console.log(s);
}
