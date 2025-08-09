/*
PROBLEM (Simplified):

- There are n TV sets for sale.
- Each TV set i has a price ai.
- Some TV sets have negative prices — meaning their owners pay Bob to take them.
- Bob can carry at most m TV sets.
- Bob wants to maximize the total money he can earn from picking TV sets.
  (Money earned = sum of prices of chosen TV sets)
- He can choose any subset of TV sets up to size m.

-----------------------------------------------------
INPUT:
- n (total TV sets)
- m (max TV sets Bob can carry)
- Array of prices a1, a2, ..., an (can be negative or positive)

-----------------------------------------------------
OUTPUT:
- The maximum total money Bob can earn.

-----------------------------------------------------
EXAMPLES:

Example 1:
Input:
5 3
-6 0 35 -2 4

Explanation:
- Pick TV sets with negative prices: -6 and -2 (owners pay Bob)
- Sum of these = (-6) + (-2) = -8 (Bob earns 8)
- Also pick TV set with 0 price or positive price only if it helps
- Here best choice is picking -6, -2 and 0 (3 TVs max)
- Sum = (-6) + (-2) + 0 = -8 → Bob earns 8 bellars
Output:
8

Example 2:
Input:
4 2
7 0 0 -7

Explanation:
- Bob can carry 2 TV sets max.
- Pick 7 and 0 → sum = 7
- Or pick 0 and 0 → sum = 0
- Or pick -7 and 7 → sum = 0
- Best is picking TV with price 7 alone or with 0.
Output:
7

-----------------------------------------------------
KEY IDEA:
- Sort prices ascending.
- Pick as many negative prices (which increase money earned) as possible up to m.
- Ignore positive prices because they reduce money earned.
*/


const prompt = require("prompt-sync")();

// Read n (total TVs) and m (max TVs Bob can carry)
const [n, m] = prompt().split(" ").map(Number);

// Read array of TV prices
const prices = prompt().split(" ").map(Number);

// Sort prices ascending to get negative (paying) TVs first
prices.sort((a, b) => a - b);

let totalEarned = 0;
let count = 0;

// Pick up to m TVs with negative prices (owners pay Bob)
for (let i = 0; i < n && count < m; i++) {
    if (prices[i] < 0) {
        // Negative price means Bob earns this amount (absolute value)
        totalEarned += Math.abs(prices[i]);
        count++;
    } else {
        // Prices >= 0 don't help earn money, stop picking
        break;
    }
}

console.log(totalEarned);

/*
Explanation:

- Sort prices to bring all negative prices (paying TVs) to front.
- Pick as many negative prices as possible, up to m.
- Sum their absolute values because negative prices mean Bob earns money.
- Ignore zero or positive prices because they don't increase earnings.
*/
