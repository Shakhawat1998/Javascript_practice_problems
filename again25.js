// You're given a large number n, and you need to calculate:

// css
// Copy
// Edit
// 5ⁿ (5 raised to the power n)
// But you don’t need the full result — just the last two digits of the number.

// 🧠 The trick is: n can be very large (up to 2×10¹⁸), so you cannot calculate 5ⁿ directly.

// ✅ Your Task:
// Print the last two digits of the number 5ⁿ — no spaces, always 2 digits.

// 🔍 Observations:
// Let’s calculate a few small powers of 5:

// n	5ⁿ	Last Two Digits
// 1	5	05
// 2	25	25
// 3	125	25
// 4	625	25
// 5	3125	25
// 6	15625	25
// 7	78125	25

// 👉 So from n = 2 and up, the last two digits are always 25.

// ✅ Final Answer Rule:
// If n ≥ 2, then:


// Last two digits of 5ⁿ = 25
// 🧪 Example:
// Input:

// 2
// Output:

// 25
// Explanation:

// 5² = 25 → last two digits are 25


const prompt = require('prompt-sync')();

// Read the input value of n
let n = BigInt(prompt("Enter value of n (≥ 2): "));

// Since for any n ≥ 2, the last two digits of 5ⁿ are always 25
if (n >= 2n) {
    console.log("25");
}
