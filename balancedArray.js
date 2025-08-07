// 🧮 Problem: Balanced Array Construction
// You are given a number `n` (guaranteed to be even).
// Task: Construct an array `a` of size `n` such that:
//  1. First n/2 numbers are EVEN and distinct.
//  2. Last n/2 numbers are ODD and distinct.
//  3. The sum of the first half == sum of the second half.
// If it's not possible to do this for the given `n`, print "NO".
// Otherwise, print "YES" followed by the valid array.
//
// ⚠️ Constraint: n must be divisible by 2.
// ❗ Note: Answer may not exist for some `n`, even if it’s even.
//
// 🧪 Example Test Cases:
//
// Input:
// 5       ← number of test cases
// 2       ← test case 1
// 4       ← test case 2
// 6       ← test case 3
// 8       ← test case 4
// 10      ← test case 5
//
// Output:
// NO       ← can't make equal sum halves for n = 2
// YES      ← valid array: even part [2,4], odd part [1,5], sums = 6
// 2 4 1 5
// NO       ← n = 6 is not possible to balance
// YES      ← even: [2,4,6,8], odd: [1,3,5,11], sums = 20
// 2 4 6 8 1 3 5 11
// NO       ← can't construct balanced array for n = 10



const prompt = require('prompt-sync')();

// Read number of test cases
const t = parseInt(prompt());

for (let i = 0; i < t; i++) {
    const n = parseInt(prompt());

    // Check if n is divisible by 4, otherwise not possible
    if (n % 4 !== 0) {
        console.log("NO");
    } else {
        console.log("YES");
        let result = [];

        // First half: even numbers
        for (let j = 1; j <= n / 2; j++) {
            result.push(j * 2); // 2, 4, 6, ...
        }

        // Second half: odd numbers, except the last one
        for (let j = 1; j < n / 2; j++) {
            result.push(j * 2 - 1); // 1, 3, 5, ...
        }

        // Last odd number to balance the sum
        const sumEven = (n / 2) * (n / 2 + 1); // sum of first n/2 even numbers
        const sumOdd = (n / 2 - 1) * (n / 2);   // sum of first n/2 - 1 odd numbers
        result.push(sumEven - sumOdd); // the final odd number to balance

        console.log(result.join(' '));
    }
}




// Problem Summary:
// Construct an array of size `n` (even) such that:
// - First n/2 elements are distinct even numbers
// - Last n/2 elements are distinct odd numbers
// - Sum of first half = Sum of second half
// - All numbers are positive and distinct

// Formula 1: First half → even numbers: 2, 4, 6, ..., n
// Sum of first k even numbers = k * (k + 1)
// Where k = n / 2

// Formula 2: Last half → odd numbers: 1, 3, 5, ..., up to (n/2 - 1) odd numbers
// Sum of first k odd numbers = k^2
// Where k = (n / 2) - 1

// Formula 3: Last element in the array = sumEven - sumOdd
// This balances the sums of both halves

// Important condition:
// This solution only works if n % 4 === 0
// Because otherwise it's impossible to balance the sums with integers

// Example for n = 8:
// First half (evens): 2 4 6 8 → sum = 20
// Second half (odds): 1 3 5 → sum = 9
// Last number: 20 - 9 = 11
// Final array: 2 4 6 8 1 3 5 11 → sum of both halves = 20


// ✅ Why n % 4 === 0 is required:
// Let’s denote:

// k = n / 2 (so k is number of even numbers and also number of odd numbers)

// We’ll choose:

// First half: k even numbers → 2, 4, 6, ..., 2k

// Sum = k * (k + 1)

// Second half: (k - 1) odd numbers → 1, 3, 5, ..., 2k - 3

// Sum = (k - 1)^2

// Last odd number to balance both sides = k * (k + 1) - (k - 1)^2

// But here's the problem:

// If k is odd, then:

// The last odd number = k*(k+1) - (k-1)^2 = k^2 + k - (k^2 - 2k + 1) = 3k - 1, which is even, and violates the "odd number" condition.

// Only when k is even (i.e. n is divisible by 4), the last number required to balance the sum is also odd, and all constraints are satisfied.

// 🧠 Final Conclusion:
// ✅ n % 4 === 0 → possible to construct the array.

// ❌ If n % 4 !== 0 → sum mismatch can't be fixed with an odd number.