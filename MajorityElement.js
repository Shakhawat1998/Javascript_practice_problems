// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    nums.sort((a, b) => a - b);  // Sorting the array in ascending order
    const len = nums.length;
    return nums[Math.floor(len / 2)];  // Return the middle element
}

const nums =[2,2,1,1,1,2,2];
const result = majorityElement(nums);
console.log(result);


