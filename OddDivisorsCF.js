/*
PROBLEM (Simplified):

Given an integer n, check if there exists an odd divisor x > 1 such that n is divisible by x.

In other words:
- Does n have any odd factor greater than one?
- If yes, print "YES"
- Otherwise, print "NO"

-----------------------------------------------------
INPUT:
- t: number of test cases
- Then t lines, each containing an integer n (2 ≤ n ≤ 10^14)

-----------------------------------------------------
OUTPUT:
- For each n, print "YES" if n has an odd divisor > 1, otherwise "NO".

-----------------------------------------------------
EXAMPLES:

Input:
6
2
3
4
5
998244353
1099511627776

Output:
NO   // 2: divisors are 1 and 2 (2 is even), no odd divisor > 1
YES  // 3: divisor 3 (odd > 1)
NO   // 4: divisors 1,2,4 (all even except 1)
YES  // 5: divisor 5 (odd > 1)
YES  // 998244353 is odd itself (has odd divisors)
NO   // 1099511627776 = 2^40, only powers of two, no odd divisor > 1

-----------------------------------------------------
KEY INSIGHT:
- If n is a power of two → NO
- Otherwise → YES

Why?
- Powers of two have only divisors which are powers of two (all even except 1)
- Any other number has some odd divisor > 1

*/



const prompt = require("prompt-sync")();

// Read the number of test cases
const t = Number(prompt().trim());

for (let i = 0; i < t; i++) {
    // Read the input number n as a string (to safely handle large numbers)
    let nStr = prompt().trim();

    // Convert n to a BigInt for safe handling of large values up to 10^14
    let n = BigInt(nStr);

    // Check if n is a power of two:
    // For BigInt, use the trick: n & (n - 1) === 0 means power of two
    // Note: BigInt bitwise operators are allowed in Node.js v10.4.0+
    if ((n & (n - 1n)) === 0n) {
        // n is a power of two → no odd divisor > 1
        console.log("NO");
    } else {
        // Otherwise, n has an odd divisor > 1
        console.log("YES");
    }
}
