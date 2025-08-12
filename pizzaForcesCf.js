/*
PROBLEM SIMPLIFIED:
-------------------
Petya's favorite pizzeria makes pizzas of three sizes:

1. Small pizza: 6 slices, takes 15 minutes to bake.
2. Medium pizza: 8 slices, takes 20 minutes to bake.
3. Large pizza: 10 slices, takes 25 minutes to bake.

Petya has 'n' friends coming for his birthday.
He wants enough pizzas so that EVERY friend gets at least 1 slice.
We must find the MINIMUM possible total baking time needed to bake enough pizza slices.

We can order ANY combination of small, medium, and large pizzas.
The total time is the sum of baking times of all pizzas ordered.

-------------------
IMPORTANT NOTES:
- n can be VERY large (up to 10^16), so the solution must be efficient.
- If pizzas make more than 'n' slices, that's okay (no need to be exact).
- The goal: Minimize TOTAL baking time.

-------------------
GIVEN EXAMPLES:
-------------------

Example 1:
n = 12
- Option: 2 small pizzas → 6 + 6 = 12 slices, time = 15 + 15 = 30 minutes
- This is optimal.
Output: 30

Example 2:
n = 15
- Option 1: 3 small pizzas → 6 + 6 + 6 = 18 slices, time = 15 + 15 + 15 = 45 minutes
- Option 2: 1 small + 1 large → 6 + 10 = 16 slices, time = 15 + 25 = 40 minutes (better)
Output: 40

Example 3:
n = 300
- Combination: 15 small + 10 medium + 13 large
  Slices: (15 × 6) + (10 × 8) + (13 × 10) = 90 + 80 + 130 = 300 slices
  Time: (15 × 15) + (10 × 20) + (13 × 25) = 225 + 200 + 325 = 750 minutes
Output: 750

Example 4:
n = 1
- 1 small pizza → 6 slices (more than enough), time = 15 minutes
Output: 15

Example 5:
n = 9999999999999999 (very large)
- Best way: Since 1 large pizza = 10 slices in 25 mins, we can roughly do:
  Required time ≈ ceil(n / 2) × 5 minutes
  Optimal baking time = 25000000000000000 minutes
Output: 25000000000000000

Example 6:
n = 3
- 1 small pizza → 6 slices, time = 15 minutes
Output: 15
*/




// Import prompt-sync for local input (remove this in Codeforces environment)
const prompt = require("prompt-sync")();

// Read the number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {

    // Read n: the number of friends
    let n = BigInt(prompt()); // use BigInt because n can be up to 10^16

    // ------------------------------
    // INTUITION BEHIND THE SOLUTION:
    // ------------------------------
    // - Small pizza: 6 slices, 15 min  => 2.5 minutes per slice
    // - Medium pizza: 8 slices, 20 min => 2.5 minutes per slice
    // - Large pizza: 10 slices, 25 min => 2.5 minutes per slice
    //
    // All pizzas have the SAME "minutes per slice" ratio (2.5 min per slice).
    // So, the only thing that matters is the TOTAL number of slices, 
    // not the type of pizza.
    //
    // BUT: You can't order less than 1 pizza, so:
    // - If n <= 6 (friends), we still must bake at least 1 small pizza (15 min).
    // - Otherwise, we need ceil(n / 2) * 5 minutes (because each slice costs 2.5 min).
    //   Why multiply by 5? Because ceil(n/2) slices * 2.5 min = ceil(n/2) * (5/2) 
    //   but since n is number of slices needed and pizzas give slices in pairs effectively, 
    //   we can think in half-steps and multiply by 5 directly.

    let minutes;

    // If n <= 6, order 1 small pizza (15 minutes)
    if (n <= 6n) {
        minutes = 15n;
    } else {
        // Calculate the number of pizza pairs needed: ceil(n / 2)
        let slicesNeeded = (n + 1n) / 2n; // integer division in BigInt (acts like ceil for n/2)

        // Ensure at least 3 slices worth (since 1 small pizza = 6 slices)
        if (slicesNeeded < 3n) slicesNeeded = 3n;

        // Each slice pair (half a pizza worth of slices) = 5 minutes
        minutes = slicesNeeded * 5n;
    }

    // Output the result
    console.log(minutes.toString());
}

/*
Example walkthrough:
--------------------
n = 15 friends
- n > 6, so we compute slicesNeeded = ceil(15/2) = 8
- minutes = 8 * 5 = 40 minutes
Matches example.

n = 3 friends
- n <= 6 → 1 small pizza = 15 minutes
Matches example.

n = 9999999999999999 friends
- slicesNeeded = ceil(9999999999999999 / 2) = 5000000000000000
- minutes = slicesNeeded * 5 = 25000000000000000
Matches example.
*/
