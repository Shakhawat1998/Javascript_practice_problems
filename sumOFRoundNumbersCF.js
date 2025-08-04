// You are given a number n (1 ≤ n ≤ 10,000).
// Your task is to split n into the fewest number of "round numbers".

// 🔷 What is a Round Number?
// A round number is any number that has only one non-zero digit, and the rest are zeros.

// Examples of round numbers:

// ✅ 5000 → yes (starts with 5, then 3 zeros)

// ✅ 9 → yes (only one digit)

// ✅ 70 → yes (7 followed by 0)

// ✅ 800 → yes (8 followed by 2 zeros)

// Examples of not round:

// ❌ 110 → has more than one non-zero digit

// ❌ 707 → has more than one non-zero digit

// ❌ 222 → has more than one non-zero digit

// 🧠 Goal
// For each test case:

// Print the minimum number of round numbers that sum up to n.

// Then, print those round numbers.

// 📥 Input Format
// First line: integer t — number of test cases
// Next t lines: one integer per line n (the number to break into round numbers)

// 📤 Output Format
// For each test case:

// First, print how many round numbers k you used.

// Then print the k round numbers.

// ✅ Examples Explained
// Input:

// 5
// 5009
// 7
// 9876
// 10000
// 10
// Output:

// 2
// 5000 9
// 1
// 7
// 4
// 800 70 6 9000
// 1
// 10000
// 1
// 10
// 🔎 Explanation:
// 5009 → break into 5000 and 9 → total 2 round numbers ✅

// 7 → already a round number → just 7 → total 1 ✅

// 9876 → break into:

// 9000 (thousands digit)

// 800 (hundreds digit)

// 70 (tens digit)

// 6 (units digit)
// → total 4 round numbers ✅

// 10000 → already a round number → just 10000 → total 1 ✅

// 10 → break into 10 → already round → total 1 ✅

// 💡 Tip:
// To solve it, look at each digit of n and if it's non-zero, turn it into a round number by adding the right number of zeros.

// For example:

// 7060 → has digits: 7 0 6 0
// → round numbers: 7000, 60 → total 2 round numbers ✅


// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Read the number of test cases
const t = parseInt(prompt("Enter number of test cases: "));

// Loop through each test case
for (let i = 0; i < t; i++) {
    // Read the number n
    let n = prompt(`Enter number ${i + 1}: `);

    // Store the round numbers here
    let roundNumbers = [];

    // Start from the least significant digit
    let place = 1; // To track digit place (1s, 10s, 100s, etc.)
    for (let j = n.length - 1; j >= 0; j--) {
        let digit = parseInt(n[j]);
        if (digit !== 0) {
            // Multiply digit with its place to make it a round number
            roundNumbers.push(digit * place);
        }
        place *= 10; // Move to the next digit place
    }

    // Print the number of round numbers
    console.log(roundNumbers.length);

    // Print the round numbers separated by space
    console.log(roundNumbers.join(' '));
}
