/*
Problem:
--------
- A prime number is a number with exactly two distinct divisors: 1 and itself.
  Examples:
    Prime: 2, 3, 5, 7
    Not prime: 1, 4, 6

- The "next prime" after a prime number x is the smallest prime number greater than x.
  Examples:
    Next prime after 2 is 3
    Next prime after 3 is 5
    Next prime after 5 is 7

Scenario:
---------
Yesterday, the Gauls beat n Roman soldiers where n is prime.
Today, they beat m Roman soldiers (m > n).

Task:
-----
Determine if m is the next prime number after n.

If yes, print "YES".
Otherwise, print "NO".

Input:
------
Two integers n and m (2 ≤ n < m ≤ 50)
It is guaranteed that n is prime.

Output:
-------
"YES" if m is the next prime after n
"NO" otherwise

-----------------------------------------------------
Example 1:
Input:
3 5
Explanation:
- 3 is prime.
- The next prime after 3 is 5.
- Since m = 5 matches the next prime, output "YES".

Example 2:
Input:
7 11
Explanation:
- 7 is prime.
- The next prime after 7 is 11.
- m = 11 matches, output "YES".

Example 3:
Input:
7 9
Explanation:
- 7 is prime.
- The next prime after 7 is 11.
- m = 9 is NOT the next prime.
- Output "NO".
*/


// nextPrimeCheck.js
const prompt = require("prompt-sync")();

// Helper function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Find the next prime number after n
function nextPrimeAfter(n) {
  let candidate = n + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
}

// Read inputs
const input = prompt("Enter n and m separated by space: ").split(" ");
const n = Number(input[0]);
const m = Number(input[1]);

// Since n is guaranteed prime, just check if m equals next prime after n
if (m === nextPrimeAfter(n)) {
  console.log("YES");
} else {
  console.log("NO");
}

