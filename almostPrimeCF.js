/*
PROBLEM (Simplified):

We define an "almost prime" number as:
- A number that has exactly TWO distinct prime factors.

Example:
6  = 2 × 3          → prime factors = {2, 3} → exactly 2 distinct → ✅ almost prime
18 = 2 × 3 × 3      → prime factors = {2, 3} → exactly 2 distinct → ✅ almost prime
24 = 2 × 2 × 2 × 3  → prime factors = {2, 3} → exactly 2 distinct → ✅ almost prime

NOT almost prime:
4  = 2 × 2          → prime factors = {2}       → only 1 distinct → ❌
8  = 2 × 2 × 2      → prime factors = {2}       → only 1 distinct → ❌
9  = 3 × 3          → prime factors = {3}       → only 1 distinct → ❌
42 = 2 × 3 × 7      → prime factors = {2, 3, 7} → 3 distinct      → ❌

TASK:
Given a number n (1 ≤ n ≤ 3000), 
count how many numbers between 1 and n (inclusive) are almost prime.

--------------------------------------------
EXAMPLES:

Example 1:
Input:
10

Numbers from 1 to 10:
1 → no prime factors
2 → {2} → ❌
3 → {3} → ❌
4 → {2} → ❌
5 → {5} → ❌
6 → {2, 3} → ✅
7 → {7} → ❌
8 → {2} → ❌
9 → {3} → ❌
10 → {2, 5} → ✅

Almost primes: 6, 10 → total = 2
Output:
2

--------------------------------------------

Example 2:
Input:
21

Numbers from 1 to 21:
6  → {2, 3} → ✅
10 → {2, 5} → ✅
12 → {2, 3} → ✅
14 → {2, 7} → ✅
15 → {3, 5} → ✅
18 → {2, 3} → ✅
20 → {2, 5} → ✅
21 → {3, 7} → ✅

Total = 8
Output:
8
*/



// Intuition:
// A number is almost prime if it has exactly two distinct prime divisors.
// For each number from 2 to n, we find its distinct prime factors count.
// If the count is exactly 2, we increment our result.

const prompt = require("prompt-sync")(); // For local input reading

const n = parseInt(prompt()); // Read input number n
let countAlmostPrime = 0;    // Counter for almost prime numbers

// Function to count distinct prime factors of a given number x
function countDistinctPrimeFactors(x) {
    let distinctCount = 0;  // To count distinct prime divisors
    let temp = x;

    // Check divisibility by 2 first
    if (temp % 2 === 0) {
        distinctCount++;
        while (temp % 2 === 0) {
            temp /= 2;
        }
    }

    // Check for odd prime factors starting from 3
    for (let i = 3; i * i <= temp; i += 2) {
        if (temp % i === 0) {
            distinctCount++;
            while (temp % i === 0) {
                temp /= i;
            }
        }
    }

    // If after division temp > 1, it means temp is a prime itself
    if (temp > 1) distinctCount++;

    return distinctCount;
}

// Iterate from 2 to n, check if each number is almost prime
for (let num = 2; num <= n; num++) {
    if (countDistinctPrimeFactors(num) === 2) {
        countAlmostPrime++;  // Increment if exactly two distinct prime factors
    }
}

// Print the total count of almost prime numbers between 1 and n
console.log(countAlmostPrime);
