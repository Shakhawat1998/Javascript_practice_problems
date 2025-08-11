/*
Problem: Maximum Good Pairs with Reordering

We have an array `a` of `n` integers.
A pair of indices (i, j) is called "good" if:
    1 ≤ i < j ≤ n   AND
    gcd(a[i], 2 * a[j]) > 1
(where gcd(x, y) is the greatest common divisor).

We can reorder the array in ANY way we want to maximize the number of good pairs.

We need to output the MAXIMUM possible number of such pairs for each test case.

-----------------------------------------------------
Key Idea:
- Even numbers are powerful here because:
    For an even number E and any number X, gcd(E, 2 * X) ≥ 2.
    That means, if a[i] is even, it will always make a good pair with ANY a[j] (j > i).
- So, to maximize pairs, we put ALL even numbers first in the array.
- Then, for odd numbers at the end, we only check pairs where gcd(a[i], a[j]) > 1.

-----------------------------------------------------
Example 1:
Input:
n = 4
a = [3, 6, 5, 3]

Step 1: Rearrange with evens first → [6, 3, 5, 3]
Step 2:
- a[1] = 6 (even) → pairs with all later elements: (6,3), (6,5), (6,3) → 3 pairs
- a[2] = 3 → check gcd(3, 2*5) = gcd(3,10) = 1 (not good)
              gcd(3, 2*3) = gcd(3,6) = 3 (>1, good) → +1 pair
- Total = 3 + 1 = 4

Output: 4

-----------------------------------------------------
Example 2:
n = 2
a = [1, 7]

Step 1: No evens → stays [1, 7]
Step 2:
- Only one pair possible: (1, 7)
  gcd(1, 2*7) = gcd(1,14) = 1 → not good

Output: 0

-----------------------------------------------------
Example 3:
n = 5
a = [1, 4, 2, 4, 1]

Step 1: Rearrange evens first → [4, 2, 4, 1, 1]
Step 2:
- a[1] = 4 (even) → pairs with all later elements: (4,2), (4,4), (4,1), (4,1) → 4 pairs
- a[2] = 2 (even) → pairs with all later elements: (2,4), (2,1), (2,1) → 3 pairs
- a[3] = 4 (even) → pairs with all later elements: (4,1), (4,1) → 2 pairs
- a[4] = 1 (odd)  → gcd(1, 2*1) = 1 → no pairs
- Total = 4 + 3 + 2 = 9

Output: 9
*/



// Import prompt-sync to read input (for Node.js)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Loop over all test cases
while (t--) {

    // Read n (number of elements in array)
    let n = parseInt(prompt());

    // Read array elements and convert to integers
    let a = prompt().split(" ").map(Number);

    // Step 1: Sort the array so that even numbers come first
    // We check (x % 2) to know if a number is even or odd
    // Sorting rule: even numbers (0) come before odd numbers (1)
    a.sort((x, y) => (x % 2) - (y % 2));

    let count = 0; // To store total number of good pairs

    // Step 2: Check all pairs (i, j) where i < j
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {

            // Calculate gcd(a[i], 2 * a[j])
            if (gcd(a[i], 2 * a[j]) > 1) {
                count++; // If gcd > 1, it's a good pair
            }
        }
    }

    // Step 3: Output the result for this test case
    console.log(count);
}

// Helper function to compute gcd of two numbers
function gcd(x, y) {
    while (y !== 0) {
        let temp = x % y;
        x = y;
        y = temp;
    }
    return x;
}
