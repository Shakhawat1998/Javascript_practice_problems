// Vasya has:

// a red socks

// b blue socks

// Fashion Rule:

// To be fashionable, Vasya wears 1 red and 1 blue sock per day.

// He throws away both socks at the end of the day.

// After fashion is over, he can wear same-colored socks (two red or two blue) per day until he can't make a pair anymore.

// ✅ Your Task:
// Given a and b, print two numbers:

// Maximum number of fashionable days (wearing different-colored socks).

// Maximum number of same-sock days (wearing 2 red or 2 blue socks), after fashionable days.

// 🧮 How it works:
// Fashionable days = min(a, b)
// (Because each needs 1 red + 1 blue)

// Leftover socks = abs(a - b)
// (The color with more socks)

// Same-sock days = leftover // 2
// (Two same socks per day)

// 🔍 Examples Explained:
// Example 1:
// Input: 3 1

// Fashionable days: min(3, 1) = 1 → 1 red + 1 blue used

// Left: 2 red

// Same-sock days: 2 // 2 = 1

// Output: 1 1

// Example 2:
// Input: 2 3

// Fashionable days: min(2, 3) = 2 → uses up 2 red + 2 blue

// Left: 1 blue

// Same-sock days: 1 // 2 = 0 (not enough for a pair)

// Output: 2 0

// Example 3:
// Input: 7 3

// Fashionable days: min(7, 3) = 3 → uses 3 red + 3 blue

// Left: 4 red

// Same-sock days: 4 // 2 = 2

// Output: 3 2


const prompt = require('prompt-sync')();

// Input: two integers for red and blue socks
let [a, b] = prompt().split(' ').map(Number);

// Calculate fashionable days (min of a and b)
let fashionableDays = Math.min(a, b);

// Calculate same-sock days from leftover socks
let sameSockDays = Math.floor(Math.abs(a - b) / 2);

// Output the result
console.log(fashionableDays + ' ' + sameSockDays);
