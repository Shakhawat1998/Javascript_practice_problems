/*
Problem: Smallest number with sum of digits = x and all digits distinct

Given:

A positive integer x.

We want to find the smallest positive integer such that:

The sum of its digits equals x.

All digits are unique (no repeated digits).

If such a number does not exist, print -1.

Input:

t: number of test cases.

Then t lines follow, each containing an integer x.

Output:

For each x, print the smallest number meeting the conditions or -1 if impossible.

Examples:

Input:
4
1
5
15
50

Output:
1
5
69
-1

Explanation:

For x=1: The smallest number with sum 1 and unique digits is "1".

For x=5: The smallest number with sum 5 and unique digits is "5".

For x=15: The smallest number is "69" because 6+9=15 and digits are distinct.

For x=50: It's impossible to get sum 50 with unique digits (max sum is 1+2+...+9=45), so output -1.
*/



const prompt = require('prompt-sync')();

let t = parseInt(prompt()); // Read number of test cases

while (t--) {
    let n = parseInt(prompt()); // Read the sum x for current test case
    let s = '';                 // Result string to build the smallest number

    // Start from digit 9 down to 1 to pick the largest possible unique digits first
    for (let i = 9; i > 0; i--) {
        if (n >= i) {
            s = i.toString() + s;  // Prepend digit i to string s to ensure smallest number
            n -= i;                // Decrease n by i since digit i is used
        }
    }

    // If n is reduced exactly to zero, print the number, else print -1 (no solution)
    console.log(n === 0 ? s : "-1");
}
