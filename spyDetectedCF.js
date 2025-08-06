// You're given multiple arrays.
// Each array has one number that is different, and all others are the same.

// 🧩 Your task:
// For each array, find the index (1-based) of the number that is different from the rest.

// ✅ Input Format:
// First line: t → number of test cases

// For each test case:

// One integer n → size of the array (n ≥ 3)

// Then n space-separated integers

// ✅ Output Format:
// For each test case, print one line:
// The index (1-based) of the unique element that doesn’t match the others.

// 🧠 Strategy:
// Since only one element is different, it’s enough to check:

// The first 3 elements → the majority value is the common one.

// Then, scan the array to find the value that’s different from the majority.

// 🔍 Examples Explained:
// Test Case 1:

// Input: 11 13 11 11
// First 3 elements: 11, 13, 11 → 11 is common
// → 13 is the different one → index = 2 ✅
// Test Case 2:

// Input: 1 4 4 4 4
// First 3: 1, 4, 4 → 4 is common → 1 is different → index = 1 ✅
// Test Case 3:

// Input: 3 3 3 3 10 3 3 3 3 3
// First 3: 3, 3, 3 → 3 is common → 10 is different → index = 5 ✅
// Test Case 4:

// Input: 20 20 10
// First 3: 20, 20, 10 → 20 is common → 10 is different → index = 3 ✅


const prompt = require('prompt-sync')();

// Read number of test cases
let t = parseInt(prompt("Enter number of test cases: "));

while (t--) {
    // Read the size of the array
    let n = parseInt(prompt("Enter array size: "));

    // Read the array elements (1-based indexing for easier mapping to C++ code)
    let a = prompt("Enter array elements: ").split(' ').map(Number);

    // Count occurrences of each number using a frequency map
    let count = {};

    for (let i = 0; i < n; i++) {
        let num = a[i];
        count[num] = (count[num] || 0) + 1;
    }

    // Find the index (1-based) of the unique element
    for (let i = 0; i < n; i++) {
        if (count[a[i]] === 1) {
            console.log(i + 1); // Output 1-based index
            break;
        }
    }
}
