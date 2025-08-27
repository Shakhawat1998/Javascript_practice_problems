/*
Problem Simplified:
-------------------
We are given an array b[1..n].
This array b is constructed from another hidden array a[1..n].

The rules are:
1. Define x[i] = max(0, a[1], a[2], ..., a[i-1])
   - That means: x[i] is the maximum of all previous elements of a.
   - For i=1, x[1] = 0 (since no previous element).

2. Then b[i] = a[i] - x[i].

We are given b[1..n].
We need to restore the original array a[1..n].

Observation:
------------
From formula: a[i] = b[i] + x[i].
- Since x[i] = maximum so far of a[1..i-1], we can reconstruct step by step.

Algorithm:
----------
1. Start with maxSoFar = 0 (because x[1] = 0).
2. For each i from 1..n:
   - a[i] = b[i] + maxSoFar
   - Update maxSoFar = max(maxSoFar, a[i])
3. Print array a.

------------------------------------------------
Examples explained:
------------------------------------------------

Example 1:
Input:
n = 5
b = [0, 1, 1, -2, 1]

Step-by-step:
i=1: a1 = b1 + 0 = 0 + 0 = 0 → maxSoFar = 0
i=2: a2 = b2 + 0 = 1 + 0 = 1 → maxSoFar = 1
i=3: a3 = b3 + 1 = 1 + 1 = 2 → maxSoFar = 2
i=4: a4 = b4 + 2 = -2 + 2 = 0 → maxSoFar = 2
i=5: a5 = b5 + 2 = 1 + 2 = 3 → maxSoFar = 3

Output:
a = [0, 1, 2, 0, 3]

------------------------------------------------

Example 2:
Input:
n = 3
b = [1000, 999999000, -1000000000]

Step-by-step:
i=1: a1 = 1000 + 0 = 1000 → maxSoFar = 1000
i=2: a2 = 999999000 + 1000 = 1000000000 → maxSoFar = 1000000000
i=3: a3 = -1000000000 + 1000000000 = 0 → maxSoFar = 1000000000

Output:
a = [1000, 1000000000, 0]

------------------------------------------------

Example 3:
Input:
n = 5
b = [2, 1, 2, 2, 3]

Step-by-step:
i=1: a1 = 2 + 0 = 2 → maxSoFar = 2
i=2: a2 = 1 + 2 = 3 → maxSoFar = 3
i=3: a3 = 2 + 3 = 5 → maxSoFar = 5
i=4: a4 = 2 + 5 = 7 → maxSoFar = 7
i=5: a5 = 3 + 7 = 10 → maxSoFar = 10

Output:
a = [2, 3, 5, 7, 10]

------------------------------------------------
Conclusion:
-----------
- Just keep track of maxSoFar as we build `a` step by step.
- Formula: a[i] = b[i] + maxSoFar
- Update maxSoFar = max(maxSoFar, a[i])
*/



// Import prompt-sync for taking input from the user
const prompt = require("prompt-sync")();

// Read n (the size of the array)
let n = parseInt(prompt("Enter n: "));

// Read array b (space-separated integers)
let b = prompt("Enter array b: ").split(" ").map(Number);

// Array a to store the result
let a = [];

// Keep track of the maximum value so far in array a
let maxSoFar = 0;

// Step through each element
for (let i = 0; i < n; i++) {
    // Formula: a[i] = b[i] + maxSoFar
    a[i] = b[i] + maxSoFar;

    // Update maxSoFar for the next iteration
    maxSoFar = Math.max(maxSoFar, a[i]);
}

// Print the restored array a
console.log("Restored array a:", a.join(" "));

/*
Explanation:
------------
We know:
   b[i] = a[i] - x[i]
   x[i] = maximum of (a[1]...a[i-1]), with x[1] = 0

So rearranging:
   a[i] = b[i] + x[i]

Algorithm:
1. Start with maxSoFar = 0
2. For each i:
     a[i] = b[i] + maxSoFar
     maxSoFar = max(maxSoFar, a[i])

Example:
Input:
n = 5
b = [0, 1, 1, -2, 1]

Steps:
i=0: a[0] = 0+0=0 → maxSoFar=0
i=1: a[1] = 1+0=1 → maxSoFar=1
i=2: a[2] = 1+1=2 → maxSoFar=2
i=3: a[3] = -2+2=0 → maxSoFar=2
i=4: a[4] = 1+2=3 → maxSoFar=3

Output: [0, 1, 2, 0, 3]
*/
