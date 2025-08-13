/*
Problem Summary:
----------------
You are given two numbers a and b (the bets in a race). 
The excitement of the fans is defined as gcd(a, b) (greatest common divisor).

Operations you can perform any number of times:
1. Increase both a and b by 1.
2. Decrease both a and b by 1 (only if both a > 0 and b > 0).

Task:
-----
- Determine the **maximum possible excitement** (max gcd(a, b)) you can get.
- Determine the **minimum number of moves** to achieve this maximum excitement.

Special case:
- If the fans can get **infinite excitement** (gcd grows without bound), print `0 0`.

---

Input:
------
t → number of test cases
For each test case:
    a b

Constraints:
------------
1 ≤ t ≤ 5000
0 ≤ a, b ≤ 10^18

---

Examples Explained:
-------------------

Example 1:
Input:
a = 8, b = 5
Step 1: The difference = |8 - 5| = 3
Maximum gcd possible = 3
To achieve gcd = 3:
- Increase both numbers 1 time → a = 9, b = 6
- gcd(9,6) = 3
Moves required = 1
Output: 3 1

Example 2:
Input:
a = 1, b = 2
Step 1: Difference = |1-2| = 1
- Maximum gcd possible = 1
- Already gcd(1,2) = 1 → no moves needed
Output: 1 0

Example 3:
Input:
a = 4, b = 4
Step 1: Numbers are equal → difference = 0
- Maximum gcd can grow infinitely by repeatedly increasing both a and b
- Fans can get infinite excitement
Output: 0 0

Example 4:
Input:
a = 3, b = 9
Step 1: Difference = |3-9| = 6
Maximum gcd possible = 6
- To achieve gcd = 6:
  - Decrease both numbers 3 times → a = 0, b = 6
  - gcd(0,6) = 6
Moves required = 3
Output: 6 3

---

Notes:
------
- gcd(x, 0) = x
- If a = b, you can keep increasing both indefinitely → infinite excitement
- Otherwise, maximum gcd = |a - b|
- Minimum moves = min(a % gcd, gcd - (a % gcd))
*/


// Import prompt-sync for local testing (remove in online judge)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

while (t--) {
    // Read bets a and b
    let [a, b] = prompt().split(" ").map(BigInt);

    // If a and b are equal, you can increase both infinitely
    // So excitement can grow without bound
    if (a === b) {
        console.log("0 0");
        continue;
    }

    // Intuition: The maximum gcd we can get is the difference between a and b
    // Let diff = |a - b|
    let diff = (a > b ? a - b : b - a);

    // To achieve gcd = diff, we need to adjust either a or b
    // The minimal moves is either:
    // - increase smaller number until divisible by diff
    // - decrease larger number until divisible by diff
    // So minMoves = min(a % diff, diff - (a % diff))
    let rem = a % diff;
    let minMoves = rem < diff - rem ? rem : diff - rem;

    // Output the maximum excitement (diff) and minimum moves
    console.log(diff.toString(), minMoves.toString());
}

/*
Intuition:
----------
1. If a == b → both numbers are same, we can increase them infinitely → infinite excitement → 0 0.
2. Otherwise:
   - Let diff = |a - b|
   - The largest gcd achievable between two numbers is exactly diff.
   - To make gcd(a', b') = diff:
       a' and b' should be multiples of diff apart
       → we can either increase a to next multiple of diff
       → or decrease a to previous multiple of diff
       → min moves = min(a % diff, diff - (a % diff))
3. This works for all a, b up to 10^18 efficiently without loops.
*/


