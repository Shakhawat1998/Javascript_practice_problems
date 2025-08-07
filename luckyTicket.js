// 🎟️ Lucky Ticket Checker
// A ticket is a string of 6 digits (like "123456").
// A ticket is considered **lucky** if:
// ➤ The sum of the first 3 digits === the sum of the last 3 digits.
//
// 🧾 Input:
// - First line: an integer `t` (number of test cases), 1 ≤ t ≤ 1000
// - Next `t` lines: each contains a 6-digit string (may include leading 0)
//
// 🖨️ Output:
// - For each ticket, print "YES" if it's lucky, "NO" otherwise
// - Any casing is accepted (yes, YES, Yes... all valid)

// ✅ Example 1:
// Input:
// 5
// 213132   // 2+1+3 = 6, 1+3+2 = 6 → YES
// 973894   // 9+7+3 = 19, 8+9+4 = 21 → NO
// 045207   // 0+4+5 = 9, 2+0+7 = 9 → YES
// 000000   // 0+0+0 = 0, 0+0+0 = 0 → YES
// 055776   // 0+5+5 = 10, 7+7+6 = 20 → NO

// Output:
// YES
// NO
// YES
// YES
// NO



// Make sure to install prompt-sync first: npm install prompt-sync
const prompt = require('prompt-sync')();

// Read number of test cases
const t = parseInt(prompt("Enter number of tickets: "));

for (let i = 0; i < t; i++) {
  const ticket = prompt(`Enter 6-digit ticket #${i + 1}: `);

  let sumFirst = 0;
  let sumSecond = 0;

  // Sum first 3 digits
  for (let j = 0; j < 3; j++) {
    sumFirst += parseInt(ticket[j]);
  }

  // Sum last 3 digits
  for (let j = 3; j < 6; j++) {
    sumSecond += parseInt(ticket[j]);
  }

  // Output result
  if (sumFirst === sumSecond) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
