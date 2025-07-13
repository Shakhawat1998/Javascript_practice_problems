// Given an integer n, we need to repeatedly find the sum of 
// its digits until the result becomes a single-digit number.

// Examples:
// Input: n = 1234 
// Output: 1 
// Explanation:
// Step 1: 1 + 2 + 3 + 4 = 10 
// Step 2: 1 + 0 = 1

// Input: n = 5674
// Output: 4
// Explanation: 
// Step 1: 5 + 6 + 7 + 4 = 22 
// Step 2: 2 + 2 = 4




// The approach is focused on calculating the digital root of a number, 
// which is the result of summing the digits repeatedly until a 
// single-digit value is obtained. Here's how it works conceptually:

// Sum the digits: Start by adding all the digits of the given number.
// Check the result: If the sum is a single-digit number (i.e., less than 10), stop and return it.
// Repeat the process: If the sum is still more than a single digit, repeat the process with
//  the sum of digits. This 
// continues until a single-digit sum is reached.





function singleDigit(n) {
    let sum = 0;

    // Repetitively calculate sum until
    // it becomes single digit
    while (n > 0 || sum > 9) {

        // If n becomes 0, reset it to sum 
        // and start a new iteration.
        if (n === 0) {
            n = sum;
            sum = 0;
        }

        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// Driver Code
const n = 1234;
console.log(singleDigit(n));