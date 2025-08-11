/*
Problem: Maximum Burles Mishka Can Spend

Mishka has `s` burles (money) on his card.

Rules:
- In one operation:
    1. Choose some amount `x` where 1 ≤ x ≤ s
    2. Spend exactly `x` burles to buy food
    3. Get cashback of floor(x / 10) burles back to his card

Goal:
- Find the MAXIMUM total burles Mishka can spend if he chooses amounts optimally.

Key observation:
- Spending in chunks of 10 is best because it gives cashback
- Process:
    1. While s ≥ 10, spend the largest multiple of 10 ≤ s
    2. Add spent amount to total
    3. Add cashback to s
    4. Continue until s < 10
    5. Add remaining s (since no cashback if < 10)

-----------------------------------------------------
Example 1:
Input:
s = 1
Process:
- s < 10 → spend 1, no cashback
Total = 1
Output: 1

-----------------------------------------------------
Example 2:
s = 10
Process:
- Spend 10, cashback = 1 → s = 1
- Spend remaining 1
Total = 10 + 1 = 11
Output: 11

-----------------------------------------------------
Example 3:
s = 19
Process:
- Spend 10, cashback = 1 → s = 10
- Spend 10, cashback = 1 → s = 1
- Spend 1
Total = 10 + 10 + 1 = 21
Output: 21

-----------------------------------------------------
Example 4:
s = 9876
Process:
- Keep spending multiples of 10 and adding cashback
- Eventually s becomes < 10, then add it
Total = 10973
Output: 10973

-----------------------------------------------------
Example 5:
s = 12345
Output: 13716

-----------------------------------------------------
Example 6:
s = 1000000000
Output: 1111111111
*/


// Import prompt-sync for reading input in Node.js
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Loop through each test case
while (t--) {

    // Read the initial amount of burles Mishka has
    let s = parseInt(prompt());

    // Variable to keep track of total amount spent
    let totalSpent = 0;

    // While Mishka has at least 10 burles
    while (s >= 10) {
        // Spend as much as possible in multiples of 10
        let spend = Math.floor(s / 10) * 10;

        // Add this spent amount to total
        totalSpent += spend;

        // Cashback is floor(spend / 10)
        let cashback = spend / 10;

        // Update s: remaining money + cashback
        s = s - spend + cashback;
    }

    // Add any remaining money (less than 10, no cashback)
    totalSpent += s;

    // Print the total money Mishka can spend
    console.log(totalSpent);
}
