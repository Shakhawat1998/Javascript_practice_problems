// You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and 
// j - i != nums[j] - nums[i].

// Return the total number of bad pairs in nums.



// Example 1:

// Input: nums = [4,1,3,3]
// Output: 5
// Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
// The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
// The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
// The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
// The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
// There are a total of 5 bad pairs, so we return 5.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 0
// Explanation: There are no bad pairs.

//Idea

// 1️⃣ Total Pairs Formula

// The total number of pairs in an array of size ( n ) is:
// (n(n-1))/2
// 2️⃣ Counting Good Pairs Efficiently

// Use a hash map to track the frequency of ( nums[i] - i ).
// Each time we see the same value again, it forms a good pair.
// 3️⃣ Subtract Good Pairs from Total Pairs

// This gives us the bad pairs count.


var countBadPairs = function (nums) {
    let freq = {}; // Using a plain JavaScript object as the hashmap
    let n = nums.length;
    let totalPairs = (n * (n - 1)) / 2;
    let goodPairs = 0;

    for (let i = 0; i < n; i++) {
        let diff = i - nums[i];
        if (freq[diff]) {
            goodPairs += freq[diff]; // If diff exists, add the count of previous occurrences
        }
        // Update the frequency of the current diff
        freq[diff] = (freq[diff] || 0) + 1;
    }

    return totalPairs - goodPairs;
};



let nums = [4,1,3,3];
console.log(countBadPairs(nums)); // Output the count of bad pairs

