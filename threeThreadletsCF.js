/*
🔹 Problem Simplified:

We start with 3 threadlets of lengths a, b, c.

👉 Operation allowed:
- Pick any threadlet and cut it into 2 smaller threadlets.
- Both pieces must have positive integer lengths.
- At most 3 cuts are allowed in total.
- We can also cut pieces obtained from earlier cuts.

Goal:
Can we make ALL threadlets equal in length after at most 3 cuts?

----------------------------------------------------
🔹 Key Idea:
- If they are already equal → "YES".
- Otherwise, with ≤ 3 cuts, check if we can make them equal.
- Usually possible if one length can be split into multiples of the others.

----------------------------------------------------
🔹 Examples explained:

Example 1:
Input: 1 3 2
- Start: [1, 3, 2]
- Cut 3 → [1, 2, 1, 2]
- Cut 2 → [1, 1, 1, 1, 2]
- Cut 2 again → [1, 1, 1, 1, 1, 1]
✅ All equal. Answer = YES.

Example 2:
Input: 5 5 5
- Already equal.
✅ Answer = YES.

Example 3:
Input: 6 36 12
- Trying cuts:
  - 36 can be split, but still not matching with 6 & 12.
- Cannot make all equal in ≤ 3 operations.
❌ Answer = NO.

Example 4:
Input: 7 8 7
- 8 cannot be split into equal 7's.
- Not possible in ≤ 3 cuts.
❌ Answer = NO.

Example 5:
Input: 6 3 3
- Cut 6 → [3, 3, 3, 3]
✅ All equal. Answer = YES.

Example 6:
Input: 4 4 12
- Cut 12 → [4, 4, 4]
- Now we have [4, 4, 4, 4, 4]
✅ All equal. Answer = YES.

Example 7:
Input: 12 6 8
- Hard to balance with only 3 cuts.
❌ Answer = NO.

Example 8:
Input: 1000000000 1000000000 1000000000
- Already equal.
✅ Answer = YES.

Example 9:
Input: 3 7 1
- Impossible to balance with 3 cuts.
❌ Answer = NO.

Example 10:
Input: 9 9 1
- Cannot make all equal in ≤ 3 cuts.
❌ Answer = NO.

Example 11:
Input: 9 3 6
- Cut 9 → [3, 3, 3]
- Now we have [3, 3, 3, 3, 6]
- Cut 6 → [3, 3, 3, 3, 3, 3]
✅ All equal. Answer = YES.

Example 12:
Input: 2 8 2
- Cut 8 → [2, 2, 2, 2]
- Now we have [2, 2, 2, 2, 2, 2]
✅ All equal. Answer = YES.

Example 13:
Input: 5 3 10
- Cannot balance with ≤ 3 cuts.
❌ Answer = NO.

Example 14:
Input: 8 4 8
- Cut 8 → [4, 4]
- Now we have [4, 4, 4, 8]
- Cut 8 → [4, 4, 4, 4, 4, 4]
✅ All equal. Answer = YES.

Example 15:
Input: 2 8 4
- Even after splitting 8, cannot balance all three with ≤ 3 cuts.
❌ Answer = NO.
*/


// Import prompt-sync for console input
const prompt = require("prompt-sync")({ sigint: true });

// Read number of test cases
let t = parseInt(prompt());

// Loop through each test case
while (t--) {
    // Read three numbers a, b, c
    let [a, b, c] = prompt().split(" ").map(Number);

    // Ensure a is the smallest by swapping
    if (b < a) [a, b] = [b, a];   // swap a and b if b < a
    if (c < a) [a, c] = [c, a];   // swap a and c if c < a

    // Case 1: If all three are equal
    if (a === b && b === c) {
        console.log("YES");
    }
    // Case 2: If both b and c are divisible by a
    // and (b/a - 1) + (c/a - 1) <= 3
    else if (b % a === 0 && c % a === 0 && ((b / a - 1) + (c / a - 1) <= 3)) {
        console.log("YES");
    }
    // Otherwise, not possible
    else {
        console.log("NO");
    }
}
