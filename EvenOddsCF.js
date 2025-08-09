/*
Problem:
---------
Volodya takes the first n natural numbers: 1, 2, 3, ..., n.
He rearranges them by writing:
  - First all the odd numbers from 1 to n in ascending order,
  - Then all the even numbers from 1 to n in ascending order.

Given n and a position k (1 ≤ k ≤ n),
find the number that stands at position k in this new sequence.

Input:
------
Two integers n and k.

Output:
-------
The number at position k in Volodya's rearranged sequence.

Examples:
---------

Example 1:
Input:
10 3

Sequence:
Odd numbers from 1 to 10 → 1, 3, 5, 7, 9
Even numbers from 1 to 10 → 2, 4, 6, 8, 10
Combined sequence: {1, 3, 5, 7, 9, 2, 4, 6, 8, 10}

Position 3 → number 5

Output:
5

Example 2:
Input:
7 7

Sequence:
Odd numbers from 1 to 7 → 1, 3, 5, 7 (4 numbers)
Even numbers from 1 to 7 → 2, 4, 6 (3 numbers)
Combined sequence: {1, 3, 5, 7, 2, 4, 6}

Position 7 → number 6

Output:
6
*/



const prompt = require('prompt-sync')();

const [n, k] = prompt().split(' ').map(Number);

// Calculate how many odd numbers are there from 1 to n
// For example, if n=10, odd numbers = 5 (1,3,5,7,9)
// If n=7, odd numbers = 4 (1,3,5,7)
const oddCount = Math.ceil(n / 2);

let result;

if (k <= oddCount) {
    // k-th odd number = 1 + 2*(k-1)
    result = 1 + 2 * (k - 1);
} else {
    // k-th position is in the even numbers
    // Calculate position in even numbers: k - oddCount
    // Even numbers start from 2 and increase by 2
    result = 2 * (k - oddCount);
}

console.log(result);


// const n = 10;
// const k = 3;

// // Step 1: Count how many odd numbers from 1 to n
// // For n=10: odd numbers are 1,3,5,7,9 → total 5 odd numbers
// const oddCount = Math.ceil(n / 2); // 5

// // Step 2: Check if k is within the odd numbers range
// // k=3 ≤ oddCount=5, so the number at position 3 is odd

// // Step 3: Calculate the k-th odd number:
// // Formula for k-th odd number = 1 + 2*(k-1)
// // For k=3: 1 + 2*(3-1) = 1 + 4 = 5

// // So the answer is 5
// console.log(5);






// const n = 7;
// const k = 7;

// // Step 1: Count odd numbers from 1 to 7:
// // 1,3,5,7 → total 4 odd numbers
// const oddCount = Math.ceil(n / 2); // 4

// // Step 2: Check if k is within odd numbers
// // k=7 > oddCount=4, so k is in the even numbers section

// // Step 3: Calculate position in even numbers:
// // position in even part = k - oddCount = 7 - 4 = 3

// // Step 4: Calculate 3rd even number:
// // Even numbers are 2,4,6,... so 3rd even = 2 * 3 = 6

// // So the answer is 6
// console.log(6);

