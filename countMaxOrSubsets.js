// You're given an array nums of integers.

// Goal:

// Find the maximum bitwise OR that can be obtained from any non-empty subset of nums.

// Count how many different non-empty subsets of nums give this maximum OR.

// A subset can include any combination of elements from the array.
// Subsets are different if their indices are different, even if the values are the same.

// A bitwise OR combines bits such that 1 OR 0 = 1, 1 OR 1 = 1, 0 OR 0 = 0.

// ✅ Example 1
// Input: nums = [3, 1]
// Output: 2

// Explanation:
// All non-empty subsets of [3, 1] are:

// [3] → OR = 3

// [1] → OR = 1

// [3, 1] → OR = 3 OR 1 = 3

// 🔸 The maximum OR is 3.
// 🔸 Subsets with OR = 3: [3], [3, 1] → count = 2

// ✅ Example 2
// Input: nums = [2, 2, 2]
// Output: 7

// Explanation:
// All non-empty subsets:

// 1-element: [2] (3 ways: choose any of 3 positions)

// 2-elements: [2,2] (3 combinations)

// 3-elements: [2,2,2]

// In total: 
// 2
// 3
// −
// 1
// =
// 7
// 2 
// 3
//  −1=7 non-empty subsets.

// Since all elements are the same, OR will always be 2.

// 🔸 Max OR = 2
// 🔸 All 7 subsets have OR = 2 → count = 7

// ✅ Example 3
// Input: nums = [3, 2, 1, 5]
// Output: 6

// Explanation:
// We are looking for subsets whose bitwise OR is maximum.

// Try different combinations to find max OR:

// [3,2,1,5] → OR = 3 | 2 | 1 | 5 = 7

// Try other combinations that also give 7:

// [3,5]

// [2,5]

// [3,1,5]

// [2,1,5]

// [3,2,5]

// Total subsets with OR = 7: 6

// 🔸 So, max OR = 7, count = 6

// 💡 Constraints Notes:
// The length is small: up to 16 elements.

// That means we can generate all subsets easily (up to 
// 2
// 16
// =
// 65536
// 2 
// 16
//  =65536 subsets).



// Approach
// Here's how I solved it:

// First, I calculate the maximum possible OR by doing bitwise OR of all elements in the array.
// Then I use backtracking to generate all possible subsets.
// For each subset, I calculate its OR value.
// If the OR equals the maximum OR, I increment my counter.
// I explore both choices at each position: include the current element or skip it.



function countMaxOrSubsets(nums) {
    // Step 1: Calculate the maximum possible OR from all elements
    let maxOr = 0;
    for (let num of nums) {
        maxOr |= num;
    }
    console.log("Max OR value:", maxOr);

    let count = 0;

    function backtrack(index, currentOr) {
        // Base case: All elements considered
        if (index === nums.length) {
            if (currentOr === maxOr) {
                count++;
                console.log("Valid subset found with OR =", currentOr);
            }
            return;
        }

        // Include current element
        backtrack(index + 1, currentOr | nums[index]);

        // Exclude current element
        backtrack(index + 1, currentOr);
    }

    backtrack(0, 0);

    console.log("Total subsets with max OR:", count);
    return count;
}


console.log(countMaxOrSubsets([3, 1]));       // Output: 2
console.log(countMaxOrSubsets([2, 2, 2]));    // Output: 7
console.log(countMaxOrSubsets([3, 2, 1, 5])); // Output: 6

