// find subarrays with a given sum in array
// given integer array
//find subarrays with a given sum in it 
//i/p: arr = [3,4,-7,1,3,3,1,-4]
// target = 7
//o/p: [3,4], [3,4,-7,1,3,3],[1,3,3],[3,3,1]

//Uses a sliding window (for positive numbers) or a hashmap (for mixed numbers) approach.

function findSubarraysWithSum(arr, targetSum) {
    let result = []; // Stores the list of subarrays that sum to targetSum
    let prefixSum = new Map(); // A map to store prefix sums and their corresponding indices
    let sum = 0; // Keeps track of the cumulative sum

    // Initialize the map with sum 0 at index -1 to handle subarrays starting from index 0
    prefixSum.set(0, [-1]);

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Update the cumulative sum

        // Check if (sum - targetSum) exists in the map
        // If it does, it means there exists a subarray that sums to targetSum
        if (prefixSum.has(sum - targetSum)) {
            // Get all starting indices where (sum - targetSum) occurred
            for (let start of prefixSum.get(sum - targetSum)) {
                // Extract and store the valid subarray
                result.push(arr.slice(start + 1, i + 1));
            }
        }

        // Store the current prefix sum in the map
        // If the sum is not already in the map, initialize an empty array
        if (!prefixSum.has(sum)) {
            prefixSum.set(sum, []);
        }
        // Append the current index to the list of occurrences of this sum
        prefixSum.get(sum).push(i);
    }
    
    return result; // Return the list of valid subarrays
}

// Example usage
console.log(findSubarraysWithSum([1, 2, 3, 4, 2, -1, 5], 5));
