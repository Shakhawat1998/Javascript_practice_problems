// You have n candies and need to distribute them between Alice and Betty such that:

// Alice gets more than Betty → a > b

// Both get at least 1 candy

// All candies must be distributed → a + b = n

// 🎯 Your task is to count the number of valid (a, b) pairs that meet these conditions for multiple values of n.

// ✅ How to Solve:
// We want the number of integer solutions to:

// a + b = n

// a > b

// a > 0, b > 0

// If a > b and a + b = n, then:

// a > n/2

// So, valid values of a are from floor(n/2) + 1 to n-1

// That gives: number of valid (a,b) pairs floor((n-1)/2)


// 📥 Input Format:

// t → number of test cases (1 ≤ t ≤ 10^4)
// n (t times) → number of candies in each test case (1 ≤ n ≤ 2×10^9)
// 📤 Output Format:
// For each test case, print the number of ways to distribute candies so that Alice gets more than Betty.

// 💡 Examples Explained:
// Test Case 1: n = 7
// All pairs (a, b) where a + b = 7 and a > b:

// (6,1) ✅

// (5,2) ✅

// (4,3) ✅
// ⇒ Answer: 3

// Test Case 2: n = 1
// Impossible to split into two positive integers.
// ⇒ Answer: 0

// Test Case 3: n = 2
// Only pair: (1,1) → a is not greater than b.
// ⇒ Answer: 0

// Test Case 4: n = 3
// Possible pairs:

// (2,1) ✅

// (1,2) ❌ (a < b)
// ⇒ Answer: 1

// Test Case 5: n = 2,000,000,000
// Answer = floor((2,000,000,000 - 1)/2) = 999,999,999

// Test Case 6: n = 763,243,547
// Answer = floor((763,243,547 - 1)/2) = 381,621,773


// // Problem: Distribute 'n' candies between Alice and Betty
// // Conditions:
// // 1. a + b = n               → All candies must be distributed
// // 2. a > b                   → Alice gets more candies than Betty
// // 3. a > 0, b > 0            → Each gets at least one candy
// // Goal: Count how many (a, b) pairs satisfy these conditions

// // Step 1: Express b in terms of a → b = n - a

// // Step 2: From a > b, substitute b = n - a
// //         a > n - a

// // Step 3: Solve the inequality:
// //         a > n - a
// //         2a > n
// //         a > n / 2

// // Step 4: a must be greater than n/2 and less than n (since b must be at least 1)
// //         So valid a values are:
// //         a = floor(n/2) + 1, ..., n - 1

// // Step 5: Count of valid a values:
// //         total = (n - 1) - floor(n/2)

// // Step 6: That simplifies to:
// //         total = floor((n - 1) / 2)

// // This total is the number of valid ways to distribute candies such that:
// // - Alice gets more than Betty
// // - Both get at least 1 candy
// // - All candies are used





// Import prompt-sync
const prompt = require('prompt-sync')();

// Read number of test cases
const t = parseInt(prompt('Enter number of test cases: '));

// Initialize array for test cases
const testCases = [];

// Read each test case
for (let i = 0; i < t; i++) {
  const n = parseInt(prompt());
  testCases.push(n);
}

// Function to calculate and print result for each test case
function candyDistributions(testCases) {
  for (let i = 0; i < testCases.length; i++) {
    const n = testCases[i];

    // From problem logic:
    // Valid (a, b) pairs where a > b and a + b = n ⇒ floor((n - 1) / 2)
    const ways = Math.floor((n - 1) / 2);

    console.log(ways);
  }
}

// Run the function
candyDistributions(testCases);
