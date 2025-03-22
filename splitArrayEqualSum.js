// Given an array of integers greater than zero, find if it 
// is possible to split it in two subarrays (without reordering the elements), 
// such that the sum of the two subarrays is the same. Print the two subarrays.

// Examples : 

// Input : Arr[] = { 1 , 2 , 3 , 4 , 5 , 5  }
// Output :  { 1 2 3 4 } 
//           { 5 , 5 }

// Input : Arr[] = { 4, 1, 2, 3 }
// Output : {4 1}
//          {2 3}

// Input : Arr[] = { 4, 3, 2, 1}
// Output : Not Possible

// An Efficient solution is to first compute the sum of the 
// whole array from left to right. Now we traverse array from 
// right and keep track of right sum, left sum can be 
// computed by subtracting current element from whole sum.


function findSplitPoint(arr) {
    let totalSum = 0;

    // Calculate the total sum of the array
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    let leftSum = 0;

    // Find the split point
    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        let rightSum = totalSum - leftSum;

        if (leftSum === rightSum) {
            return i + 1; // Return split index
        }
    }
    return -1;
}

function printTwoParts(arr) {
    let splitPoint = findSplitPoint(arr);

    if (splitPoint === -1 || splitPoint === arr.length) {
        console.log("Not Possible");
        return;
    }

    console.log("First subarray:", arr.slice(0, splitPoint));
    console.log("Second subarray:", arr.slice(splitPoint));
}

// Example usage
let arr = [1, 2, 3, 4, 5, 5];
printTwoParts(arr);
