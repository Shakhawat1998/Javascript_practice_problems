// // // // You're given a number n. You need to check if it's possible to find three distinct integers a, b, and c, such that:

// // // // Each of them is at least 2

// // // // Their product is n → a × b × c = n

// // // // If possible, print "YES" and any such values of a, b, and c.
// // // // If not, print "NO".

// // // // You have to solve this for multiple test cases.

// // // // Input:
// // // // First line: An integer t — number of test cases.

// // // // Next t lines: Each line has one integer n.

// // // // Output:
// // // // For each test case:

// // // // If possible, print "YES" followed by three numbers a b c

// // // // Otherwise, print "NO"

// // // //input
// // // 3
// // // 64
// // // 97
// // // 12345

// // //output
// // YES
// // 2 4 8
// // NO
// // YES
// // 3 5 823



// //approach
// Assume a < b < c.

// To find valid values:

// Let a be the smallest divisor of n greater than 1.

// Then, divide n by a → let n1 = n / a.

// Next, find b, the smallest divisor of n1 that is not equal to 1 or a.

// Now compute c = n / (a * b).

// If c is a valid integer (i.e., n = a * b * c) and c is distinct from both a and b and greater than 1, then output "YES" and print a b c.

// Otherwise, output "NO".


const prompt = require('prompt-sync')();  // Import prompt-sync for input

const t = parseInt(prompt());             // Read number of test cases

for (let j = 0; j < t; j++) {            // Loop over each test case
    let n = parseInt(prompt());           // Read the integer n for this test case
    let divisors = new Set();             // Create a set to store found divisors

    // Find the first divisor 'a' of n greater than 1
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {                // If i divides n exactly
            divisors.add(i);              // Add divisor 'a' to the set
            n /= i;                      // Divide n by i to reduce n
            break;                       // Stop after finding first divisor
        }
    }

    // Find the second divisor 'b' of the updated n, distinct from 'a'
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0 && !divisors.has(i)) {  // If i divides n and is not 'a'
            divisors.add(i);                      // Add divisor 'b'
            n /= i;                              // Divide n by i again
            break;                               // Stop after finding second divisor
        }
    }

    // Check if a valid third divisor 'c' exists and is distinct from 'a' and 'b'
    if (divisors.size < 2 || divisors.has(n) || n === 1) {
        // Not enough divisors found or c is not distinct or invalid
        console.log("NO");                   // Print NO if conditions not met
    } else {
        console.log("YES");                  // Otherwise, print YES
        divisors.add(n);                     // Add the third divisor 'c'
        console.log([...divisors].join(' ')); // Print the three divisors separated by spaces
    }
}
