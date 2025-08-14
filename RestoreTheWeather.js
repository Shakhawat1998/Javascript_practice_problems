/*
Problem Summary:
----------------
We have:
1. Array `a` = Forecast temperatures for `n` days.
2. Array `b` = Actual temperatures for those `n` days, but in mixed order.
3. `k` = Maximum allowed difference between forecast and actual temperature for the SAME day.

Goal:
-----
We need to rearrange `b` so that:
    |a[i] - b[i]| <= k   (for all i from 1 to n)

If there are multiple valid answers, any one of them is fine.

Constraints:
------------
1 <= t <= 10^4        // Number of test cases
1 <= n <= 10^5        // Days per test case
Sum of n over all test cases <= 10^5
-10^9 <= a[i], b[i] <= 10^9
0 <= k <= 10^9
We are guaranteed that at least one valid rearrangement exists.

---------------------------------------------------
Example 1:
----------
n = 5, k = 2
a = [1, 3, 5, 3, 9]    // Forecast temps
b = [2, 5, 11, 2, 4]   // Actual temps (mixed order)

We rearrange b → [2, 2, 5, 4, 11]
Check each day:
Day 1: |1 - 2| = 1 <= 2 ✅
Day 2: |3 - 2| = 1 <= 2 ✅
Day 3: |5 - 5| = 0 <= 2 ✅
Day 4: |3 - 4| = 1 <= 2 ✅
Day 5: |9 - 11| = 2 <= 2 ✅
Output: 2 2 5 4 11

---------------------------------------------------
Example 2:
----------
n = 6, k = 1
a = [-1, 3, -2, 0, -5, -1]
b = [-4, 0, -1, 4, 0, 0]

We rearrange b → [0, 4, -1, 0, -4, 0]
Check:
| -1 - 0 | = 1 <= 1 ✅
|  3 - 4 | = 1 <= 1 ✅
| -2 - (-1) | = 1 <= 1 ✅
|  0 - 0 | = 0 <= 1 ✅
| -5 - (-4) | = 1 <= 1 ✅
| -1 - 0 | = 1 <= 1 ✅
Output: 0 4 -1 0 -4 0

---------------------------------------------------
Example 3:
----------
n = 3, k = 3
a = [7, 7, 7]
b = [9, 4, 8]

Possible rearrangement: [8, 4, 9]
Check:
| 7 - 8 | = 1 <= 3 ✅
| 7 - 4 | = 3 <= 3 ✅
| 7 - 9 | = 2 <= 3 ✅
Output: 8 4 9

---------------------------------------------------
Key idea for solving:
---------------------
1. Sort `a` with their original indices.
2. Sort `b`.
3. Match the smallest possible `b` values to the smallest `a` values
   (because |a[i] - b[i]| <= k always possible).
4. Put matched `b` values back into original positions.
*/



// Import prompt-sync for local input in VS Code
const prompt = require("prompt-sync")();

// Read number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

// Store results for all test cases
let results = [];

for (let i= 0; i < t; i++) {
    // Read n and k
    let [n, k] = prompt("Enter n and k: ").split(" ").map(Number);

    // Read forecast temperatures array `a`
    let a = prompt("Enter forecast temps: ").split(" ").map(Number);

    // Read actual temperatures array `b` (mixed order)
    let b = prompt("Enter actual temps (mixed): ").split(" ").map(Number);

    // Step 1: Store `a` values along with their original indices
    let aWithIndex = a.map((val, i) => [val, i]);

    // Step 2: Sort `aWithIndex` by forecast temperature
    aWithIndex.sort((x, y) => x[0] - y[0]);

    // Step 3: Sort `b` so we can match smallest forecast with smallest actual temp
    b.sort((x, y) => x - y);

    // Step 4: Prepare array for rearranged `b`
    let rearrangedB = new Array(n);

    // Step 5: Match sorted forecast with sorted actual temp
    for (let i = 0; i < n; i++) {
        let originalIndex = aWithIndex[i][1]; // get original position
        rearrangedB[originalIndex] = b[i];    // assign in correct day position
    }

    // Step 6: Store result for this test case
    results.push(rearrangedB.join(" "));
}

// Output all results
console.log("\nResults:");
console.log(results.join("\n"));
