// Given a positive integer n, write a function that returns the number 
// of set bits in its binary representation (also known as the Hamming weight).

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

// Constraints:

// 1 <= n <= 231 - 1

//Appraoch 

//bit manipulation 


var hammingWeight = function(n) {
    let count = 0;

    while (n !== 0) {
        n = n & (n - 1); // Removes the lowest set bit
        count++;
    }

    return count;
};


console.log(hammingWeight(13))



//  Example: n = 13 (binary: 1101)
// count = 0

// n = 1101, n-1 = 1100 → n = 1100, count = 1

// n = 1100, n-1 = 1011 → n = 1000, count = 2

// n = 1000, n-1 = 0111 → n = 0000, count = 3

// ✅ Final count = 3 (because 1101 has three 1s)