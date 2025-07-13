
// Given an array of positive ints, return a new array 
// of length "count" containing the first even numbers
//  from the original array. The original array will 
//  contain at least "count" even numbers.


// copyEvens([3, 2, 4, 5, 8], 2) → [2, 4]
// copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8]
// copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4]


function copyEvens(nums, count) {
  const result = [];
  for (let i = 0; i < nums.length && result.length < count; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

// Tests
console.log(copyEvens([3, 2, 4, 5, 8], 2)); // → [2, 4]
console.log(copyEvens([3, 2, 4, 5, 8], 3)); // → [2, 4, 8]
console.log(copyEvens([6, 1, 2, 4, 5, 8], 3)); // → [6, 2, 4]


