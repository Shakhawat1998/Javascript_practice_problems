/*
Problem:
--------
We have two arrays `a` and `b`, both of length `n` (all positive integers).
We can make at most `k` moves.
In one move:
    - Pick any index i from array `a` and any index j from array `b`
    - Swap a[i] with b[j]

Goal:
-----
Maximize the sum of elements in array `a` after performing at most `k` swaps.

Key Idea:
---------
- To maximize the sum of `a`, we should replace its smallest elements
  with the largest elements from `b`.
- Sort `a` in ascending order.
- Sort `b` in descending order.
- Swap the first `k` elements from these sorted lists if it increases `a`'s sum.
- Stop early if `a[i] >= b[i]` during swaps (no benefit to swap further).

Constraints:
------------
1 ≤ t ≤ 200
1 ≤ n ≤ 30
0 ≤ k ≤ n
1 ≤ a[i], b[i] ≤ 30

----------------------------------------------------
Example Walkthroughs:
----------------------------------------------------

Example 1:
----------
n = 2, k = 1
a = [1, 2]
b = [3, 4]

Sorted:
a = [1, 2] (ascending)
b = [4, 3] (descending)

Swap first pair (a[0], b[0]) → swap 1 and 4:
a = [4, 2]
Sum = 4 + 2 = 6
Output: 6

----------------------------------------------------

Example 2:
----------
n = 5, k = 5
a = [5, 5, 6, 6, 5]
b = [1, 2, 5, 4, 3]

Sorted:
a = [5, 5, 5, 6, 6]
b = [5, 4, 3, 2, 1]

No swaps help because every b[i] ≤ a[i]
Sum stays = 27
Output: 27

----------------------------------------------------

Example 3:
----------
n = 5, k = 3
a = [1, 2, 3, 4, 5]
b = [10, 9, 10, 10, 9]

Sorted:
a = [1, 2, 3, 4, 5]
b = [10, 10, 10, 9, 9]

Swap 1 ↔ 10 → a = [10, 2, 3, 4, 5]
Swap 2 ↔ 10 → a = [10, 10, 3, 4, 5]
Swap 3 ↔ 10 → a = [10, 10, 10, 4, 5]
Sum = 39
Output: 39

----------------------------------------------------

Example 4:
----------
n = 4, k = 0
a = [2, 2, 4, 3]
b = [2, 4, 2, 3]

No swaps allowed.
Sum = 2 + 2 + 4 + 3 = 11
Output: 11

----------------------------------------------------

Example 5:
----------
n = 4, k = 4
a = [1, 2, 2, 1]
b = [4, 4, 5, 4]

Sorted:
a = [1, 1, 2, 2]
b = [5, 4, 4, 4]

Swap 1 ↔ 5 → a = [5, 1, 2, 2]
Swap 1 ↔ 4 → a = [5, 4, 2, 2]
Swap 2 ↔ 4 → a = [5, 4, 4, 2]
Swap 2 ↔ 4 → a = [5, 4, 4, 4]
Sum = 17
Output: 17
*/





// Program: maximizeArraySumAfterKSwaps.js
const prompt = require("prompt-sync")();

// Read number of test cases
let t = Number(prompt("Enter number of test cases: "));

for (let testCase = 1; testCase <= t; testCase++) {
    // Read n and k
    let [n, k] = prompt(`Enter n and k for test case ${testCase}: `)
        .split(" ")
        .map(Number);

    // Read array a
    let a = prompt(`Enter array a (${n} integers): `)
        .split(" ")
        .map(Number);

    // Read array b
    let b = prompt(`Enter array b (${n} integers): `)
        .split(" ")
        .map(Number);

    /*
      Step 1: Sort a in ascending order (smallest first)
      Step 2: Sort b in descending order (largest first)
      Step 3: Swap up to k times if b[i] > a[i]
    */
    a.sort((x, y) => x - y);
    b.sort((x, y) => y - x);

    for (let i = 0; i < k && i < n; i++) {
        if (b[i] > a[i]) {
            // Swap
            let temp = a[i];
            a[i] = b[i];
            b[i] = temp;
        } else {
            // No further swaps will help
            break;
        }
    }

    // Calculate sum of a
    let sumA = a.reduce((sum, val) => sum + val, 0);
    console.log(`Maximum possible sum for test case ${testCase}: ${sumA}`);
}

/*
Example Run:
------------
Enter number of test cases: 5
Enter n and k for test case 1: 2 1
Enter array a (2 integers): 1 2
Enter array b (2 integers): 3 4
Maximum possible sum for test case 1: 6

Enter n and k for test case 2: 5 5
Enter array a (5 integers): 5 5 6 6 5
Enter array b (5 integers): 1 2 5 4 3
Maximum possible sum for test case 2: 27

Enter n and k for test case 3: 5 3
Enter array a (5 integers): 1 2 3 4 5
Enter array b (5 integers): 10 9 10 10 9
Maximum possible sum for test case 3: 39

Enter n and k for test case 4: 4 0
Enter array a (4 integers): 2 2 4 3
Enter array b (4 integers): 2 4 2 3
Maximum possible sum for test case 4: 11

Enter n and k for test case 5: 4 4
Enter array a (4 integers): 1 2 2 1
Enter array b (4 integers): 4 4 5 4
Maximum possible sum for test case 5: 17
*/
