
// // In the Berland language, words are translated into the Birland language by reversing the word.

// // 👉 Task:
// // You are given two words:

// // s → original word in Berland

// // t → translated word in Birland

// // Check if t is the reverse of s.

// // If yes, print "YES"

// // If not, print "NO"



// //input
// code
// edoc

// Reversing s = "code" gives "edoc"
// ✅ So, t == reverse(s) → Output: YES

// //input
// abb
// aba


// Reverse of "abb" is "bba", which ≠ "aba"
// ❌ So, Output: NO

// //input
// code
// code


// Reverse of "code" is "edoc"

// But t = code → same as s
// ❌ So, Output: NO



// Constraints:
// Only lowercase letters

// No spaces

// 1 ≤ length ≤ 100



const prompt = require('prompt-sync')();

// Read inputs
let a = prompt(); // original word in Berland
let b = prompt(); // translated word in Birland

// Reverse the first word
let reversedA = a.split('').reverse().join('');

// Compare and print result
if (reversedA === b) {
    console.log("YES");
} else {
    console.log("NO");
}
