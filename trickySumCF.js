/*
Problem Simplified:

You are asked to calculate a special sum for each number n:

- Sum all integers from 1 to n.
- But, if a number is a power of 2 (1, 2, 4, 8, 16, ...), 
  subtract it instead of adding it.

Examples:

Example 1:
Input: 4
Numbers: 1, 2, 3, 4
- 1 is 2^0 -> subtract -> -1
- 2 is 2^1 -> subtract -> -2
- 3 is not a power of 2 -> add -> +3
- 4 is 2^2 -> subtract -> -4
Sum: -1 -2 +3 -4 = -4
Output: -4

Example 2:
Input: 1000000000
- Sum numbers from 1 to 1000000000
- Subtract all powers of 2 within this range
Output: 499999998352516354

Input Format:
- First line: t (number of test cases)
- Next t lines: each line contains n

Output Format:
- For each n, print the calculated sum
*/



/*
Problem Intuition:

1. The naive approach of iterating from 1 to n is too slow for n up to 1e9.
2. Sum of all numbers from 1 to n is given by formula: n*(n+1)/2
3. We need to subtract twice the sum of all powers of 2 from 1 to n:
   - Once because they are included in the sum
   - Once more because we need to negate them
4. All powers of 2 up to n can be generated efficiently using bit shifting.
*/

const prompt = require('prompt-sync')({ sigint: true });

// Read number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

const testCases = [];
for (let i = 0; i < t; i++) {
    const n = BigInt(prompt(`Enter n for test case ${i + 1}: `));
    testCases.push(n);
}

const results = [];

for (let k = 0; k < t; k++) {
    const n = testCases[k];

    // Sum of 1..n using formula
    let totalSum = n * (n + 1n) / 2n;

    // Sum of powers of 2 up to n
    let powSum = 0n;
    let power = 1n;
    while (power <= n) {
        powSum += power;
        power *= 2n;
    }

    // Subtract twice the sum of powers of 2
    results.push(totalSum - 2n * powSum);
}

// Print all results
console.log("Results:");
results.forEach(r => console.log(r.toString()));

