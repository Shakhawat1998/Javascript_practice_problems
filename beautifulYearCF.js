// // You're given a year y (between 1000 and 9000).

// // Your task is to find the next year (strictly greater than y) such that all digits in the year are different.

// // 👉 What does "distinct digits" mean?
// // A year like 2013 is valid → digits are 2, 0, 1, 3 → all different ✅
// // But 2011 is invalid → digits are 2, 0, 1, 1 → 1 repeats ❌


// //input
// 1987


// Try next year: 1988 ❌ (two 8s)

// Try 1989 ✅ (1, 9, 8, 9 ❌)

// ...

// First valid is 2013 ✅
// Output: 2013


// //input 
// 2013


// Next year: 2014

// Digits: 2, 0, 1, 4 → all distinct ✅
// Output: 2014

// 📌 Constraints:
// You are guaranteed that such a year always exists in the given range.


const prompt = require('prompt-sync')(); 


let y = parseInt(prompt("Enter year:"));

while (true) {
    y++;
    let digits = new Set(y.toString());
    if (digits.size === 4) break;
}

console.log(y);

// ✅ Explanation:
// Converts the year to a string and stores digits in a Set (which removes duplicates).

// If the Set size is 4, all digits are distinct — we break and print the year.

// Let me know if you'd like a version without prompt() (for online judges).