// Given an integer array nums, find the largest subarray sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104


function maxSubArray(A) {
    // Initialize two variables:
    // maxSoFar will hold the maximum subarray sum found so far
    // maxEndingHere will hold the maximum subarray sum ending at the current index
    let maxSoFar = A[0];
    let maxEndingHere = A[0];

    // Start looping from the second element (index 1) to the end of the array
    for (let i = 1; i < A.length; i++) {
        // At each index, decide whether to:
        // - extend the previous subarray by adding A[i]
        // - or start a new subarray from the current element A[i]
        // We choose the one that gives the larger sum
        maxEndingHere = Math.max(maxEndingHere + A[i], A[i]);

        // Update maxSoFar if the current maxEndingHere is greater than maxSoFar
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    // After the loop, maxSoFar holds the largest sum of any contiguous subarray
    return maxSoFar;
}


const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); // Output: 6
