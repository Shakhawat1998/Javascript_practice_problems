/*
PROBLEM SIMPLIFICATION:

We are given:
- An array a of length n
- An integer x

Operation allowed:
- Take two adjacent elements and replace them with their sum
- This reduces the size of the array by 1
- You can do this operation any number of times (including 0 times)

Beauty of an array b = sum over all elements ceil(bi / x)

Our goal:
- Find the MINIMUM beauty we can achieve
- Find the MAXIMUM beauty we can achieve

---------------------------------------------------
KEY INSIGHT:

1) MAX beauty:
   - If we never merge anything, we maximize ceil(ai / x) individually.
   - So max beauty = sum( ceil(ai / x) ) for all ai.

2) MIN beauty:
   - If we merge everything into a single element = sum(a).
   - Then beauty = ceil( sum(a) / x ).

So the answer is:
min_beauty = ceil( sum(a) / x )
max_beauty = sum( ceil(ai / x) )

---------------------------------------------------
EXAMPLES:

Example 1:
Input:
n=3, x=3
a = [3,6,9]

- sum(a) = 18
- min_beauty = ceil(18/3) = ceil(6) = 6
- max_beauty = ceil(3/3)+ceil(6/3)+ceil(9/3)
             = 1+2+3 = 6

Answer: 6 6

---------------------------------------------------

Example 2:
Input:
n=3, x=3
a = [6,4,11]

- sum(a) = 21
- min_beauty = ceil(21/3) = ceil(7) = 7
- max_beauty = ceil(6/3)+ceil(4/3)+ceil(11/3)
             = 2+2+4 = 8

Answer: 7 8

---------------------------------------------------

So the problem reduces to:
- min_beauty = ceil(total_sum / x)
- max_beauty = sum( ceil(ai / x) )
*/



// Import prompt-sync for reading input from console
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {
    // Read n (size of array) and x (divisor)
    let [n, x] = prompt().split(" ").map(Number);

    // Read the array a
    let a = prompt().split(" ").map(Number);

    // Compute total sum of array
    let totalSum = a.reduce((acc, val) => acc + val, 0);

    // MINIMUM beauty:
    // If we merge everything → one element = totalSum
    // ceil(totalSum / x)
    let minBeauty = Math.ceil(totalSum / x);

    // MAXIMUM beauty:
    // No merging → sum of ceil(ai / x) for each element
    let maxBeauty = a.reduce((acc, val) => acc + Math.ceil(val / x), 0);

    // Print the result for this test case
    console.log(minBeauty, maxBeauty);
}
