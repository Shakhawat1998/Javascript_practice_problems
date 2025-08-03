// Anton writes down a set of small English letters (like a, b, c) inside curly brackets {}. Each letter is separated by a comma and a space (, ). Sometimes he repeats letters by mistake.

// Your task is to count how many unique (non-repeated) letters are in the set.

// ✅ Input Format:
// One string in the format: {a, b, c} or {b, a, b, a} or {}.

// The string:

// Always starts with { and ends with }.

// Letters (if any) are lowercase English letters separated by comma and space.

// ✅ Output Format:
// A single number: the count of distinct letters in the set.

// 🧪 Examples Explained:
// Example 1:
// Input:
// {a, b, c}
// Explanation:
// There are 3 letters: a, b, and c. All are different.
// Output:
// 3

// Example 2:
// Input:
// {b, a, b, a}
// Explanation:
// Only 2 unique letters: a and b (even though both appear more than once).
// Output:
// 2

// Example 3:
// Input:
// {}
// Explanation:
// The set is empty — no letters inside.
// Output:
// 0

const prompt = require('prompt-sync')(); // For taking input in Node.js

let input = prompt(); // Read the full line input like "{a, b, c}"

// Remove the curly braces
input = input.slice(1, -1).trim(); // Removes first and last character, trims spaces

// If the input is empty (i.e., "{}"), return 0
if (input === '') {
    console.log(0);
} else {
    // Split the string by ", " to get each letter
    let letters = input.split(', ');

    // Use a Set to store only unique letters
    let uniqueLetters = new Set(letters);

    // Output the size of the set (number of unique letters)
    console.log(uniqueLetters.size);
}
