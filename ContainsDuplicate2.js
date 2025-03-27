// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105


// 💡 Intuition
// We need to check if there are two identical elements in nums such that their indices differ by at most k.

// 🚀 Approach
// We'll use a HashMap to store the last seen index of each number in nums.

// Steps:
// 1️⃣ Iterate through nums.
// 2️⃣ If the number is already in the HashMap, check if the index difference is ≤ k:

// ✅ If yes, return true.
// ❌ If no, update its index.
// 3️⃣ If no such pair is found, return false.

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
};


let nums = [1, 2, 3, 1];
let k = 3;
console.log(containsNearbyDuplicate(nums, k)); // Output: true
