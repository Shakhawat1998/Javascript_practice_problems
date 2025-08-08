/*
Problem:
--------
We have all integers from 1 to n (inclusive).
We want to choose two DIFFERENT numbers a and b (1 ≤ a < b ≤ n)
such that their greatest common divisor (GCD) is as large as possible.

We must output that maximum GCD.

Key fact:
---------
- The GCD of two numbers can never be greater than n/2 for 1 ≤ a < b ≤ n.
  Why? Because the largest GCD is obtained when one number is a multiple
  of the other, and the largest such smaller number is floor(n/2).
- Therefore, the answer is simply floor(n / 2).

Input:
------
t → number of test cases
n → the upper bound for the range [1, n]

Output:
-------
For each test case, print the maximum GCD possible.

----------------------------------------
Example Walkthrough:
----------------------------------------

Example 1:
----------
n = 3
Numbers: 1, 2, 3
All possible pairs and their GCDs:
    gcd(1, 2) = 1
    gcd(1, 3) = 1
    gcd(2, 3) = 1
Maximum GCD = 1
Output: 1

Example 2:
----------
n = 5
Numbers: 1, 2, 3, 4, 5
Best pair:
    gcd(2, 4) = 2   ← This is the largest possible
Other pairs:
    gcd(3, 5) = 1
    gcd(4, 5) = 1
    gcd(2, 5) = 1
    ...
Maximum GCD = 2
Output: 2

Quick formula:
--------------
Answer = floor(n / 2)

----------------------------------------
Input:
2
3
5

Output:
1
2
*/



const prompt = require("prompt-sync")();

// Number of test cases
let t = Number(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
    let n = Number(prompt(`Enter n for test case ${i + 1}: `));

    /*
      Formula:
      --------
      The largest possible GCD among numbers from 1 to n is:
          floor(n / 2)
      Reason:
        - The best way to get a large GCD is to take two numbers where one
          is a multiple of the other.
        - The smaller number in that pair can be at most floor(n / 2).
        - Example: For n = 5 → floor(5 / 2) = 2 (pair 2, 4 gives gcd = 2)
    */
    let maxGCD = Math.floor(n / 2);

    console.log("Maximum GCD:", maxGCD);
}

/*
Example Run:
------------
Enter number of test cases: 2
Enter n for test case 1: 3
Maximum GCD: 1
Enter n for test case 2: 5
Maximum GCD: 2
*/
