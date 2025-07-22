// Problem Description:
// You are given an array of positive integers nums. Your 

// task is to find a contiguous subarray (a subarray is 
// a sequence of elements from the array that are consecutive 
// in position) such that all the elements in the subarray are
//  unique (i.e., no duplicates), and the sum of the subarray is maximized.

// Return the maximum possible sum of any such subarray with all unique elements.

// Input: nums = [4, 2, 4, 5, 6]
// Output: 17
// Explanation: The subarray [2, 4, 5, 6] contains all unique elements and has the maximum sum.

// Input: nums = [5, 2, 1, 2, 5, 2, 1, 2, 5]
// Output: 8
// Explanation: The subarray [5, 2, 1] or [1, 2, 5] are both valid with sum = 8.


// 1 <= nums.length <= 10^5

// 1 <= nums[i] <= 10^4



//  Why Sliding Window is the Optimal Approach
// ✨ Let’s understand what’s happening in the array:
// Imagine scanning from left to right.

// You want to include elements as long as they're unique.

// The moment a duplicate appears, that’s a problem.

// So, we need to shrink the start of the window until the duplicate is gone.

// This behavior is exactly what a sliding window pattern handles efficiently.

// 🛠️ Internal Tracking You Need:
// Two Pointers – left and right:
// right extends the window (scanning new elements).
// left shrinks the window (removing duplicates).

// Hash Set or Boolean Array:
// To track which elements are already in the current window.
// If nums[right] is already seen, we move left forward until it’s gone.

// Running Sum and Max Score:
// Maintain a currentSum for the sum of values in the window.
// Update maxScore when you have a valid window.

var maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let currentSum = 0;
    let maxSum = 0;
    
    for (let right = 0; right < nums.length; right++) {
        while (seen.has(nums[right])) {
            currentSum -= nums[left];
            seen.delete(nums[left]);
            left++;
        }
        currentSum += nums[right];
        seen.add(nums[right]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};


console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));           // Output: 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); // Output: 8












