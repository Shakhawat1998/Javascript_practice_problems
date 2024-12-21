// // Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// // You must implement a solution with a linear runtime complexity and use only constant extra space.

// // Input: nums = [4,1,2,1,2]
// Output: 4


function singleNumber(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];  // XOR operation
    }
    
    return result;
}


const nums = [4,1,2,1,2];
const result = singleNumber(nums);
console.log(result);  
