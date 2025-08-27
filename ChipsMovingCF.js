/*
Problem Simplified:
-------------------
We have n chips placed on integer coordinates x1, x2, ..., xn.

Allowed moves:
1. Move chip by 2 (left or right) → FREE
2. Move chip by 1 (left or right) → costs 1 coin

Goal:
Move all chips to the SAME coordinate with minimum total coins.

Key Idea:
----------
- Moving by 2 is free → so position parity (odd/even) matters.
- Chips on odd positions can move to ANY odd position for free.
- Chips on even positions can move to ANY even position for free.
- To move odd → even (or even → odd), we must pay 1 coin.

So:
- Count how many chips are on odd coordinates.
- Count how many chips are on even coordinates.
- Answer = min(oddCount, evenCount)

------------------------------------------------
Examples:
------------------------------------------------

Example 1:
Input:
n = 3
x = [1, 2, 3]

Positions:
1 (odd), 2 (even), 3 (odd)
oddCount = 2, evenCount = 1

Best strategy:
- Move chip at 2 to 1 or 3 → costs 1
All chips at odd position → total = 1

Output: 1

------------------------------------------------

Example 2:
Input:
n = 5
x = [2, 2, 2, 3, 3]

Positions:
2 (even, 3 chips), 3 (odd, 2 chips)
oddCount = 2, evenCount = 3

Best strategy:
- Move 2 odd chips at 3 → to 2 (cost 1 each) → total = 2
All chips at even position → total = 2

Output: 2

------------------------------------------------
Conclusion:
-----------
Answer = min(number of chips on odd positions, number of chips on even positions)
*/



// Import prompt-sync for interactive input
const prompt = require("prompt-sync")();

// Read n (the number of chips)
let n = parseInt(prompt("Enter number of chips: "));

// Read chip positions (space-separated integers)
let positions = prompt("Enter chip positions: ").split(" ").map(Number);

// Counters for odd and even positioned chips
let oddCount = 0;
let evenCount = 0;

// Loop through all chip positions
for (let i = 0; i < n; i++) {
    if (positions[i] % 2 === 0) {
        // If position is even
        evenCount++;
    } else {
        // If position is odd
        oddCount++;
    }
}

/*
Intuition:
----------
- Moving by 2 steps is free → parity (odd/even) doesn't change.
- So chips on odd positions can gather at any odd position for free.
- Chips on even positions can gather at any even position for free.
- To bring all chips together, we must convert one group (odd → even or even → odd).
- That costs 1 coin per chip that changes parity.
- Minimum coins = min(oddCount, evenCount)
*/
let result = Math.min(oddCount, evenCount);

// Print the result
console.log("Minimum coins required:", result);

/*
Example 1:
----------
Input:
n = 3
positions = [1, 2, 3]

oddCount = 2 (chips at 1,3)
evenCount = 1 (chip at 2)

Answer = min(2,1) = 1

Output:
Minimum coins required: 1

--------------------------------
Example 2:
----------
Input:
n = 5
positions = [2, 2, 2, 3, 3]

oddCount = 2 (chips at 3,3)
evenCount = 3 (chips at 2,2,2)

Answer = min(2,3) = 2

Output:
Minimum coins required: 2
*/
