/*
Problem: Make All Elements Equal by Incrementing Selected Elements

Polycarp received an array of integers and wants to make all elements equal.
He can perform an operation any number of times. In one operation, he can:
    - Choose any number of indices (even just one), and
    - Increase the values at those indices by 1.

Goal:
    Find the **minimum number of operations** required to make all elements in the array equal.

----------------------------------------------------------------
Input:
    The first line contains a single integer t (1 ≤ t ≤ 10^4)
        → the number of test cases.

    For each test case:
        - The first line contains an integer n (1 ≤ n ≤ 50) — number of elements.
        - The second line contains n integers a1, a2, ..., an (1 ≤ ai ≤ 10^9)

Output:
    For each test case, print a single integer:
        → The minimum number of operations needed to make all elements equal.

----------------------------------------------------------------
Example:

Input:
3
6
3 4 2 4 1 2
3
1000 1002 998
2
12 11

Explanation of Examples:

Test case 1:
Array = [3, 4, 2, 4, 1, 2]

Step 1: Choose a3=2 and a5=1 → increase both by 1 → [3, 4, 3, 4, 2, 2]
Step 2: Choose a1=3, a5=2, a6=2 → increase by 1 → [4, 4, 3, 4, 3, 3]
Step 3: Choose a3=3, a5=3, a6=3 → increase by 1 → [4, 4, 4, 4, 4, 4]
→ Total operations = 3

Test case 2:
Array = [1000, 1002, 998]

Step 1: Increase a1 and a3 → [1001, 1002, 999]
Step 2: Increase a1 and a3 again → [1002, 1002, 1000]
Step 3: Increase a3 → [1002, 1002, 1001]
Step 4: Increase a3 again → [1002, 1002, 1002]
→ Total operations = 4

Test case 3:
Array = [12, 11]

Step 1: Increase a2 → [12, 12]
→ Total operations = 1

----------------------------------------------------------------
How to Solve:

Let `maxElement` = maximum value in the array.
For each element:
    Add (maxElement - element) to a running sum.
Why? Because we must increase every smaller element to match the maximum.
So the total number of operations is:
    → sum of (maxElement - each element)

This gives the minimum number of operations.

*/


// Import prompt-sync to read input from console
const prompt = require('prompt-sync')();

// Read number of test cases
const t = parseInt(prompt());

// Loop over each test case
for (let test = 0; test < t; test++) {
  // Read the number of elements in the array
  const n = parseInt(prompt());

  // Read the array elements as numbers
  const arr = prompt().split(' ').map(Number);

  // Find the maximum element in the array
  const maxElement = Math.max(...arr);

  // Calculate the sum of differences between maxElement and each element
  let operations = 0;
  for (let i = 0; i < n; i++) {
    operations += maxElement - arr[i];
  }

  // Output the minimum number of operations for this test case
  console.log(operations);
}
