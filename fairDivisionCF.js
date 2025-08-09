/*
Problem:
--------
Alice and Bob have `n` candies.
Each candy weighs either:
    - 1 gram
    - 2 grams
They want to split the candies so that the total weight for both is exactly equal.
You cannot cut candies in half.

We must check if such a split is possible.

Input:
------
t — number of test cases (1 ≤ t ≤ 10^4)
For each test case:
    n — number of candies (1 ≤ n ≤ 100)
    n integers — weights of candies (only 1 or 2)

Output:
-------
"YES" — if candies can be split into two groups with the same total weight.
"NO"  — otherwise.

Key Insight:
------------
1. The total weight of all candies must be even; otherwise, impossible.
2. If the total weight is even:
      - Sometimes possible, sometimes not, depending on the number of 1's and 2's.
      - If total weight is divisible by 2, you can try to form exactly half using some 1's and 2's.

----------------------------------------------------
Example Walkthroughs:
----------------------------------------------------

Example 1:
n = 2, candies = [1, 1]
Total = 2 (even)
Half = 1
→ Give 1 candy of weight 1 to each
Output: YES

Example 2:
n = 2, candies = [1, 2]
Total = 3 (odd) → cannot split evenly
Output: NO

Example 3:
n = 4, candies = [1, 2, 1, 2]
Total = 6 (even)
Half = 3
Possible: Alice gets [1, 2], Bob gets [1, 2]
Output: YES

Example 4:
n = 3, candies = [2, 2, 2]
Total = 6 (even)
Half = 3 → impossible (all candies are weight 2, can't make 3 exactly)
Output: NO

Example 5:
n = 3, candies = [2, 1, 2]
Total = 5 (odd)
Output: NO
*/


const prompt = require("prompt-sync")(); 
// Import the 'prompt-sync' module to allow user input in the terminal (synchronously).

const t = parseInt(prompt()); 
// Read the number of test cases from input, convert it to an integer, and store it in variable 't'.

while(t--) { 
    // Loop 't' times, one iteration for each test case.

    const n = parseInt(prompt()); 
    // Read the number of candies (array size) for this test case.

    const candies = prompt().split(" ").map(Number); 
    // Read a line containing the weights of the candies,
    // split it into an array of strings, 
    // and convert each element to a number.

    const total = candies.reduce((sum, w) => sum + w, 0); 
    // Calculate the total weight of all candies using 'reduce'.

    const count1 = candies.filter(w => w === 1).length; 
    // Count how many candies have weight exactly 1.

    const count2 = n - count1; 
    // Count how many candies have weight exactly 2 (since only 1 or 2 weights are possible in this problem).

    if (total % 2 !== 0) { 
        // If the total weight is odd, it cannot be split into two equal groups.
        console.log("NO");
    } else { 
        // Otherwise, total weight is even — check further.

        const half = total / 2; 
        // This is the target weight for each group if candies are divided equally.

        if (half % 2 === 0 || (half % 2 === 1 && count1 > 0)) { 
            // Condition 1: If half is even, it's possible to divide into equal groups directly.
            // Condition 2: If half is odd, at least one candy of weight 1 is needed to make a valid split.
            console.log("YES");
        } else { 
            // Otherwise, it's not possible to split equally.
            console.log("NO");
        }
    }
}

