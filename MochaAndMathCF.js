// Mocha has an array of numbers (length = n).
// She can repeatedly choose any interval [l, r] in the array.
// Then, for all elements in that interval, she replaces:
//   a[l + i] = a[l + i] & a[r - i]   (where & is the bitwise AND)
// This replacement happens simultaneously for all i from 0 to r-l.
// Goal: Perform operations in any order/number of times to minimize the maximum element in the array.
// Output: The smallest possible value of the largest element after operations.


// ------------------- Example 1 -------------------
/*
Input:
n = 2
array = [1, 2]

Operation:
Choose [1, 2]:
  - a1 = 1 & 2 = 0
  - a2 = 2 & 1 = 0
Result: [0, 0]
Max value = 0

Answer: 0
*/


// ------------------- Example 2 -------------------
/*
Input:
n = 3
array = [1, 1, 3]

Operation:
Choose [1, 3]:
  - a1 = 1 & 3 = 1
  - a2 = 1 & 1 = 1
  - a3 = 3 & 1 = 1
Result: [1, 1, 1]
Max value = 1

Answer: 1
*/


// ------------------- Example 3 -------------------
/*
Input:
n = 4
array = [3, 11, 3, 7]

Best approach:
No matter how we apply operations, the smallest maximum achievable is 3.

Answer: 3
*/


// ------------------- Example 4 -------------------
/*
Input:
n = 5
array = [11, 7, 15, 3, 7]

Operation plan:
We can apply operations to reduce large numbers, but the smallest max possible is 3.

Answer: 3
*/




// Import prompt-sync for local input testing (comment out if using online judge)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
for (let i= 0; i< t; i++) {
    // Read n (length of array)
    let n = parseInt(prompt());
    
    // Read the array elements
    let arr = prompt().split(" ").map(Number);
    
    // Initialize result as the first element
    // This will hold the AND of all numbers
    let andAll = arr[0];
    
    // Perform AND operation across the entire array
    for (let i = 1; i < n; i++) {
        andAll &= arr[i];  // Bitwise AND with next element
    }
    
    // The AND of the whole array is the minimal possible maximum
    console.log(andAll);
}

/*
Why this works:
---------------
The operation "a[l+i] = a[l+i] & a[r-i]" can only turn bits OFF (from 1 to 0), never ON.
By choosing intervals cleverly, we can propagate AND results between elements until
all elements have the same bits set as the global AND of the entire array.

Example:
---------
arr = [11, 7, 15, 3, 7]
Binary:
  11 = 1011
   7 = 0111
  15 = 1111
   3 = 0011
   7 = 0111
AND of all = 0011 (decimal 3)

No matter how we do the operations, we cannot have any bit set in the final array
that is not present in all numbers initially. So answer = AND of all numbers.
*/
