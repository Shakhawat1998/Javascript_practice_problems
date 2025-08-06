// You are given a number of test cases. Each test case contains a 3-letter string made of English letters (uppercase or lowercase).

// 🧠 Your task is to check whether the string is equal to "YES", ignoring the case (i.e. it could be "YES", "yes", "YeS", etc.).

// 🔢 Input:
// First line: An integer t (1 ≤ t ≤ 1000) — number of test cases

// Next t lines: Each line contains a string s of exactly 3 letters (e.g., Yes, noo, YEs)

// 📤 Output:
// For each test case:

// Print "YES" if the string equals "YES" in any letter case (like "yes", "yES", etc.)

// Otherwise, print "NO"

// 🔍 Examples Explained:
// Input	Output	Explanation
// YES	YES	Matches exactly
// yES	YES	Matches "YES" when ignoring case
// Noo	NO	Not equal to "YES"
// // Yas	NO	Different spelling
// yes	YES	Lowercase form of "YES"
// orZ	NO	Not a variation of "YES"


const prompt = require('prompt-sync')();

const t = parseInt(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
    // Read the string
    let s = prompt("Enter string: ");

    // Convert to uppercase and compare with "YES"
    if (s.toUpperCase() === "YES") {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
