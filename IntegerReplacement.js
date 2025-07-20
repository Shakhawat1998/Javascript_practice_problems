// Given a positive integer n, you can apply one of the following operations:

// If n is even, replace n with n / 2.
// If n is odd, replace n with either n + 1 or n - 1.
// Return the minimum number of operations needed for n to become 1.

 

// Example 1:

// Input: n = 8
// Output: 3
// Explanation: 8 -> 4 -> 2 -> 1
// Example 2:

// Input: n = 7
// Output: 4
// Explanation: 7 -> 8 -> 4 -> 2 -> 1
// or 7 -> 6 -> 3 -> 2 -> 1
// Example 3:

// Input: n = 4
// Output: 2
 

// Constraints:

// 1 <= n <= 2^31 - 1


function integerReplacement(n) {
    // Create an array to cache computed results (memoization)
    const cache = [];

    // Recursive helper function to count the minimum steps
    function countOps(num) {
        // Base case: if num is 1, no more steps are needed
        if (num === 1) return 0;

        // If result is already in cache, return it
        if (cache[num] !== undefined) return cache[num];

        let result;

        // If number is even, divide by 2 and add 1 operation
        if (num % 2 === 0) {
            result = 1 + countOps(num / 2);
        } else {
            // If number is odd, try both num + 1 and num - 1 and take the minimum steps
            result = 1 + Math.min(countOps(num + 1), countOps(num - 1));
        }

        // Store the result in cache
        cache[num] = result;

        return result;
    }

    // Start the recursive process
    return countOps(n);
}


console.log(integerReplacement(7));  // Output: 4
// Steps: 7 → 8 → 4 → 2 → 1
