// // Valid Triangle Number

// // Given an integer array nums, return the number of triplets chosen 
// from the array that can make triangles if we take them as side 
// lengths of a triangle.

 

// // Example 1:

// // Input: nums = [2,2,3,4]
// // Output: 3
// // Explanation: Valid combinations are: 
// // 2,3,4 (using the first 2)
// // 2,3,4 (using the second 2)
// // 2,2,3
// // Example 2:

// // Input: nums = [4,2,3,4]
// // Output: 4
 

// // Constraints:

// // 1 <= nums.length <= 1000
// // 0 <= nums[i] <= 1000



// // Solve::  sorted + two-pointer approach

// 1.Sort the Array
// 2.Fix First Two Sides (i and j)
// Use two nested loops:

// Outer loop: i from 0 to n - 3

// Inner loop: j from i + 1 to n - 2

// These fix the first and second sides of the triangle

// 3.Use a Moving Pointer for Third Side (k)
// Start k from j + 1, and keep increasing k while the triangle inequality holds:


// while (k < n && nums[i] + nums[j] > nums[k]) {
//     k++;
// }
// This finds the rightmost valid index for the third side.

// The number of valid triangles formed with fixed i and j is:
// k - j - 1

// 4.Optimization: Reuse the Previous k
// Don't reset k = j + 1 for each new j.

// Instead, continue from the last used k.
// This works because the array is sorted and the next j is larger → nums[i] + nums[j] is also larger, 
// so previously failed nums[k] might now succeed.

// 5. Skip Zero-Length Sides

// if (nums[i] === 0) continue;
// A triangle can't have a side of length 0.

// This reduces unnecessary iterations.

// 6.Accumulate all counts and return the result.



var triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) continue;
        let k = i + 2;

        for (let j = i + 1; j < nums.length - 1; j++) {
            while (k < nums.length && nums[i] + nums[j] > nums[k]) {
                k++;
            }
            count += k - j - 1;
        }
    }

    return count;
};

// ✅ Input
const nums = [2, 2, 3, 4];

// 🔍 Output
console.log("Number of valid triangles:", triangleNumber(nums)); // Output: 3
