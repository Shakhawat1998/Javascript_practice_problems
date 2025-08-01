// Pete and Billy bought a watermelon that weighs w kilos. They want to cut it into two parts such that:

// Each part has a positive even weight (like 2, 4, 6, ...).

// Can they do it?

// Input:
// An integer w (1 ≤ w ≤ 100) — the weight of the watermelon.

// Output:
// Print YES if it's possible to split it as described, otherwise print NO.

// Example:
// Input:
// 8
// Output:
// YES

// Explanation:
// They can split it into 2 kg and 6 kg — both even and positive.





// Read input weight of the watermelon
const prompt = require('prompt-sync')(); // Use prompt-sync for input in Node.js
const w = parseInt(prompt("Enter watermelon weight: "), 10);

// Check if the weight is even and greater than 2
if (w % 2 === 0 && w > 2) {
    console.log("YES"); // It's possible to split into two even, positive parts
} else {
    console.log("NO"); // Not possible
}




// Input: w (the weight of the watermelon)
// The boys want to split it into two parts with:
// - both parts being even numbers
// - both parts greater than 0

// So we check:
// 1. w % 2 === 0  → Is the total weight even?
// 2. w > 2        → Is it large enough to split into two positive even numbers?

// Example:
// w = 8 → YES (2 + 6)
// w = 2 → NO (would be 1 + 1, but 1 is not even)
