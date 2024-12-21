// Input: An array of integers nums and an integer target.
// Output: Return the indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
    let prevMap = new Map();  // Create a Map to store previously seen numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];  // Calculate the difference needed to reach the target
        
        // Check if the difference is already in the map
        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i];  // Return the indices of the two numbers
        }
        
        // Store the current number and its index in the map
        prevMap.set(nums[i], i);
    }
    
    // If no solution is found, throw an exception
    throw new Error("No two sum solution found");
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log("Indices of the two numbers: ", result);
