/*
PROBLEM (Simplified):

https://codeforces.com/problemset/problem/1401/A

We have:
- Point O at coordinate 0 on a number line.
- Point A at coordinate n (given).
- We want to find some integer point B on the number line.

Condition:
- The absolute difference between:
      distance from O to B  AND  distance from A to B
  must be equal to k.

Mathematically:
    | |B - 0|  -  |B - n| | = k

If no such point B exists:
- We are allowed to move point A left or right by 1 in each step.
- Our goal: find the minimum number of moves for A so that such a point B exists.

-------------------------------------------------
EXAMPLES:

Example Input:
6
4 0
5 8
0 1000000
0 0
1 0
1000000 1000000

Example Output:
0
3
1000000
0
1
0

-------------------------------------------------
EXPLANATIONS:

1) n = 4, k = 0
   - We want | |B - 0| - |B - 4| | = 0
   - This means the distances from O and A to B are the same.
   - Pick B = 2 → distance OB = 2, distance AB = 2 → difference = 0 ✅
   - No move needed → answer = 0

2) n = 5, k = 8
   - We want | |B - 0| - |B - 5| | = 8
   - Try n=5 → no solution for B.
   - If we move A from 5 to 8 (3 moves right), then choose B = 0:
     OB = 0, AB = 8 → difference = |0 - 8| = 8 ✅
   - Minimum moves = 3

3) n = 0, k = 1000000
   - | |B - 0| - |B - 0| | = 1000000
   - LHS = always 0 if A and O are the same point → impossible unless n changes.
   - Move A from 0 to 1000000 → now B=0 works:
     OB = 0, AB = 1000000 → difference = 1000000 ✅
   - Moves needed = 1000000

4) n = 0, k = 0
   - A and O are the same point, k=0 → any B works (e.g., B=1 gives diff=0).
   - No move needed → answer = 0

5) n = 1, k = 0
   - We want distances equal → midpoint between O=0 and A=1 is 0.5 (not integer).
   - So no integer B satisfies → move A by 1 step to n=0 or n=2.
   - Then an integer midpoint exists → answer = 1

6) n = 1000000, k = 1000000
   - |n| = k → choose B=0:
     OB = 0, AB = 1000000 → diff = 1000000 ✅
   - No move needed → answer = 0

-------------------------------------------------
GOAL:
Find min moves to change n so that |n| ≥ k and (n - k) is even (so integer B exists).
*/


// Intuition:
// We want to find if there exists an integer point B such that:
//    | |B - 0| - |B - n| | = k
// This boils down to a math observation:
// 1. Such a B exists if and only if |n| >= k and (n - k) is even.
//    (The "even" condition comes from the fact that distances must align for some integer midpoint.)
// 2. If not possible, we can move A (n) left or right until it satisfies these two conditions.
// 3. The minimum moves = number of steps needed to reach the nearest valid n.

// Read input (for local testing we can use prompt-sync)
const prompt = require("prompt-sync")();

// Number of test cases
let t = parseInt(prompt()); 

// Loop over each test case
for (let i = 0; i < t; i++) {
    // Read n and k for this test case
    let [n, k] = prompt().split(" ").map(Number);

    // If |n| < k, we must move A so that |n| = k first.
    // That requires at least (k - |n|) moves.
    let moves = 0;
    if (n < k) {
        moves = k - n; // bring n up to k
        n = k;         // now n is large enough
    }

    // Now we check the parity (even/odd) of (n - k)
    // If (n - k) is odd, we need 1 extra move to make it even.
    if ((n - k) % 2 !== 0) {
        moves += 1;
    }

    // Print the result for this test case
    console.log(moves);
}

/*
Example walkthrough:

Input:
6
4 0
5 8
0 1000000
0 0
1 0
1000000 1000000

Case 1: n=4, k=0
|n| >= k and (4 - 0) = 4 is even → moves=0

Case 2: n=5, k=8
n < k → moves = 8 - 5 = 3, n=8
(8 - 8) = 0 is even → total moves=3

Case 3: n=0, k=1000000
n < k → moves = 1000000 - 0 = 1000000, n=1000000
(1000000 - 1000000) = 0 is even → total moves=1000000

Case 4: n=0, k=0
|n| >= k and (0 - 0) = 0 is even → moves=0

Case 5: n=1, k=0
|n| >= k but (1 - 0) = 1 is odd → moves=1

Case 6: n=1000000, k=1000000
|n| >= k and (1000000 - 1000000) = 0 is even → moves=0
*/
