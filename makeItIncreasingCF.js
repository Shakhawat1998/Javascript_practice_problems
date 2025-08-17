/*
PROBLEM SIMPLIFICATION: Make Sequence Strictly Increasing by Halving

You are given n integers: a1, a2, ..., an.

Allowed operation:
- Select any element ai and replace it with floor(ai / 2)
  (i.e., divide by 2 and round down).

Goal:
- Make the sequence strictly increasing:
  a1 < a2 < ... < an
- Determine the **minimum number of operations** required.
- If impossible, output -1.

---------------------------------------------------

EXAMPLES:

Example 1:
Input: n = 3, sequence = [3, 6, 5]
Operations:
1) floor(6/2) = 3 → [3, 3, 5]
2) floor(3/2) = 1 → [1, 3, 5]
Output: 2

Example 2:
Input: n = 4, sequence = [5, 3, 2, 1]
- Impossible to make strictly increasing
Output: -1

Example 3:
Input: n = 5, sequence = [1, 2, 3, 4, 5]
- Already strictly increasing
Output: 0

Example 4:
Input: n = 1, sequence = [1000000000]
- Single element, trivially increasing
Output: 0

Example 5:
Input: n = 4, sequence = [2, 8, 7, 5]
Operations:
- Reduce elements from right to left while maintaining < next element
- Minimum operations required = 4
Output: 4

---------------------------------------------------

OBSERVATIONS / STRATEGY:

1) Process the array **from right to left**:
   - For each element ai, ensure ai < next element (ai+1)
   - If ai >= ai+1:
       - Keep halving ai until ai < ai+1
       - Count each halving as one operation
       - If ai becomes 0 and still not < ai+1 → impossible

2) Edge cases:
   - If array has only 1 element → 0 operations
   - If elements are already strictly increasing → 0 operations
   - If impossible to reduce an element below next element → output -1

3) Complexity:
   - n ≤ 30, ai ≤ 2e9
   - Halving an element at most ~31 times
   - Total operations feasible within constraints
*/




// Import prompt-sync to read input from console
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {
    // Read number of elements n
    let n = parseInt(prompt());

    // Read the array of integers a1, a2, ..., an
    let arr = prompt().split(" ").map(Number);

    let operations = 0; // Counter for total halving operations
    let possible = true; // Flag to check if sequence can be made strictly increasing

    // Process the array from right to left
    for (let i = n - 2; i >= 0; i--) {
        let current = arr[i];
        let next = arr[i + 1];

        // If current element is already less than next, no operation needed
        if (current < next) continue;

        let ops = 0; // Operations for this element

        // Keep halving until current < next
        while (current >= next && current > 0) {
            current = Math.floor(current / 2);
            ops++;
        }

        // If current became 0 and still >= next, impossible
        if (current >= next) {
            possible = false;
            break;
        }

        // Update array and total operations
        arr[i] = current;
        operations += ops;
    }

    // Output result for this test case
    if (possible) console.log(operations);
    else console.log(-1);
}
