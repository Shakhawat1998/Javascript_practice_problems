/*
Problem Simplified:

You are given a permutation 'a' of numbers 1 to n (no duplicates, every number appears exactly once).

You can perform an operation:
- Choose any subarray (contiguous part of the array) 
- Rearrange its elements in any order
- BUT you cannot choose the whole array for this operation

Goal:
- Sort the permutation in ascending order using the minimum number of operations.

Input:
- t : number of test cases
- For each test case:
    - n : size of the permutation
    - a[] : permutation of numbers from 1 to n

Output:
- For each test case: the minimum number of operations to sort the array

Examples Explained:

Example 1:
Input:
4
1 3 2 4

Explanation:
- The permutation is [1,3,2,4]
- We can select subarray [3,2] (positions 2 to 3) and sort it
- Resulting array becomes [1,2,3,4]
- Minimum operations = 1

Example 2:
Input:
3
1 2 3

Explanation:
- The permutation is [1,2,3], already sorted
- No operations needed
- Minimum operations = 0

Example 3:
Input:
5
2 1 4 5 3

Explanation:
- The permutation is [2,1,4,5,3]
- First operation: select subarray [4,5,3] (positions 3 to 5) -> rearrange to [3,4,5]
- Array becomes [2,1,3,4,5]
- Second operation: select subarray [2,1] (positions 1 to 2) -> rearrange to [1,2]
- Array becomes [1,2,3,4,5]
- Minimum operations = 2
*/



// Import prompt-sync to read input from the console
const prompt = require('prompt-sync')({sigint: true});

// Read number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

const results = [];

for (let k = 0; k < t; k++) {
    // Read n
    const n = parseInt(prompt(`Enter size of permutation for test case ${k+1}: `));

    // Read array elements as space-separated numbers
    const a = prompt(`Enter permutation for test case ${k+1}: `)
                .split(' ')
                .map(Number);

    // Check if array is already sorted
    let sorted = true;
    for (let i = 0; i < n; i++) {
        if (a[i] !== i + 1) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        results.push(0);
        continue;
    }

    // If first element is 1 or last element is n -> 1 operation
    if (a[0] === 1 || a[n - 1] === n) {
        results.push(1);
        continue;
    }

    // If first element is n and last element is 1 -> 3 operations
    if (a[0] === n && a[n - 1] === 1) {
        results.push(3);
        continue;
    }

    // Otherwise -> 2 operations
    results.push(2);
}

// Print all results
console.log("Minimum operations for each test case:");
console.log(results.join('\n'));
