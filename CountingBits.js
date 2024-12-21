// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
// ans[i] is the number of 1's in the binary representation of i.

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101


function countBits(num) {
    let counts = new Array(num + 1).fill(0);  // Initialize an array of size num + 1 with 0s
    
    for (let i = 1; i <= num; i++) {
        counts[i] = counts[i >> 1] + (i & 1);  // Right shift i and add the least significant bit of i
    }
    
    return counts;
}

// Example usage:
const num = 5;
const result = countBits(num);
console.log(result);  // Output: [0, 1, 1, 2, 1, 2]
