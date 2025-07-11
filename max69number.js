// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.
 

// Constraints:

// 1 <= num <= 104
// num consists of only 6 and 9 digits.

//simple math trick 
// we need to just find the first occurance of 6 from left side of the number . 
// which is equal to last occurance of 6 from right side of  the number
//then just change this 6 into 9 than you get the max number 

//suppose 9669 . from left side the first 
//occurance of 6 is in 2nd position . 
// so to change this 6 to 9 and keep rest of the digits as it is 
// we need to add 300 so that the number becomes 9969 which is max 

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
    let rightDigCount = -1;
    let digCount = 0;
    let temp = num;

    // Loop through digits from right to left
    while (temp > 0) {
        const dig = temp % 10;
        if (dig === 6) {
            rightDigCount = digCount;
        }
        digCount++;
        temp = Math.floor(temp / 10);
    }

    // If there's no '6', return the original number
    if (rightDigCount === -1) {
        return num;
    }

    // Otherwise, add 3 * 10^rightDigCount
    return num + 3 * Math.pow(10, rightDigCount);
};


console.log(maximum69Number(9669)); // Output: 9969
