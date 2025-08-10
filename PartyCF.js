/*
We have n employees (numbered 1 to n).  
Each employee has:
    - NO manager  → pi = -1
    - OR exactly ONE immediate manager → pi = some other employee number.

Definition:
    - A is "superior" to B if:
        1) A is B's immediate manager, OR
        2) A is superior to B's manager (indirect chain).

We are told there are NO cycles in management (no one can manage themselves directly or indirectly).

Task:
    - We need to split all employees into groups for a party.
    - In each group:
        No employee can be a superior of another employee in the SAME group.
    - Find the MINIMUM number of groups needed.

💡 Key idea:
    The longest chain of command = number of groups.
    Because people in the same chain cannot be in the same group.

----------------------------------------------------------
Example 1:
Input:
5
-1   // Employee 1 has no manager
1    // Employee 2's manager is 1
2    // Employee 3's manager is 2
1    // Employee 4's manager is 1
-1   // Employee 5 has no manager

Chain breakdown:
    Employee 3 → 2 → 1   (length = 3)
    Employee 4 → 1       (length = 2)
    Employee 5           (length = 1)

Longest chain length = 3 → Minimum groups needed = 3

----------------------------------------------------------
Output:
3
----------------------------------------------------------
Why:
Possible grouping:
    Group 1: Employee 1
    Group 2: Employees 2 and 4
    Group 3: Employees 3 and 5
*/



// You can solve this in a very simple way by realizing that:

// The answer = the length of the longest chain of managers in the company.

// Why this works
// If someone is the superior of someone else, they must be in different groups.

// The longest possible chain determines how many groups we need, because each person in the chain must be in a separate group.

// Step-by-step simple approach
// Read n (number of employees) and their pi values (manager numbers).

// For each employee:

// Follow their manager chain until you reach -1 (no manager).

// Count how many steps it takes (this is the chain length for that employee).

// Keep track of the maximum chain length found.

// That maximum is the minimum number of groups needed.

// Example walk-through


// n = 5
// pi = [-1, 1, 2, 1, -1]

// Employee 1 → no manager → length = 1
// Employee 2 → 1 → no manager → length = 2
// Employee 3 → 2 → 1 → no manager → length = 3
// Employee 4 → 1 → no manager → length = 2
// Employee 5 → no manager → length = 1

// Max length = 3 → Output 3




// read n
// read p[1..n]

// maxLen = 0
// for i from 1 to n:
//     len = 0
//     curr = i
//     while curr != -1:
//         curr = p[curr]
//         len++
//     maxLen = max(maxLen, len)

// print maxLen




// Import prompt-sync for reading input from console
const prompt = require('prompt-sync')();

// Read n (number of employees)
let n = parseInt(prompt("Enter number of employees: "));

// Read manager array p[1..n]
// We store managers in a 1-based array, so we put a dummy value at index 0
let p = [0];
for (let i = 1; i <= n; i++) {
    p[i] = parseInt(prompt(`Enter manager of employee ${i}: `));
}

let maxLen = 0; // Stores the maximum chain length

// Loop through each employee to find the chain length
for (let i = 1; i <= n; i++) {
    let len = 0; // Length of the current employee's chain
    let curr = i; // Start from employee i

    // Follow the chain until we reach an employee with no manager (-1)
    while (curr !== -1) {
        curr = p[curr]; // Move to their manager
        len++; // Increase the length of the chain
    }

    // Update the maximum chain length found so far
    maxLen = Math.max(maxLen, len);
}

// Output the result (minimum number of groups needed)
console.log(maxLen);

