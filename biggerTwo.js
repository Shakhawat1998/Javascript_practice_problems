
// Start with 2 int arrays, a and b, each length 2. 
// Consider the sum of the values in each array. Return the array which has the largest sum. 
// In event of a tie, return a.


// biggerTwo([1, 2], [3, 4]) → [3, 4]
// biggerTwo([3, 4], [1, 2]) → [3, 4]
// biggerTwo([1, 1], [1, 2]) → [1, 2]

/**
 * @param {number[]} a - array of length 2
 * @param {number[]} b - array of length 2
 * @return {number[]} - the array with the larger sum, or `a` if it's a tie
 */
function biggerTwo(a, b) {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumB > sumA) {
        return b;
    } else {
        return a; // returns a in case of tie or if a has larger sum
    }
}

console.log(biggerTwo([1, 2], [3, 4])); // [3, 4]
console.log(biggerTwo([3, 4], [1, 2])); // [3, 4]
console.log(biggerTwo([1, 1], [1, 2])); // [1, 2]
console.log(biggerTwo([5, 5], [4, 6])); // [5, 5] (tie, returns a)
