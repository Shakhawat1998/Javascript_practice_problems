/*
Problem Simplified:
-------------------
We are given three integers n, k, and x.

- We need to pick k distinct integers between 1 and n.
- The sum of these k numbers must equal x.
- For each test case, print "YES" if possible, otherwise "NO".

Key Idea:
---------
The sum of chosen k numbers must lie between:
- Minimum sum = 1 + 2 + ... + k = k*(k+1)/2
- Maximum sum = n + (n-1) + ... + (n-k+1) = k*(2*n - k + 1)/2

So:
if (minSum <= x <= maxSum) → YES
else → NO


Examples Explained:
-------------------

Example Input:
12
5 3 10
5 3 3
10 10 55
6 5 20
2 1 26
187856 87856 2609202300
200000 190000 19000000000
28 5 2004
2 2 2006
9 6 40
47202 32455 613407217
185977 145541 15770805980

Example Output:
YES
NO
YES
YES
NO
NO
YES
NO
NO
NO
YES
YES


Explanation:
------------

1) n=5, k=3, x=10
   Possible numbers: {2,3,5} → sum = 10 → YES ✅

2) n=5, k=3, x=3
   Minimum sum with 3 numbers = 1+2+3=6 > 3 → Impossible → NO ❌

3) n=10, k=10, x=55
   Only choice is all numbers {1..10}, sum = 55 → YES ✅

4) n=6, k=5, x=20
   Numbers {2,3,4,5,6} → sum = 20 → YES ✅

5) n=2, k=1, x=26
   Can only pick 1 or 2 → max sum=2 < 26 → NO ❌

6) n=187856, k=87856, x=2609202300
   Check if x within [minSum, maxSum], here it fails → NO ❌

7) n=200000, k=190000, x=19000000000
   Very large values but here x fits the range → YES ✅

8) n=28, k=5, x=2004
   Max sum possible is much smaller (<2004) → NO ❌

9) n=2, k=2, x=2006
   Only sum possible = 1+2=3 ≠ 2006 → NO ❌

10) n=9, k=6, x=40
    Max sum = 9+8+7+6+5+4=39 < 40 → NO ❌

11) n=47202, k=32455, x=613407217
    x falls in range [minSum, maxSum] → YES ✅

12) n=185977, k=145541, x=15770805980
    x falls in range → YES ✅
*/





// Import prompt-sync for console input
const prompt = require("prompt-sync")({ sigint: true });

// Read number of test cases
let t = parseInt(prompt());

// Loop through each test case
for (let test = 0; test < t; test++) {
    // Read n, k, x
    let [n, k, x] = prompt().split(" ").map(Number);

    // Minimum possible sum of k distinct numbers = 1 + 2 + ... + k
    let minSum = (k * (k + 1)) / 2;

    // Maximum possible sum of k distinct numbers = n + (n-1) + ... + (n-k+1)
    let maxSum = (k * (2 * n - k + 1)) / 2;

    // If x lies between minSum and maxSum, it's possible
    if (x >= minSum && x <= maxSum) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
