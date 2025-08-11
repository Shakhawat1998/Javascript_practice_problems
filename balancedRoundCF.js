/*
Problem: Minimum Problems to Remove for a Balanced Round

You have n problems, each with a given difficulty a[i].

A round is "balanced" if:
    The absolute difference between the difficulties of ANY two consecutive problems 
    in the round is ≤ k.

You can:
    - Remove ANY number of problems (possibly zero)
    - Rearrange the remaining problems in ANY order

Goal:
    Find the MINIMUM number of problems you must remove so that 
    the remaining set can be rearranged into a balanced round.

-----------------------------------------------------
Key Idea:
- Since you can rearrange freely, sorting the difficulties makes sense.
- Then, find the LONGEST subsequence where the difference between consecutive elements ≤ k.
- The minimum problems to remove = n - (length of that longest subsequence).

-----------------------------------------------------
Example 1:
n = 5, k = 1
a = [1, 2, 4, 5, 6]
Sort → [1, 2, 4, 5, 6]
Check sequences:
    [1, 2] → diff = 1 (ok), next diff 2 (too big) → length 2
    [4, 5, 6] → diffs 1 and 1 (ok) → length 3 (longest)
Remove = 5 - 3 = 2
Output: 2

-----------------------------------------------------
Example 2:
n = 1, k = 2
a = [10]
Only one problem → always balanced
Remove = 0
Output: 0

-----------------------------------------------------
Example 3:
n = 8, k = 3
a = [17, 3, 1, 20, 12, 5, 17, 12]
Sort → [1, 3, 5, 12, 12, 17, 17, 20]
Longest valid subsequence:
    [1, 3, 5] → ok (diff ≤ 3)
    [12, 12] → ok (diff ≤ 3)
    [17, 17, 20] → ok (diff ≤ 3)
Best group length = 3
Remove = 8 - 3 = 5
Output: 5

-----------------------------------------------------
Example 4:
n = 4, k = 2
a = [2, 4, 6, 8]
Sort → [2, 4, 6, 8] → all diffs are 2 ≤ k → length 4sdf
Remove = 0
Output: 0

-----------------------------------------------------
Example 5:
n = 5, k = 3
a = [2, 3, 19, 10, 8]
Sort → [2, 3, 8, 10, 19]
Longest group = [8, 10] → diff 2 ≤ 3 → length 2
Also [2, 3] → length 2
Remove = 5 - 2 = 3
Output: 3

-----------------------------------------------------
Example 6:
n = 3, k = 4
a = [1, 10, 5]
Sort → [1, 5, 10]
Longest group = [1, 5] (diff 4 ≤ k) → length 2
Remove = 3 - 2 = 1
Output: 1

-----------------------------------------------------
Example 7:
n = 8, k = 1
a = [8, 3, 1, 4, 5, 10, 7, 3]
Sort → [1, 3, 3, 4, 5, 7, 8, 10]
Longest group = [3, 3, 4, 5] → length 4
Remove = 8 - 4 = 4
Output: 4
*/




// Import prompt-sync to read input from the console (for Node.js)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

while (t--) {

    // Read n (number of problems) and k (max allowed difficulty gap)
    let [n, k] = prompt().split(" ").map(Number);

    // Read difficulties of the problems
    let a = prompt().split(" ").map(Number);

    // Step 1: Sort difficulties so we can find longest consecutive sequence
    // where difference between consecutive problems ≤ k
    a.sort((x, y) => x - y);

    // Variable to track longest balanced sequence length
    let longestSeq = 1;

    // Current sequence length tracker
    let currentSeq = 1;

    // Step 2: Loop through sorted array to find longest sequence
    for (let i = 1; i < n; i++) {
        // If the gap between consecutive difficulties ≤ k, extend sequence
        if (a[i] - a[i - 1] <= k) {
            currentSeq++;
        } 
        // Otherwise, start a new sequence
        else {
            currentSeq = 1;
        }

        // Update longest sequence length if needed
        if (currentSeq > longestSeq) {
            longestSeq = currentSeq;
        }
    }

    // Step 3: Minimum removals = total problems - longest balanced sequence length
    let removals = n - longestSeq;

    // Output the result for this test case
    console.log(removals);
}

