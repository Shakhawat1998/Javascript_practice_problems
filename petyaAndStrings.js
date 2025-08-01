// // You are given two strings of the same length, containing uppercase and lowercase letters.

// // You need to compare these two strings ignoring letter case (treat uppercase and lowercase as the same).

// // If the first string is lexicographically less than the second, print -1.

// // If the first string is lexicographically greater than the second, print 1.

// // If the strings are equal (ignoring case), print 0.

// // Input:
// // Two lines, each containing a string of equal length (1 to 100 characters).

// // Strings contain only uppercase and lowercase Latin letters.

// // Output:
// // Print -1, 0, or 1 based on the comparison rules above.



// aaaa
// aaaA

// 0


// abs
// Abz


// -1


// abcdefg
// AbCdEfF


// 1


// Summary:
// Compare two strings ignoring case and output -1, 0, or
//  1 depending on lex order.


const prompt = require('prompt-sync')();

let a = prompt();
let b = prompt();

a = a.toLowerCase();
b = b.toLowerCase();

for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
        console.log(-1);
        process.exit(0);
    } else if (a[i] > b[i]) {
        console.log(1);
        process.exit(0);
    }
}

console.log(0);
