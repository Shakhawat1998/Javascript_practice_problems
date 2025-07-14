// Given an integer array, find a triplet having the maximum product.

// For example,

// Input:  { -4, 1, -8, 9, 6 }Output: The triplet having the maximum 
// product is (-4, -8, 9) Input:  { 1, 7, 2, -2, 5 }Output: The triplet
//  having the maximum product is (7, 2, 5)

// A better approach involves sorting the array. Then the triplet having the maximum product can be one of the two:

// The last three elements of the sorted array.
// First two elements and the last element of the sorted array (as the multiplication of 
// two negative numbers results in a positive number).


function findMaxTripletProduct(arr) {
    const n = arr.length;

    // Invalid input check
    if (n < 3) {
        console.log("No triplet exists. The array has less than 3 elements.");
        return;
    }

    // Normal bubble sort
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Compute the two candidate products
    const prod1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
    const prod2 = arr[0] * arr[1] * arr[n - 1];

    if (prod1 > prod2) {
        console.log(`Triplet is (${arr[n - 1]}, ${arr[n - 2]}, ${arr[n - 3]})`);
    } else {
        console.log(`Triplet is (${arr[0]}, ${arr[1]}, ${arr[n - 1]})`);
    }
}

// Sample input
const arr = [-4, 1, -8, 9, 6];
findMaxTripletProduct(arr);
