// // You are given two 2D arrays nums1 and nums2.
// // Each row is in the form [id, value], where:

// // id is a unique number

// // value is the value for that id

// // Your task is to:

// // Combine both arrays by adding values for the same id.

// // If an id appears in only one array, keep its value as is.

// // Return a new array of [id, totalValue], sorted by id in ascending order.




// Example 1:

// Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
// Output: [[1,6],[2,3],[3,2],[4,6]]
// Explanation: The resulting array contains the following:
// - id = 1, the value of this id is 2 + 4 = 6.
// - id = 2, the value of this id is 3.
// - id = 3, the value of this id is 2.
// - id = 4, the value of this id is 5 + 1 = 6.
// Example 2:

// Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
// Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
// Explanation: There are no common ids, so we just include each id with its value in the resulting list.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 200
// nums1[i].length == nums2[j].length == 2
// 1 <= idi, vali <= 1000
// Both arrays contain unique ids.
// Both arrays are in strictly ascending order by id



function mergeArrays(nums1, nums2) {
    let i = 0, j = 0;
    const ans = [];

    // Traverse both arrays while elements are left in both
    while (i < nums1.length && j < nums2.length) {
        const [id1, val1] = nums1[i];
        const [id2, val2] = nums2[j];

        if (id1 === id2) {
            // If both have the same id, sum the values and push to result
            ans.push([id1, val1 + val2]);
            i++;
            j++;
        } else if (id1 < id2) {
            // If nums1 has smaller id, add it directly and move pointer
            ans.push([id1, val1]);
            i++;
        } else {
            // If nums2 has smaller id, add it directly and move pointer
            ans.push([id2, val2]);
            j++;
        }
    }

    // Add any remaining elements from nums1
    while (i < nums1.length) {
        ans.push(nums1[i++]);
    }

    // Add any remaining elements from nums2
    while (j < nums2.length) {
        ans.push(nums2[j++]);
    }

    return ans;
}

// Example usage
const nums1 = [[1, 2], [2, 3], [4, 5]];
const nums2 = [[1, 4], [3, 2], [4, 1]];

const result = mergeArrays(nums1, nums2);

// Output: [[1, 6], [2, 3], [3, 2], [4, 6]]
console.log("Merged array:", result);
