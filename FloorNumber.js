/*
Problem Simplified:
-------------------
We have a building:
- 1st floor: Always has 2 apartments (numbered 1 and 2)
- Every other floor: Has 'x' apartments each

We know the apartment number 'n' where Petya lives.
We must find on which floor Petya's apartment is located.

Rules:
------
1. If n <= 2 → floor = 1 (since the first floor has apartments 1 and 2)
2. Otherwise:
   - Remove the first 2 apartments (floor 1)
   - Then divide remaining apartments (n - 2) by x
   - Round up because if there are remaining apartments, they belong to the next floor

We repeat for t test cases.

Example 1:
----------
Input:
7 3

Step-by-step:
- Floor 1: 1, 2
- Floor 2: 3, 4, 5
- Floor 3: 6, 7, 8
n = 7 → falls on floor 3
Output: 3

Example 2:
----------
Input:
1 5
n = 1 → on the first floor → Output: 1

Example 3:
----------
Input:
22 5
- Floor 1: 1, 2
- Floor 2: 3, 4, 5, 6, 7
- Floor 3: 8, 9, 10, 11, 12
- Floor 4: 13, 14, 15, 16, 17
- Floor 5: 18, 19, 20, 21, 22  → Output: 5

Example 4:
----------
Input:
987 13
- Floor 1: 1, 2
- Remaining apartments = 987 - 2 = 985
- Each next floor has 13 apartments
- Floors after 1st = ceil(985 / 13) = ceil(75.769...) = 76
- Total floor = 1 + 76 = 77
Output: 77
*/


const prompt = require("prompt-sync")(); // Import prompt-sync for input

const t = parseInt(prompt()); // Number of test cases

for (let i = 0; i < t; i++) {
    let [n, x] = prompt().split(" ").map(Number); // Read n (apartment number) and x (apartments per floor except first)

    // If apartment number is 1 or 2, it’s on the first floor
    if (n <= 2) {
        console.log(1);
    } else {
        // Remove the first floor apartments (1 and 2)
        let remaining = n - 2;

        // Calculate how many full floors after the first floor
        // Math.ceil(remaining / x) → rounds up if not evenly divisible
        let floorsAfterFirst = Math.ceil(remaining / x);

        // Add 1 because the first floor is already counted
        console.log(1 + floorsAfterFirst);
    }
}
