// Given a sorted array arr[] with possibly some duplicates, the task is to find the first and last occurrences of an element x in the given array.

// Note: If the number x is not found in the array then return both the indices as -1.

// Examples: 

// Input : arr[] = [1, 3, 5, 5, 5, 5, 67, 123, 125], x = 5
// Output : 2 5
// Explanation: First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5


// Input : arr[] = [1, 3, 5, 5, 5, 5, 7, 123, 125 ], x = 7
// Output : 6 6
// Explanation: First and last occurrence of 7 is at index 6


// Input: arr[] = [1, 2, 3], x = 4
// Output: -1 -1
// Explanation: No occurrence of 4 in the array, so, output is [-1, -1]


//binary search


// Function for finding first and last occurrence of x
function findFirst(arr, x) {
    let n = arr.length;
    
    // Initialize low and high index
    let low = 0, high = n - 1;
    
    // Initialize first occurrence
    let first = -1;
    
    // Find first occurrence of x
    while (low <= high) {
        
        // Find the mid index
        let mid = Math.floor((low + high) / 2);
        
        // If x is equal to arr[mid]
        if (x === arr[mid]) {
            first = mid;
            high = mid - 1;
        }
        
        // If x is less than arr[mid], 
        // then search in the left subarray
        else if (x < arr[mid])
            high = mid - 1;
        
        // If x is greater than arr[mid], 
        // then search in the right subarray
        else
            low = mid + 1;
    }
    return first;
}
 
function findLast(arr, x) {
    let n = arr.length;
    
    // Initialize low and high index
    let low = 0, high = n - 1;
    
    // Initialize last occurrence
    let last = -1;
    
    // Find last occurrence of x
    while (low <= high) {
        
        // Find the mid index
        let mid = Math.floor((low + high) / 2);
        
        // If x is equal to arr[mid]
        if (x === arr[mid]) {
            last = mid;
            low = mid + 1;
        }
        
        // If x is less than arr[mid], 
        // then search in the left subarray
        else if (x < arr[mid])
            high = mid - 1;
        
        // If x is greater than arr[mid], 
        // then search in the right subarray
        else
            low = mid + 1;
    }
    return last;
}
 
function find(arr, x) {
    let n = arr.length;
    
    // Find first and last index
    let first = findFirst(arr, x);
    let last = findLast(arr, x);
    
    let res = [first, last];
    return res;
}
 
let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
let x = 5;
let res = find(arr, x);
console.log(res[0] + " " + res[1]);
