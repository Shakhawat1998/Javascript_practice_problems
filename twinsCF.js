/*
Problem:
---------
You have n coins with different values.
You want to take the smallest number of coins such that:
    - The sum of your coins is STRICTLY greater than the sum of the coins left for your twin.

Strategy:
---------
1. Sort the coins in descending order (take the biggest ones first).
2. Keep taking coins until your total sum > remaining coins' sum.
3. Output how many coins you took.

Input:
------
n = number of coins (1 ≤ n ≤ 100)
a1, a2, ..., an = coin values (1 ≤ ai ≤ 100)

Output:
-------
Minimum number of coins needed.

Example 1:
----------
Input:
2
3 3

Step-by-step:
Total sum = 3 + 3 = 6
Take biggest coin: 3 → my sum = 3, twin sum = 3 (not greater yet)
Take next coin: 3 → my sum = 6, twin sum = 0 (greater ✅)
Answer: 2 coins

Output:
2

Example 2:
----------
Input:
3
2 1 2

Step-by-step:
Total sum = 2 + 1 + 2 = 5
Take biggest coin: 2 → my sum = 2, twin sum = 3 (not greater yet)
Take next coin: 2 → my sum = 4, twin sum = 1 (greater ✅)
Answer: 2 coins

Output:
2
*/



const prompt = require('prompt-sync')();

// Read number of coins
const n = Number(prompt());

// Read coins values as array of numbers
let coins = prompt().split(' ').map(Number);

// Calculate total sum of coins
let totalSum = coins.reduce((a, b) => a + b, 0);

// Sort coins descending to take largest first
coins.sort((a, b) => b - a);

let mySum = 0;
let count = 0;

// Pick coins until your sum > twin's sum
for (const coin of coins) {
    mySum += coin;
    count++;
    if (mySum > totalSum - mySum) break;
}

// Print minimum number of coins needed
console.log(count);