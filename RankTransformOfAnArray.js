// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.
// Example 3:

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]


// Intuition
// Sorting Step:

// We create a sorted clone of arr.
// This helps us determine rank positions efficiently.

// Using a HashMap:
// The first occurrence of each number in the sorted array is given a rank.
// Duplicates get the same rank.

// Updating the Original Array:
// We replace each number in arr with its rank using rankMap.


function arrayRankTransform(arr) {
    let n = arr.length;
    let rankObj = {}; 

    // Clone the array and sort it using Bubble Sort
    
    let sortedArray = new Array(n);
    for (let i = 0; i < n; i++) {
        sortedArray[i] = arr[i];
    }


    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Swap
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    let rank = 1;
    for (let num of sortedArray) {
        if (!(num in rankObj)) {
            rankObj[num] = rank;
            rank++;
        }
    }

    return arr.map(num => rankObj[num]);
}

// Example usage:
console.log(arrayRankTransform([40, 10, 20, 30])); 
