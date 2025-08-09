/*
Problem:
--------
Polycarp needs to pay exactly `n` burles.
He has two types of coins:
    - 1 burle coin
    - 2 burles coin
He likes both equally, so he wants the counts of these coins to be as close as possible.

Goal:
-----
Find two non-negative integers:
    c1 = number of 1-burle coins
    c2 = number of 2-burles coins
such that:
    1) Total amount is exactly n:
           c1 + 2 * c2 = n
    2) |c1 - c2| is minimized (difference between counts is as small as possible)

If multiple optimal solutions exist, output any one.

Constraints:
------------
1 ≤ t ≤ 10^4
1 ≤ n ≤ 10^9

Key Insight:
------------
We want c1 ≈ c2.
Think in terms of 3's:
    - Each group of (1 coin of 1 burle + 1 coin of 2 burles) = 3 burles total.
    - So divide n into groups of 3 to keep counts balanced.

Let q = floor(n / 3), r = n % 3:
    - If r == 0 → c1 = q, c2 = q
    - If r == 1 → c1 = q + 1, c2 = q
    - If r == 2 → c1 = q, c2 = q + 1

----------------------------------------------------
Example Walkthroughs:
----------------------------------------------------

Example 1:
n = 1000
q = 1000 // 3 = 333, r = 1
→ r == 1 → c1 = 333 + 1 = 334, c2 = 333
Sum = 334*1 + 333*2 = 1000
|c1 - c2| = 1 (minimal)
Output: 334 333

Example 2:
n = 30
q = 30 // 3 = 10, r = 0
→ r == 0 → c1 = 10, c2 = 10
Sum = 10*1 + 10*2 = 30
|c1 - c2| = 0
Output: 10 10

Example 3:
n = 1
q = 1 // 3 = 0, r = 1
→ r == 1 → c1 = 0 + 1 = 1, c2 = 0
Sum = 1*1 + 0*2 = 1
|c1 - c2| = 1
Output: 1 0

Example 4:
n = 32
q = 32 // 3 = 10, r = 2
→ r == 2 → c1 = 10, c2 = 10 + 1 = 11
Sum = 10*1 + 11*2 = 32
|c1 - c2| = 1
Output: 10 11

Example 5:
n = 1000000000
q = 333333333, r = 1
→ r == 1 → c1 = 333333333 + 1 = 333333334, c2 = 333333333
Output: 333333334 333333333

Example 6:
n = 5
q = 5 // 3 = 1, r = 2
→ r == 2 → c1 = 1, c2 = 1 + 1 = 2
Sum = 1 + 4 = 5
|c1 - c2| = 1
Output: 1 2
*/



// minimizeCoinDifference.js
const prompt = require("prompt-sync")();

const t = Number(prompt("Enter number of test cases: "));

for (let test = 0; test < t; test++) {
  const n = Number(prompt(`Enter value of n for test case ${test + 1}: `));

  // Divide n by 3
  const q = Math.floor(n / 3);
  const r = n % 3;

  let c1, c2;

  // Based on remainder r, determine c1 and c2
  if (r === 0) {
    c1 = q;
    c2 = q;
  } else if (r === 1) {
    c1 = q + 1;
    c2 = q;
  } else {
    // r === 2
    c1 = q;
    c2 = q + 1;
  }

  console.log(`${c1} ${c2}`);
}

