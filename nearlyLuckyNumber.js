// Lucky digits are only: 4 and 7
// Lucky numbers are numbers made only from digits 4 and 7 (e.g., 4, 7, 47, 744, etc.)

// A number is called nearly lucky if the count of lucky digits in it is itself a lucky number.

// 👉 Task:
// You're given a number n.
// Check if it's nearly lucky.

// ✅ Steps:
// Count how many digits in n are lucky (4 or 7).

// Check if that count is a lucky number.

// Print "YES" if it is, otherwise print "NO".

// 🧪 Examples:
// Input: 40047
// Lucky digits: 4, 4, 7 → total 3 lucky digits

// Is 3 a lucky number? ❌ No
// Output: NO

// Input: 7747774
// Lucky digits: all → total 7 lucky digits

// Is 7 a lucky number? ✅ Yes
// Output: YES

// Input: 1000000000000000000
// Lucky digits: none → total 0 lucky digits

// Is 0 a lucky number? ❌ No
// Output: NO

// 🔒 Constraints:
// 1 ≤ n ≤ 10^18 (so handle it as a string if needed to avoid overflow)


// Read input as string (can be adapted to prompt or other input methods)
const prompt = require('prompt-sync')(); 
let s = prompt(); // input number as string

let count = 0;

// Count how many digits are '4' or '7'
for (let i = 0; i < s.length; i++) {
    if (s[i] === '4' || s[i] === '7') {
        count++;
    }
}

// Convert count to string and check if it's a lucky number
let countStr = count.toString();
let isLucky = true;

for (let i = 0; i < countStr.length; i++) {
    if (countStr[i] !== '4' && countStr[i] !== '7') {
        isLucky = false;
        break;
    }
}

if (isLucky) {
    console.log("YES");
} else {
    console.log("NO");
}
