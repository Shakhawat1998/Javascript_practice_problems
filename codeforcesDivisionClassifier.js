// 🏆 Codeforces Rating Division Checker
// Codeforces separates users into 4 divisions based on their rating:
//
// ➤ Division 1: rating ≥ 1900
// ➤ Division 2: 1600 ≤ rating ≤ 1899
// ➤ Division 3: 1400 ≤ rating ≤ 1599
// ➤ Division 4: rating ≤ 1399
//
// 🧾 Input:
// - First line: integer t (1 ≤ t ≤ 10^4) → number of test cases
// - Next t lines: one integer per line (−5000 ≤ rating ≤ 5000)
//
// 🖨️ Output:
// - For each rating, print: "Division X", where X is 1, 2, 3, or 4
//
// ✅ Examples:
// Input:
// 7
// -789   → rating ≤ 1399 → Division 4
// 1299   → rating ≤ 1399 → Division 4
// 1300   → rating ≤ 1399 → Division 4
// 1399   → rating ≤ 1399 → Division 4
// 1400   → 1400 ≤ rating ≤ 1599 → Division 3
// 1679   → 1600 ≤ rating ≤ 1899 → Division 2
// 2300   → rating ≥ 1900 → Division 1
//
// Output:
// Division 4
// Division 4
// Division 4
// Division 4
// Division 3
// Division 2
// Division 1


// npm install prompt-sync before running: npm install prompt-sync
const prompt = require('prompt-sync')();

const t = parseInt(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
  const rating = parseInt(prompt(`Enter rating #${i + 1}: `));

  if (rating >= 1900) {
    console.log("Division 1");
  } else if (rating >= 1600) {
    console.log("Division 2");
  } else if (rating >= 1400) {
    console.log("Division 3");
  } else {
    console.log("Division 4");
  }
}
