// Problem: Minimum swaps to make array "good"
// --------------------------------------------
// You are given an array of non-negative integers.
// An array is called "good" if:
//    For every index i, the parity (even/odd) of index i matches the parity of a[i].
//    That means: i % 2 === a[i] % 2
//
// You can swap any two elements (not just adjacent ones).
// Find the minimum number of swaps needed to make the array good.
// If it’s not possible, return -1.
//
// Input:
// t - number of test cases
// For each test case:
//   n - length of array
//   a[] - array of integers
//
// Output:
// Minimum number of swaps or -1 if not possible

// ---------------------------------------------------------
// Example 1:
// Input: n = 4, a = [3, 2, 7, 6]
// Index:      0  1  2  3
// Parity i:   0  1  0  1
// Parity a[i]:1  0  1  0   → mismatch at every index
// We can do:
//   Swap 0 and 1 → [2, 3, 7, 6]
//   Swap 2 and 3 → [2, 3, 6, 7]
// Now:
//   i % 2 == a[i] % 2 for all i → GOOD!
// Output: 2

// ---------------------------------------------------------
// Example 2:
// Input: n = 3, a = [3, 2, 6]
// Index:      0  1  2
// Parity i:   0  1  0
// Parity a[i]:1  0  0   → mismatch at index 0 and 1
// One swap: swap index 0 and 1 → [2, 3, 6]
// Now parities match
// Output: 1

// ---------------------------------------------------------
// Example 3:
// Input: n = 1, a = [7]
// Index: 0, i % 2 = 0, a[i] % 2 = 1 → mismatch
// No other element to swap with
// Output: -1

// ---------------------------------------------------------
// Example 4:
// Input: n = 7, a = [4, 9, 2, 1, 18, 3, 0]
// Check all positions:
// Index 0: 4%2 = 0 ✅
// Index 1: 9%2 = 1 ✅
// Index 2: 2%2 = 0 ✅
// Index 3: 1%2 = 1 ✅
// Index 4: 18%2 = 0 ✅
// Index 5: 3%2 = 1 ✅
// Index 6: 0%2 = 0 ✅
// All match already → GOOD!
// Output: 0


// Import prompt-sync for input
const prompt = require("prompt-sync")();

// Read number of test cases
const t = parseInt(prompt());

// Loop over each test case
for (let test = 0; test < t; test++) {
  const n = parseInt(prompt()); // Read array size
  const a = prompt().split(' ').map(Number); // Read array elements

  let evenMismatch = 0; // i even, a[i] odd
  let oddMismatch = 0;  // i odd, a[i] even

  for (let i = 0; i < n; i++) {
    const indexParity = i % 2;
    const valueParity = a[i] % 2;

    if (indexParity !== valueParity) {
      if (indexParity === 0) {
        evenMismatch++;
      } else {
        oddMismatch++;
      }
    }
  }

  if (evenMismatch !== oddMismatch) {
    console.log(-1);
  } else {
    console.log(evenMismatch); // Minimum swaps
  }
}


// We count two kinds of mismatches separately:
//
// 1) evenMismatch:
//    Count of indices i where i is even (i % 2 == 0)
//    but the element a[i] is odd (a[i] % 2 == 1).
//    This means the element is "wrong" for an even index.
//
// 2) oddMismatch:
//    Count of indices i where i is odd (i % 2 == 1)
//    but the element a[i] is even (a[i] % 2 == 0).
//    This means the element is "wrong" for an odd index.
//
// Why separate counts?
// Because to fix the array, we must swap a misplaced odd element at
// an even index with a misplaced even element at an odd index.
// Each swap fixes exactly one evenMismatch and one oddMismatch.
//
// If these two counts are not equal, it means
// we cannot pair all misplaced elements to fix the array.
// Hence, in that case, the answer is -1 (impossible).
//
// If they are equal, the minimum number of moves is exactly the number of pairs.
