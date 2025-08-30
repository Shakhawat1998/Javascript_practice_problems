/*
Problem Simplified:

Polycarp encodes a word by repeatedly taking the "median letter" 
and writing it down:

1. If word length is odd → median letter = middle letter.
2. If word length is even → median letter = left of the two middle letters.
3. Remove that letter and repeat until the word is empty.

Given the encoded string s, we need to **decode** it back to the original word.

-------------------
Key Idea:
-------------------
- The encoding is like reconstructing the word by always taking the "median" letter.
- To decode, we can insert letters back into the original positions:
  - Start with an empty string
  - Insert letters from the encoded string s in reverse order
  - If current length of the reconstructed word is odd, insert at middle
  - If even, insert at middle (the left of the two middle positions)

-------------------
Example Walkthroughs:
-------------------

Example 1:
Input:
5
logva

Step by step:
Original word = ?
Encoded = "logva"

- Start with empty word ""
- Last letter in encoded = 'a', insert at middle → "a"
- Next = 'v', insert at middle → "va"
- Next = 'g', insert at middle → "vga"
- Next = 'o', insert at middle → "voga"
- Next = 'l', insert at middle → "volga"

Output:
volga


Example 2:
Input:
2
no

Step by step:
- Empty word ""
- Last letter = 'o' → "o"
- Next = 'n' → "no"

Output:
no


Example 3:
Input:
4
abba

Step by step:
- Empty word ""
- Last letter = 'a' → "a"
- Next = 'b' → "ba"
- Next = 'b' → "bba"
- Next = 'a' → "baba"

Output:
baba

-------------------
Observation:
- We always rebuild the word by inserting letters from the end of the encoded string.
- Insert at position = floor(current_length / 2)
*/



// Import prompt-sync for console input
const prompt = require("prompt-sync")({ sigint: true });

// Read the length of the encoded word
let n = parseInt(prompt());

// Read the encoded string
let s = prompt();

// Check if length is odd
if (n % 2 === 1) {
    // First, print characters at odd indices in reverse order
    for (let i = n - 1; i >= 0; i--) {
        if (i % 2 === 1) {
            process.stdout.write(s[i]);
        }
    }
    // Then, print characters at even indices in order
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            process.stdout.write(s[i]);
        }
    }
} else {
    // If length is even
    // First, print characters at even indices in reverse order
    for (let i = n - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            process.stdout.write(s[i]);
        }
    }
    // Then, print characters at odd indices in order
    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            process.stdout.write(s[i]);
        }
    }
}

// Print newline at the end
console.log();
