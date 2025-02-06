// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false


// Approach 1(Power function) - O(1)

// function isPowerOfTwo(n){
//     for(let i=0; i<31;i++){
//         let ans = Math.pow(2,i);

//         if(ans == n) return true;
//     }
//     return false;
// }

// console.log(isPowerOfTwo(8));


// Approach 2(Ceil and floor)
// Ceil() = rounds up to the nearest integer.
// floot() = rounds down to the nearest integer.

// example 1 :
// ceil(log2(5)) = 2
// floor(log2(5)) = 3

// example 2 :
// ceil(log2(8)) = 3
// floor(log2(8)) = 3

// Incase of number multiple of 2 ceil and floor will always be equal.

// Complexity
// Time complexity:
// O(1)

// Space complexity:
// O(1)

// function isPowerOfTwo(n){
//     if(n==0) return false;

//     return Math.floor(Math.log2(n)) == Math.ceil(Math.log2(n))? true:false;
// }

// console.log(isPowerOfTwo(8))



// Approach 3(And Operator)
// And operation between multiple of 2 and next lower number will always give 0 and other wise it will never be 0.

// example 1: 8 & 7
// 1000(8) & 0111(7) => 0000(0)

// example 1: = 10 & 9
// 1010(10) & 1001(9) => 1000(8)

// Complexity
// Time complexity:
// O(1)

// Space complexity:
// O(1)


// // function isPowerOfTwo(n){
//     return n>0 && (n & (n-1)) === 0;
// }

// console.log(isPowerOfTwo(8));

// Approach 4(Recursion)
// Recursively divide n by 2, if we reach 1 then it means it is multiple of 2 and will return true else it will be false.
// Complexity
// Time complexity:
// O(logn)

// Space complexity:
// O(logn)

function isPowerOfTwo(n){
    if (n <=0) return false;
    if (n === 1) return true;

    return (n % 2 === 0) && isPowerOfTwo(n/2);
}

console.log(isPowerOfTwo(8));



