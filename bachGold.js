/*
Bachgold Problem — Simplified

Goal:
- Given an integer n (2 ≤ n ≤ 100000), represent it as the sum of 
  the maximum possible number of prime numbers.
- Output:
    1) The number of prime numbers in the sum (k)
    2) The actual prime numbers whose sum equals n

Key Idea:
- The smallest prime is 2, so to maximize the number of primes, 
  we use as many 2's as possible.
- If n is odd, we replace one "2" with a "3" so the sum remains correct.

Steps:
1. If n is even → All terms can be 2
2. If n is odd → Use (n-3)/2 twos and one 3

----------------------------------------------------------
Examples:

Example 1:
Input:
5
Explanation:
- 5 is odd → (5-3) = 2 → 2/2 = 1 two + one 3
- Numbers: 2, 3
- Count = 2
Output:
2
2 3

Example 2:
Input:
6
Explanation:
- 6 is even → 6/2 = 3 twos
- Numbers: 2, 2, 2
- Count = 3
Output:
3
2 2 2
*/
const prompt = require('prompt-sync')();

const n = Number(prompt());

let primes = [];

if (n % 2 === 0) {
  // If n is even, just fill with 2's
  for (let i = 0; i < n / 2; i++) {
    primes.push(2);
  }
} else {
  // If n is odd, put one 3 and the rest 2's
  primes.push(3);
  for (let i = 0; i < (n - 3) / 2; i++) {
    primes.push(2);
  }
}

console.log(primes.length);
console.log(primes.join(' '));
