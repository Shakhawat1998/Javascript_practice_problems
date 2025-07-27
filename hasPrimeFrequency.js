// You are given an integer array nums.

// Return true if the frequency of any element of the array is prime, otherwise, return false.

// The frequency of an element x is the number of times it occurs in the array.

// A prime number is a natural number greater than 1 with only two factors, 1 and itself.

 

// Example 1:

// Input: nums = [1,2,3,4,5,4]

// Output: true

// Explanation:

// 4 has a frequency of two, which is a prime number.

// Example 2:

// Input: nums = [1,2,3,4,5]

// Output: false

// Explanation:

// All elements have a frequency of one.

// Example 3:

// Input: nums = [2,2,2,4,4]

// Output: true

// Explanation:

// Both 2 and 4 have a prime frequency.

 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100




// Explanation
// Count Frequencies
// Check Each count
// If count is 2, 3, 5, or 7, it immediately returns true.
// If count is 1, or divisible by 2, 3, 5, or 7, it moves to the next frequency.
// If count is greater than 1, and it wasn't one of the small primes, and it's not divisible by any of them, it returns true.
// No Match: If no frequency satisfies the condition, it returns false.



const hasPrimeFrequency = (nums) => {
    const counts = new Map();

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    for (const entry of counts) {
        const freq = entry[1]; // frequency is the second item of [key, value]
        
        if (freq === 2 || freq === 3 || freq === 5 || freq === 7) return true;
        if (freq === 1 || freq % 2 === 0 || freq % 3 === 0 || freq % 5 === 0 || freq % 7 === 0) continue;
        return true;
    }

    return false;
};


console.log(hasPrimeFrequency([1,2,3,4,5,4])); // true
console.log(hasPrimeFrequency([1, 1, 2, 2, 3]));    // true
console.log(hasPrimeFrequency([4, 4, 4, 4]));       // false
