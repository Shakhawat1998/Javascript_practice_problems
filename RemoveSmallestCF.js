// You are given several test cases.
// Each test case has an array of positive integers.

// You can perform the following move multiple times:

// 🔁 Choose two different elements ai and aj such that the absolute difference between them is at most 1 → i.e., |ai - aj| ≤ 1
// Remove the smaller of the two.

// ✅ Your Goal:
// Reduce the array to contain only one element using such moves.

// For each test case, print:

// "YES" if it's possible

// "NO" otherwise

// 🧠 Key Insight:
// You can only remove elements that differ by 0 or 1.

// So, if any two numbers differ by more than 1, you can’t remove one using the allowed move.

// ✅ Strategy:
// Sort the array

// If for any two adjacent elements: a[i+1] - a[i] > 1, print "NO"

// Else, print "YES"

// 🔍 Examples Explained:
// Test Case 1:

// Input: 1 2 2
// Sorted: 1 2 2 → all differences ≤ 1
// YES
// Test Case 2:

// Input: 5 5 5 5
// Sorted: 5 5 5 5 → all equal
// YES
// Test Case 3:

// Input: 1 2 4
// Sorted: 1 2 4 → 4 - 2 = 2 → ❌
// NO
// Test Case 4:

// Input: 1 3 4 4
// Sorted: 1 3 4 4 → 3 - 1 = 2 → ❌
// NO
// Test Case 5:

// Input: 100
// Only one element → already reduced
// YES


const prompt = require('prompt-sync')();

let t = parseInt(prompt("Enter number of test cases: ")); // Number of test cases

for (let test = 0; test < t; test++) {
    let n = parseInt(prompt("Enter array length: ")); // Length of array
    let a = prompt("Enter array elements: ").split(' ').map(Number); // Array elements

    a.sort((x, y) => x - y); // Sort the array

    // Check if any two adjacent elements differ by more than 1
    let possible = true;
    for (let i = 1; i < n; i++) {
        if (a[i] - a[i - 1] > 1) {
            possible = false;
            break;
        }
    }

    console.log(possible ? "YES" : "NO");
}
