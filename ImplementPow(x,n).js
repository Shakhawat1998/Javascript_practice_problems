// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Base Case: If n==0, return 1 since any number raised to power 0 is 1.

// Handling Negative Exponents: If

// n is negative:
// Convert n to positive (n=−n).
// Invert x (x=1/x).
// Compute x^n recursively.
// Exponentiation by Squaring:
// If n is even, use the property: x^n=(x^2)^n/2
// This reduces the number of recursive calls.
// If n is odd, use the relation: x^n = x*x^n-1
// This ensures correctness while maintaining efficiency.


var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    let ans = 0;

    if (n < 0) {
        n = -n;
        x = 1 / x;
        ans = x * myPow(x, n - 1);
    } else if (n % 2 === 0) {
        ans = myPow(x * x, Math.floor(n / 2));
    } else {
        ans = x * myPow(x, n - 1);
    }

    return ans;
};


console.log(myPow(2.75,5));