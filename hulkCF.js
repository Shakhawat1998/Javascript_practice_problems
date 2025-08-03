// // Dr. Bruce Banner (a.k.a. Hulk) wants to express his feelings using a sentence with n layers of emotions.

// // He always starts with:

// // "I hate" (first layer)

// // Then he alternates between:

// // "I love" (second, fourth, sixth... even layers)

// // "I hate" (third, fifth, seventh... odd layers)

// // Between each emotion (except the last), he says "that".

// // At the end, he finishes the sentence with "it".

// // 🧾 Input
// // A single number n (1 ≤ n ≤ 100) — the number of emotional layers Hulk wants to express.

// // 🖨 Output
// // Print a sentence that follows Hulk's alternating pattern of hate/love with "that" between them and ending with "it".



// //input
// 1

// //explanation
// Only 1 layer:

// 1st → "I hate"

// End with "it"

// //output
// I hate it


// //input
// 2

// //explanation

// 1st → "I hate"

// Add "that"

// 2nd → "I love"

// End with "it

// //output
// I hate that I love it


// //input 
// 3

// //explanation 
// 1st → "I hate"

// Add "that"

// 2nd → "I love"

// Add "that"

// 3rd → "I hate"

// End with "it"

// //output 
// I hate that I love that I hate it


// 🧠 How It Works
// Build a sentence like this:

// "I hate" → "that I love" → "that I hate" → ... → "it"
// Alternate "hate" and "love" every time, add "that" between them, and finish with "it".



// Uncomment this line if using Node.js environment
const prompt = require('prompt-sync')();

// Step 1: Read the number of emotional layers
let n = parseInt(prompt()); // e.g., 3

// Step 2: Initialize an empty string to build Hulk's feelings
let s = "";

// Step 3: Loop from 1 to n to build the sentence
for (let i = 1; i <= n; i++) {
    // Add emotion based on whether the position is odd or even
    if (i % 2 !== 0) {
        s += "I hate ";
    } else {
        s += "I love ";
    }

    // Add "it" at the end, or "that" if it's not the last phrase
    if (i === n) {
        s += "it";
    } else {
        s += "that ";
    }
}

// Step 4: Print Hulk's final emotional sentence
console.log(s);
