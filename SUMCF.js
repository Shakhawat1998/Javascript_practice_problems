// You are given three numbers: a, b, and c.

// 🔍 Your task is to check if any one of them is equal to the sum of the other two.

// ✅ Input Format:
// First line: t → number of test cases

// Then t lines follow, each with 3 integers: a, b, c
// where 0 ≤ a, b, c ≤ 20

// ✅ Output Format:
// For each test case, print:

// "YES" → if any one of the numbers equals the sum of the other two

// "NO" → otherwise

// You can use any case (like "yes", "YES", "YeS", etc.)

// 🧠 Logic to Check:
// For each test case, just check:


// a + b == c
// or
// a + c == b
// or
// b + c == a
// 🔍 Examples Explained:
// Test Case 1:

// 1 4 3
// Check: 1 + 3 = 4 ✅ → YES
// Test Case 2:

// 2 5 8
// No pair sums to the third ❌ → NO
// Test Case 3:

// 9 11 20
// Check: 9 + 11 = 20 ✅ → YES
// Test Case 4:

// 0 0 0
// Check: 0 + 0 = 0 ✅ → YES
// Test Case 5:

// 20 20 20
// No pair adds to the third (20 + 20 = 40) ❌ → NO
// Test Case 6:

// 4 12 3
// 4 + 3 = 7 ≠ 12  
// 4 + 12 = 16 ≠ 3  
// 12 + 3 = 15 ≠ 4  
// → NO ❌
// Test Case 7:

// 15 7 8
// 7 + 8 = 15 ✅ → YES


const prompt = require('prompt-sync')();

// Read the number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
    // Read a, b, c for each test case
    const [a, b, c] = prompt().split(' ').map(Number);

    // Check if any number is equal to the sum of the other two
    if (a + b === c || a + c === b || b + c === a) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
