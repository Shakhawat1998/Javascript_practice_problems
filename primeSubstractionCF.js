/*
Problem: Prime Subtraction

We are given two integers x and y (where x > y).
We want to check if it's possible to choose a SINGLE prime number p,
and subtract it multiple times from x so that we finally reach y.

Important Rule:
- You cannot change the prime in the middle.
- You must keep subtracting the same chosen prime p.

---

Key Idea:
Let diff = x - y
If diff >= 2, the answer is always "YES".
Why? Because we can always use p = 2 (prime) and subtract it diff/2 times
(if diff is even), OR p = 3 (or another prime) if diff is odd and >= 3.

The only case when it is impossible:
- When diff = 1
Because 1 cannot be represented by subtracting the same prime any number of times.
(no prime number equals 1)

---

Examples:
Input:
4
100 98
42 32
1000000000000000000 1
41 40

Output:
YES
YES
YES
NO

Explanation:
1) x = 100, y = 98 → diff = 2
   Choose p = 2, subtract once → 100 - 2 = 98 → YES

2) x = 42, y = 32 → diff = 10
   Choose p = 5, subtract twice → 42 - 5 - 5 = 32 → YES

3) x = 1e18, y = 1 → diff = 999999999999999999
   Choose p = 3, subtract 3 repeatedly → YES

4) x = 41, y = 40 → diff = 1
   There’s no prime p = 1 → impossible → NO
*/



// Prime Subtraction Problem in JavaScript using prompt-sync

// Import prompt-sync for interactive input
const prompt = require("prompt-sync")({ sigint: true });

// Read number of test cases
let t = parseInt(prompt("Enter number of test cases: "));

// Loop through each test case
for (let i = 0; i < t; i++) {
    // Read x and y as strings first (since they can be very large)
    let [x, y] = prompt("Enter x and y: ").split(" ");

    // Convert to BigInt
    x = BigInt(x);
    y = BigInt(y);

    // Calculate difference
    let diff = x - y;

    // Apply rule: if diff == 1 → NO, else → YES
    if (diff === 1n) {
        console.log("NO");
    } else {
        console.log("YES");
    }
}
