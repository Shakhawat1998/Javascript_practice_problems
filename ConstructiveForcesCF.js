/*
Problem: Constructing Array with Special Property

We want to build an array s1, s2, …, sn such that:

1. No element is 0
   (every si must be non-zero).
2. For every adjacent pair (si, si+1),
   their sum must equal the sum of the entire array.

In other words:
   sum(s1...sn) = si + si+1  for all i = 1...(n-1).

Constraints:
- 2 ≤ n ≤ 1000
- -5000 ≤ si ≤ 5000
- si ≠ 0

---

Key Observations:
- If n = 2:
  Always possible.
  Because the sum of the array is just s1 + s2,
  and the adjacent pair is also (s1 + s2).
  Example:
    [9, 5] → sum = 14, s1+s2 = 14 → OK
    [-1, -2] → sum = -3, s1+s2 = -3 → OK
    [-5000, 5000] → sum = 0, s1+s2 = 0 → OK

- If n = 3:
  Impossible.
  Because we need both:
    s1+s2+s3 = s1+s2  → implies s3 = 0 (not allowed).
  So NO solution.

- If n ≥ 4:
  Solution exists.
  Trick: alternate positive and negative numbers like [1, -1, 1, -1, ...].
  Example n=4:
    [1, -1, 1, -1]
    sum = 0
    Adjacent pairs:
      (1 + -1 = 0), ( -1 + 1 = 0), (1 + -1 = 0)
    All equal to sum → OK

---

Examples:

Input:
2
2
3

Output:
YES
9 5
NO

Explanation:
1) n=2 → YES → [9, 5] works because sum=14, and s1+s2=14.
2) n=3 → NO, impossible because one element would have to be 0.

---
Summary of rules:
- n = 2 → YES (just pick any 2 non-zero numbers).
- n = 3 → NO.
- n ≥ 4 → YES (use alternating pattern like [1, -1, 1, -1, ...]).
*/




// Import prompt-sync for interactive input
const prompt = require("prompt-sync")({ sigint: true });

// Function to solve a single test case
function solve() {
    // Read n from input
    let n = parseInt(prompt("Enter n: "));

    // If n = 3, it's impossible to construct the required array
    if (n === 3) {
        console.log("NO");
        return; // Exit this test case
    }

    // Otherwise, a solution exists
    console.log("YES");

    // If n is even
    if (n % 2 === 0) {
        // Loop through each index from 0 to n-1
        for (let i = 0; i < n; i++) {
            // Print 1 for even indices, -1 for odd indices
            process.stdout.write((i % 2 === 0 ? 1 : -1) + " ");
        }
    } 
    // If n is odd (but not 3)
    else {
        // Calculate k = (n-1)/2
        let k = Math.floor((n - 1) / 2);
        // Loop through each index from 0 to n-1
        for (let i = 0; i < n; i++) {
            // Print (k-1) for even indices, -k for odd indices
            process.stdout.write((i % 2 === 0 ? k - 1 : -k) + " ");
        }
    }

    // Move to the next line after printing the array
    console.log();
}

// Read number of test cases
let t = parseInt(prompt("Enter number of test cases: "));

// Process each test case
for (let i = 0; i < t; i++) {
    solve();
}
