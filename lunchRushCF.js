/*
PROBLEM (Simplified):

- There are n restaurants, each with two values:
  fi = joy from lunching at restaurant i,
  ti = time needed to lunch at restaurant i.

- The Rabbits have exactly k time units for lunch.

- If ti ≤ k (the time needed is within the allowed time),
  then joy = fi.

- If ti > k (time needed exceeds the allowed time),
  then joy = fi - (ti - k).

- Rabbits must choose exactly one restaurant.

TASK:
Find the maximum joy possible from exactly one chosen restaurant.

--------------------------------------------------------
EXAMPLES:

Example 1:
Input:
2 5
3 3
4 5

Explanation:
- Restaurant 1: t1 = 3 ≤ 5 → joy = 3
- Restaurant 2: t2 = 5 ≤ 5 → joy = 4
Maximum joy = 4

Output:
4

--------------------------------------------------------

Example 2:
Input:
4 6
5 8
3 6
2 3
2 2

Explanation:
- Restaurant 1: t1 = 8 > 6 → joy = 5 - (8-6) = 3
- Restaurant 2: t2 = 6 ≤ 6 → joy = 3
- Restaurant 3: t3 = 3 ≤ 6 → joy = 2
- Restaurant 4: t4 = 2 ≤ 6 → joy = 2
Maximum joy = 3

Output:
3

--------------------------------------------------------

Example 3:
Input:
1 5
1 7

Explanation:
- Restaurant 1: t1 = 7 > 5 → joy = 1 - (7-5) = -1

Output:
-1
*/



// Intuition:
// We have n restaurants, each with joy fi and time ti.
// If ti <= k, joy is fi.
// If ti > k, joy is reduced by (ti - k).
// We want the maximum possible joy from choosing exactly one restaurant.

const prompt = require("prompt-sync")();

const [n, k] = prompt().split(" ").map(Number); // Read n and k
let maxJoy = -Infinity; // Initialize maxJoy to very small number

for (let i = 0; i < n; i++) {
    const [fi, ti] = prompt().split(" ").map(Number); // Read joy and time for each restaurant
    
    // Calculate current joy based on time limit k
    let currentJoy;
    if (ti <= k) {
        currentJoy = fi; // Full joy if lunch time within limit
    } else {
        currentJoy = fi - (ti - k); // Joy reduced by overtime
    }
    
    // Update maxJoy if currentJoy is better
    if (currentJoy > maxJoy) {
        maxJoy = currentJoy;
    }
}

console.log(maxJoy); // Output the maximum joy found
