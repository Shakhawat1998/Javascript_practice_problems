// Problem Summary:
//https://codeforces.com/problemset/problem/1872/B
// We have an infinite corridor of rooms numbered 1, 2, 3, ...
// You start at room 1, move to some room k, then return back to room 1.
// Moving to an adjacent room takes exactly 1 second.
// There are n traps in certain rooms:
//    Trap i is at room di, and will activate si seconds AFTER you enter room di.
// Once a trap is activated, you CANNOT enter or leave that room anymore.
// We can choose k, but we must be able to go from 1 → k → 1 safely.
// Question: What is the maximum k possible?

// Important details:
// - Entering room di starts its trap's timer.
// - You must LEAVE room di strictly BEFORE si seconds have passed since entering it.
// - Multiple traps can be in the same room.
// - If you reach a trap room on the way back and it's already active, you get stuck (fail).

// Input format:
// t = number of test cases
// For each test case:
//   n = number of traps
//   Then n lines: di si (trap position, activation time after entering)

// Output:
// For each test case: maximum k that is safe.

// --------------------------------------------------------------------
// Example 1:
// Input:
// 1
// 2 2
//
// You start at room 1.
// Move to room 2 at time 1s → trap starts countdown (activates at time 3s).
// If k = 2: Return path → room 2 at time 2s (before activation) ✅ SAFE.
// If k = 3: Return path → room 2 at time 3s (trap activates exactly now) ❌ FAIL.
// Answer: 2

// --------------------------------------------------------------------
// Example 2:
// Input:
// 3
// 2 8
// 4 3
// 5 2
//
// Traps:
//   Room 2: activates at 8s after entering
//   Room 4: activates at 3s after entering
//   Room 5: activates at 2s after entering
//
// If k ≥ 6: On return, you reach room 4 too late → trap active → fail.
// For k = 5: Safe for all traps.
// Answer: 5

// --------------------------------------------------------------------
// Example 3:
// Input:
// 1
// 200 200
//
// Trap at room 200, activates at 200s after entry.
// Plenty of time → you can go far.
// Calculation shows max k = 299 is safe.
// Answer: 299

// --------------------------------------------------------------------
// Example 4:
// Input:
// 4
// 1 20
// 5 9
// 3 179
// 100 1
//
// Fast-activating trap at room 100 means you can't go past 9.
// Answer: 9

// --------------------------------------------------------------------
// Example 5:
// Input:
// 2
// 10 1
// 1 18
//
// Trap at room 10: activates almost immediately (1s after entering).
// You can't go past k = 9.
// Answer: 9

// --------------------------------------------------------------------
// Example 6:
// Input:
// 2
// 1 1
// 1 2
//
// Trap in starting room, one activates at 1s → you can't move far.
// Max k = 1.
// Answer: 1

// --------------------------------------------------------------------
// Example 7:
// Input:
// 3
// 1 3
// 1 1
// 1 3
//
// Trap in starting room activates in 1s → can't go anywhere.
// Answer: 1



// Import prompt-sync for local testing (remove this in online judge)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

while (t--) {
    // Read number of traps for this test case
    let n = parseInt(prompt());

    // Store traps as [di, si] pairs
    let traps = [];
    for (let i = 0; i < n; i++) {
        let [d, s] = prompt().split(" ").map(Number);
        traps.push([d, s]);
    }

    /*
      Core idea:
      - For each trap in room d with activation time s:
        When you first pass through that room (going towards k),
        it activates at time: (time you enter d) + s.
        You will re-enter it on the way back at time: 2*k - d.
        To be safe: 2*k - d < (time trap activates)
        → 2*k - d < d + s
        → k < (s + 2*d) / 2
      - So, each trap gives a maximum allowed k.
      - We take the minimum allowed k over all traps.
    */

    let maxK = Infinity; // Start with no limit

    for (let [d, s] of traps) {
        // Maximum k for this trap:
        // Must leave room before trap activates, so:
        let allowedK = Math.floor((s + 2 * d - 1) / 2);
        // "-1" in numerator ensures strict before activation
        if (allowedK < maxK) {
            maxK = allowedK;
        }
    }

    // Output the max k that is safe
    console.log(maxK);
}

/*
Example walkthrough:
--------------------
Test case:
n = 1
Trap: d = 2, s = 2
Enter room 2 at time 1, trap activates at time 3.
On return from k=2: reach room 2 at time 2 < 3 → safe.
On return from k=3: reach room 2 at time 3 = activation time → fail.
Allowed k from formula: floor((2 + 2*2 - 1)/2) = floor((5)/2) = 2
Answer: 2

Why formula works:
------------------
2*k - d = time reaching trap on return.
Trap activation = d + s.
Require: 2*k - d < d + s → 2*k < 2*d + s → k < (s + 2*d) / 2.
We floor this down and ensure strict inequality.
*/

