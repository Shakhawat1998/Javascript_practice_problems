// In array {34,0,9,5,7,4,0,4,0,23} shift all the 0s to 
// the front using this single array. You are not allowed to use another array or list


// To shift all the 0s in the array to the front without using another array or list, we can follow a 
// two-pointer approach within the same array. This approach works by iterating 
// over the array and moving non-zero elements toward the end while pushing zeros to the front.


function shiftZerosToFront(arr) {
    let nonZeroIndex = arr.length - 1;  // Pointer to keep track of where the next non-zero element should go

    // Iterate over the array from the last element to the first
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            // Move non-zero elements to their correct position
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex--;
        }
    }

    // Fill remaining positions with 0s
    for (let i = 0; i <= nonZeroIndex; i++) {
        arr[i] = 0;
    }

    return arr;
}

const arr = [34, 0, 9, 5, 7, 4, 0, 4, 0, 23];
console.log(shiftZerosToFront(arr));  // Output: [0, 0, 0, 4, 4, 7, 5, 9, 34, 23]




// Explanation:
// nonZeroIndex: We start with this pointer at the end of the array (arr.length - 1). This will help us move 
// non-zero elements towards the end of the array.
// First Loop: We iterate from the end of the array (i = arr.length - 1) 
// to the beginning, and whenever we encounter a non-zero element, we place it at the 
// nonZeroIndex position and then decrement the nonZeroIndex.
// Second Loop: Once we've placed all the non-zero elements in their correct 
// position, we then fill the remaining positions (from the start of the array up to nonZeroIndex) with zeros.
