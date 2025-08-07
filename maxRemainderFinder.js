// Problem: Find maximum integer k such that:
//  0 <= k <= n
//  k mod x = y
//
// Given x, y, and n, find the largest k ≤ n that leaves remainder y when divided by x.
//
// Key insight:
// For any integer m,
//   k = m * x + y
// We want the largest k ≤ n,
// so solve for m:
//   m = floor((n - y) / x)
// Then:
//   k = m * x + y
//
// Input:
// - t test cases
// - each test case: integers x, y, n
//
// Output:
// - for each test case print k as described above
//
// Example:
// Input:
// 7
// 7 5 12345
// 5 0 4
// 10 5 15
// 17 8 54321
// 499999993 9 1000000000
// 10 5 187
// 2 0 999999999
//
// Output:
// 12339
// 0
// 15
// 54306
// 999999995
// 185
// 999999998
//
// Explanation for first test case:
//  max k ≤ 12345 where k % 7 = 5
//  Compute m = floor((12345 - 5)/7) = floor(12340 / 7) = 1762
//  So k = 1762*7 + 5 = 12339
//  12339 % 7 = 5 and 12339 ≤ 12345, max possible



// Why m = floor((n - y) / x)?
//
// We want to find the maximum k such that:
//  1) 0 ≤ k ≤ n
//  2) k mod x = y
//
// Any such k can be represented as:
//    k = m * x + y, where m is an integer ≥ 0
//
// To ensure k ≤ n:
//    m * x + y ≤ n
// => m * x ≤ n - y
// => m ≤ (n - y) / x
//
// Since m must be an integer, take floor:
//    m = Math.floor((n - y) / x)
//
// Then calculate:
//    k = m * x + y
//
// This gives the largest k ≤ n that satisfies k mod x = y.




// npm install prompt-sync before running: npm install prompt-sync
const prompt = require('prompt-sync')();

const t = parseInt(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
  const [x, y, n] = prompt(`Test case #${i + 1}: `).split(' ').map(Number);

  // Calculate m = floor((n - y) / x)
  const m = Math.floor((n - y) / x);

  // Calculate k = m * x + y
  const k = m * x + y;

  console.log(k);
}
