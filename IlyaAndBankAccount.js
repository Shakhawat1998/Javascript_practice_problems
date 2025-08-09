/*
PROBLEM (Simplified):

- Ilya has a bank account balance which can be positive or negative.
- He has a chance to delete either:
   * The last digit of his account balance, OR
   * The digit before the last digit,
- But he can do this deletion at most once (or not at all).
- The goal is to maximize the resulting account balance after applying this operation.

-----------------------------------------------------
INPUT:
- An integer n (10 ≤ |n| ≤ 10^9) representing the account balance.

-----------------------------------------------------
OUTPUT:
- Print the maximum possible account balance after deleting zero or one digit as described.

-----------------------------------------------------
EXAMPLES:

Example 1:
Input: 2230
Output: 2230
Explanation: 
- The balance is positive.
- Deleting digits won't increase the balance.
- So, do nothing.

Example 2:
Input: -10
Output: 0
Explanation:
- Balance is -10.
- Delete the last digit (0): balance becomes -1.
- Delete digit before last (1): balance becomes 0.
- Max is 0.

Example 3:
Input: -100003
Output: -10000
Explanation:
- Balance is -100003.
- Deleting last digit (3) → -10000
- Deleting digit before last (0) → -10003
- Max is -10000 (better to delete last digit).

-----------------------------------------------------
KEY IDEA:
- For positive numbers, no deletion needed.
- For negative numbers, try removing last or second last digit and pick the max.
*/




/*
Explanation:

If n = -123:

option1: remove last digit
- floor(-123 / 10) = floor(-12.3) = -13

option2: remove second last digit
- lastDigit = -123 % 10 = -3 (in JS, modulo keeps sign, so adjust below)
- Actually, to get positive last digit, use ((n % 10) + 10) % 10
- lastDigit = ((-123 % 10) + 10) % 10 = 7 + 10 = 17 % 10 = 7 → But JS mod negative can be tricky

To fix lastDigit for negative numbers in JS:
- Use: lastDigit = Math.abs(n) % 10

Adjusting code for lastDigit:

let lastDigit = Math.abs(n) % 10;

Then:

option2 = Math.floor(n / 100) * 10 - lastDigit;

Because sign matters, option2 must stay negative.

Final correct code is below.
*/


const prompt = require("prompt-sync")();

let n = Number(prompt().trim());

if (n >= 0) {
    console.log(n);
} else {
    let option1 = Math.floor(n / 10);

    // Get positive last digit
    let lastDigit = Math.abs(n) % 10;

    // Remove second last digit:
    // floor(n / 100) * 10 - lastDigit because n is negative
    let option2 = Math.floor(n / 100) * 10 - lastDigit;

    console.log(Math.max(option1, option2));
}
