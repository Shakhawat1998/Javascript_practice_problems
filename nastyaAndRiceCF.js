/*
Problem: Nastya and Rice Grains Weight Consistency

Nastya dropped n grains of rice.

Each grain’s weight is an integer in the range: [a - b, a + b]
The whole package’s total weight is in the range: [c - d, c + d]

Question:
Is it possible that the n grains have weights in their allowed range,
and the sum of their weights fits within the package weight range?

-----------------------------------------------------
How to check:
- Minimum total weight of all grains = n * (a - b)
- Maximum total weight of all grains = n * (a + b)
- The package weight range is from (c - d) to (c + d)

If these two ranges overlap, then it’s possible → print "Yes"
Otherwise → print "No"

-----------------------------------------------------
Examples:

Input:
5 test cases

1) n=7, a=20, b=3, c=101, d=18
- Grain weights range: 17 to 23
- Total grains range: 7 * 17 = 119 to 7 * 23 = 161
- Package weight range: 83 to 119
- Overlap? Yes, at 119
Output: Yes

2) n=11, a=11, b=10, c=234, d=2
- Grains range: 1 to 21
- Total: 11 to 231
- Package range: 232 to 236
- Overlap? No (231 < 232)
Output: No

3) n=8, a=9, b=7, c=250, d=122
- Grains range: 2 to 16
- Total: 16 to 128
- Package: 128 to 372
- Overlap? Yes (128)
Output: Yes

4) n=19, a=41, b=21, c=321, d=10
- Grains range: 20 to 62
- Total: 380 to 1178
- Package: 311 to 331
- Overlap? No (package max 331 < grains min 380)
Output: No

5) n=3, a=10, b=8, c=6, d=1
- Grains range: 2 to 18
- Total: 6 to 54
- Package: 5 to 7
- Overlap? Yes (6,7)
Output: Yes
*/


// Import prompt-sync to read input in Node.js environment
const prompt = require('prompt-sync')();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {

    // Read n, a, b, c, d values for this test case
    let [n, a, b, c, d] = prompt().split(' ').map(Number);

    // Calculate minimum possible total weight of grains
    let minTotal = n * (a - b);

    // Calculate maximum possible total weight of grains
    let maxTotal = n * (a + b);

    // Calculate minimum possible package weight
    let minPackage = c - d;

    // Calculate maximum possible package weight
    let maxPackage = c + d;

    // Find the start of intersection interval (max of lower bounds)
    let intersectionStart = Math.max(minTotal, minPackage);

    // Find the end of intersection interval (min of upper bounds)
    let intersectionEnd = Math.min(maxTotal, maxPackage);

    // Check if intervals intersect: start must be <= end
    if (intersectionStart <= intersectionEnd) {
        // If intervals overlap, output "Yes"
        console.log("Yes");
    } else {
        // If no overlap, output "No"
        console.log("No");
    }
}
