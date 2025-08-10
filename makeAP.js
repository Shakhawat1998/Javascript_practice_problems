/*
Problem: Make Arithmetic Progression by Multiplying One Number

Given three positive integers a, b, c.

You can perform exactly one operation:
- Choose a positive integer m,
- Multiply exactly one of the numbers (a, b, or c) by m.

Question:
Is it possible to make the sequence [a, b, c] form an arithmetic progression (AP) after this operation?

Recall:
- An AP means the difference between consecutive elements is constant.
- For three elements, this means: b - a = c - b

Input:
- t test cases
- For each test case: integers a, b, c

Output:
- Print "YES" if it’s possible to get an AP after one multiplication operation
- Otherwise, print "NO"

------------------------------------------------------------
Examples:

Input:
11
10 5 30
30 5 10
1 2 3
1 6 3
2 6 3
1 1 1
1 1 2
1 1 3
1 100000000 1
2 1 1
1 2 2

Output:
YES
YES
YES
YES
NO
YES
NO
YES
YES
NO
YES

Explanation:

1) 10 5 30
Multiply b=5 by m=4 → sequence: [10, 20, 30] → AP with difference 10 → YES

2) 30 5 10
Multiply b=5 by m=4 → sequence: [30, 20, 10] → AP with difference -10 → YES

3) 1 2 3
Multiply any by m=1 (no change) → sequence: [1, 2, 3] → AP → YES

4) 1 6 3
Multiply a=1 by m=9 → sequence: [9, 6, 3] → AP with difference -3 → YES

5) 2 6 3
No multiplication can form AP → NO

... and so on for other examples.
*/



const prompt = require('prompt-sync')(); // Import prompt-sync for input

// Read number of test cases
const t = parseInt(prompt());

// Function to check if three numbers form an AP
function isAP(a, b, c) {
    return (b - a) === (c - b);
}

// For each test case
for (let i = 0; i < t; i++) {
    // Read a, b, c from input
    let [a, b, c] = prompt().split(' ').map(Number);

    let possible = false;

    // 1) Try multiplying 'a' by m to make AP:
    // We want (b - a*m) == (c - b) => m = (b - c + b) / a = (2b - c)/a
    if ((2 * b - c) % a === 0) {
        let m = (2 * b - c) / a;
        if (m > 0) possible = true;
    }

    // 2) Try multiplying 'b' by m to make AP:
    // (b*m - a) == (c - b*m) => 2 * b * m = a + c => m = (a + c) / (2 * b)
    if (!possible && (a + c) % (2 * b) === 0) {
        let m = (a + c) / (2 * b);
        if (m > 0) possible = true;
    }

    // 3) Try multiplying 'c' by m to make AP:
    // (b - a) == (c*m - b) => m = (2b - a) / c
    if (!possible && (2 * b - a) % c === 0) {
        let m = (2 * b - a) / c;
        if (m > 0) possible = true;
    }

    // 4) Also check if already AP without any multiplication (m=1)
    if (!possible && isAP(a, b, c)) {
        possible = true;
    }

    // Output result
    console.log(possible ? "YES" : "NO");
}
