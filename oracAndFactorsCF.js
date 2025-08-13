/*
Problem Summary:
---------------
We are given two integers: n (starting number) and k (number of operations).

Operation:
----------
1. Find f(n) = smallest divisor of n (greater than 1).
2. Add f(n) to n.
3. Repeat exactly k times (n changes after each operation).

We need to output the final value of n after k operations.

---

Key Points:
-----------
- f(n) is NOT always prime, just the smallest divisor > 1.
- After the first operation, n changes, so f(n) may change too.
- The operation repeats exactly k times.

---

Example 1:
----------
Input:
n = 5, k = 1
Step 1: f(5) = 5 (divisors: 1, 5 → smallest > 1 is 5)
n = 5 + 5 = 10
Final output: 10

---

Example 2:
----------
Input:
n = 8, k = 2
Step 1: f(8) = 2 (divisors: 1, 2, 4, 8 → smallest > 1 is 2)
n = 8 + 2 = 10
Step 2: f(10) = 2 (divisors: 1, 2, 5, 10 → smallest > 1 is 2)
n = 10 + 2 = 12
Final output: 12

---

Example 3:
----------
Input:
n = 3, k = 4
Step 1: f(3) = 3 → n = 3 + 3 = 6
Step 2: f(6) = 2 → n = 6 + 2 = 8
Step 3: f(8) = 2 → n = 8 + 2 = 10
Step 4: f(10) = 2 → n = 10 + 2 = 12
Final output: 12

---

Input Format:
-------------
t  → number of queries
For each query:
    n k

Constraints:
------------
1 ≤ t ≤ 100
2 ≤ n ≤ 10^6
1 ≤ k ≤ 10^9
Sum of all n across queries ≤ 10^6

Output:
-------
For each query, print the final value of n after exactly k operations.
*/



// Import prompt-sync for local testing (remove in online judge)
const prompt = require("prompt-sync")();

// Read number of queries
let t = parseInt(prompt());

while (t--) {
    // Read n (starting number) and k (number of operations)
    let [n, k] = prompt().split(" ").map(Number);

    // Step 1: If n is even, smallest divisor >1 is 2
    if (n % 2 === 0) {
        // If n is even, each operation adds 2
        // First operation adds 2, then remaining (k-1) operations also add 2 each
        // So final n = n + 2*k
        console.log(n + 2 * k);
    } else {
        // Step 2: If n is odd, first operation adds smallest divisor of n (odd number >1)
        // Smallest divisor of odd n is always odd → for n odd, f(n) = smallest prime factor
        let f = n; // default f(n) = n (if n is prime)
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) {
                f = i; // smallest divisor found
                break;
            }
        }
        // After first operation, n becomes n + f, which is even
        n += f;
        k--; // first operation done
        // Remaining (k) operations each add 2
        n += 2 * k;
        console.log(n);
    }
}

/*
Intuition:
----------
- If n is even, f(n) = 2 → each operation adds 2 → final n = n + 2*k
- If n is odd:
    - First operation adds smallest odd divisor f(n) (>=3)
    - n becomes even
    - Subsequent operations add 2 each
- Efficient because we only need to find smallest divisor once for odd numbers
- Handles very large k efficiently without looping through each operation
*/
