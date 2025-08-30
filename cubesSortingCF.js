/*
🔹 Problem Simplified:

Wheatley has n cubes, each with some volume (a[i]).
He wants to arrange them in non-decreasing order (sorted order).

Allowed operation:
👉 He can swap two NEIGHBORING cubes (like bubble sort).

But there’s a LIMIT:
👉 Wheatley won’t do it if the number of swaps needed > (n*(n-1))/2 - 1.

We need to check:
Can Wheatley sort the cubes with this condition?

----------------------------------------------------
🔹 Key Observation:
- The maximum number of swaps needed = number of inversions.
- For bubble sort worst case = n*(n-1)/2 swaps.
- Wheatley allows only up to (n*(n-1))/2 - 1 swaps.
- That means:
   ❌ If the array is strictly decreasing → needs exactly n*(n-1)/2 swaps → too many → "NO".
   ✅ Otherwise, it can be done within limit → "YES".
----------------------------------------------------

🔹 Examples:

Example 1:
n = 5
a = [5, 3, 2, 1, 4]
👉 Not fully decreasing, so it will take less than 10 swaps (limit is 9).
👉 Can be sorted. Answer = YES.

Example 2:
n = 6
a = [2, 2, 2, 2, 2, 2]
👉 Already sorted, 0 swaps needed.
👉 Answer = YES.

Example 3:
n = 2
a = [2, 1]
👉 Strictly decreasing, needs exactly 1 swap.
👉 Limit = (2*(1))/2 - 1 = 0.
👉 Needs 1 > 0 → Too many → Answer = NO.
*/

// Import prompt-sync for input (only needed if you run locally with Node.js)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());  

while (t--) {  
    // Read n (number of cubes)
    let n = parseInt(prompt());  

    // Read cube volumes as an array of integers
    let arr = prompt().split(" ").map(Number);  

    // Flag to check if array is strictly decreasing
    let strictlyDecreasing = true;  

    // Loop through the array to check if it is strictly decreasing
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] <= arr[i]) {
            // If we find any pair where previous <= current,
            // then array is NOT strictly decreasing
            strictlyDecreasing = false;  
            break;
        }
    }

    // If strictly decreasing → needs maximum swaps → too many → "NO"
    // Otherwise → "YES"
    if (strictlyDecreasing) {
        console.log("NO");
    } else {
        console.log("YES");
    }
}
