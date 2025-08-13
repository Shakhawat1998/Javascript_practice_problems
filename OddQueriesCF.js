// Problem Summary:
// We have an array of integers a1, a2, ..., an.
// We will get q queries. Each query is of the form: l r k
// This means: if we replace ALL elements from index l to r with the number k,
// will the SUM of the ENTIRE array become ODD? 
// (The queries are independent — changes don’t carry over to the next query.)

// Input Format:
// t = number of test cases
// For each test case:
//   n, q = size of array and number of queries
//   n integers = the array elements
//   q lines = each with l, r, k (range and replacement value)

// Output:
// For each query, print "YES" if the sum would be odd after replacement, otherwise "NO".

// Constraints:
// 1 ≤ t ≤ 10^4
// 1 ≤ n ≤ 2*10^5
// 1 ≤ q ≤ 2*10^5
// 1 ≤ ai ≤ 10^9
// 1 ≤ l ≤ r ≤ n
// 1 ≤ k ≤ 10^9
// Total sum of n over all test cases ≤ 2*10^5
// Total sum of q over all test cases ≤ 2*10^5


// Example 1:
// Input:
// 2
// 5 5
// 2 2 1 3 2
// 2 3 3
// 2 3 4
// 1 5 5
// 1 4 9
// 2 4 3
// 10 5
// 1 1 1 1 1 1 1 1 1 1
// 3 8 13
// 2 5 10
// 3 8 10
// 1 10 2
// 1 9 100

// Output:
// YES
// YES
// YES
// NO
// YES
// NO
// NO
// NO
// NO
// YES

// Detailed Explanation for Test Case 1:
// Original array: [2, 2, 1, 3, 2], sum = 10 (even)

// Query 1: l=2, r=3, k=3
// Replace a2, a3 → [2, 3, 3, 3, 2], sum = 13 (odd) → YES

// Query 2: l=2, r=3, k=4
// Replace a2, a3 → [2, 4, 4, 3, 2], sum = 15 (odd) → YES

// Query 3: l=1, r=5, k=5
// Replace all → [5, 5, 5, 5, 5], sum = 25 (odd) → YES

// Query 4: l=1, r=4, k=9
// Replace first 4 elements → [9, 9, 9, 9, 2], sum = 38 (even) → NO

// Query 5: l=2, r=4, k=3
// Replace → [2, 3, 3, 3, 2], sum = 13 (odd) → YES


// Detailed Explanation for Test Case 2:
// Original array: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], sum = 10 (even)

// Query 1: l=3, r=8, k=13
// Replace → [1, 1, 13, 13, 13, 13, 13, 13, 1, 1]
// Sum = 84 (even) → NO

// Query 2: l=2, r=5, k=10
// Replace → [1, 10, 10, 10, 10, 1, 1, 1, 1, 1]
// Sum = 46 (even) → NO

// Query 3: l=3, r=8, k=10
// Replace → [1, 1, 10, 10, 10, 10, 10, 10, 1, 1]
// Sum = 64 (even) → NO

// Query 4: l=1, r=10, k=2
// Replace all → [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
// Sum = 20 (even) → NO

// Query 5: l=1, r=9, k=100
// Replace first 9 → [100, 100, 100, 100, 100, 100, 100, 100, 100, 1]
// Sum = 901 (odd) → YES



// Import prompt-sync for local testing (remove in online judges)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt()); // Number of test cases

while (t--) {
    // Read n (array length) and q (number of queries)
    let [n, q] = prompt().split(" ").map(Number);

    // Read the array
    let arr = prompt().split(" ").map(Number);

    // Compute prefix sum array for fast range sum queries
    // prefix[i] = sum of first i elements (1-indexed)
    let prefix = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + arr[i - 1];
    }

    // Total sum of the array (used for O(1) checks)
    let totalSum = prefix[n];

    // Process each query
    while (q--) {
        // Read l, r, k for the query
        let [l, r, k] = prompt().split(" ").map(Number);

        // Step 1: Find the sum of the range [l, r] in O(1) using prefix sums
        let rangeSum = prefix[r] - prefix[l - 1];

        // Step 2: Find the length of the range
        let rangeLength = r - l + 1;

        // Step 3: Compute what the new sum of the array would be
        // New sum = old total sum - old sum of range + (rangeLength * k)
        let newSum = totalSum - rangeSum + (rangeLength * k);

        // Step 4: Check if the new sum is odd
        if (newSum % 2 !== 0) {
            console.log("YES"); // Odd → YES
        } else {
            console.log("NO"); // Even → NO
        }
    }
}

/*
Intuition:
-----------
- If we replaced the elements in [l, r] with k, the only change to the sum
  is that the old sum of that segment is removed and replaced with (k * segment length).
- We precompute prefix sums to quickly find range sums without iterating every time.
- This makes each query O(1) instead of O(n).
- Finally, we check if the new total sum is odd or even.

Example:
---------
Array: [2, 2, 1, 3, 2], totalSum = 10
Query: l=2, r=3, k=3
rangeSum = prefix[3] - prefix[1] = 5
rangeLength = 2
newSum = 10 - 5 + (2 * 3) = 11 (odd) → YES
*/
