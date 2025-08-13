/*
PROBLEM (Simplified):

- There are n piranhas in a row, numbered 1 to n.
- Each piranha has a size a[i].

- A piranha i is called "dominant" if it can eat all other piranhas by repeatedly eating adjacent smaller piranhas.

Rules for eating:
- Piranha i can eat piranha i-1 if i-1 exists and a[i-1] < a[i].
- Piranha i can eat piranha i+1 if i+1 exists and a[i+1] < a[i].
- Each time piranha i eats a neighbor, its size increases by 1.

Task:
Find any dominant piranha’s index (1-based), or -1 if none exists.

----------------------------------------

EXAMPLES:

Input:
6
5
5 3 4 4 5
3
1 1 1
5
4 4 3 4 4
5
5 5 4 3 2
3
1 1 2
5
5 4 3 5 5

Output:
3
-1
4
3
3
1

----------------------------------------

EXPLANATION of some test cases:

1) For a = [5, 3, 4, 4, 5]:
- The third piranha (size 4) is dominant.
- It can eat the second (3) → size becomes 5.
- Then it can eat the fourth (4) → size becomes 6.
- Then it can eat the first (5) → size becomes 7.
- Finally, it can eat the fifth (5) → size becomes 8.

2) For a = [1, 1, 1]:
- All piranhas have the same size.
- No piranha can eat any other (no smaller neighbor).
- So output -1.

3) For a = [4, 4, 3, 4, 4]:
- The fourth piranha can eat left neighbors smaller than itself eventually.

----------------------------------------

KEY OBSERVATION:
- The dominant piranha must have the maximum size in the aquarium.
- It must have at least one neighbor with a smaller size (so it can start eating).
- Find any max size piranha with at least one smaller neighbor and print its index.
- If none found, print -1.
*/



// Intuition:
// To be dominant, a piranha must:
// 1) Have the maximum size in the aquarium.
// 2) Have at least one neighbor smaller than itself to start eating.

// Read number of test cases
const prompt = require("prompt-sync")();
const t = parseInt(prompt());

for (let _ = 0; _ < t; _++) {
    // Read number of piranhas
    const n = parseInt(prompt());
    // Read sizes of piranhas
    const arr = prompt().split(" ").map(Number);

    // Find the maximum size among all piranhas
    const maxSize = Math.max(...arr);

    // Initialize answer as -1 (no dominant piranha found yet)
    let dominantIndex = -1;

    // Iterate through the piranhas
    for (let i = 0; i < n; i++) {
        // Only consider piranhas with max size
        if (arr[i] === maxSize) {
            // Check left neighbor if exists and smaller
            if (i > 0 && arr[i - 1] < maxSize) {
                dominantIndex = i + 1; // +1 for 1-based indexing
                break; // Found dominant piranha
            }
            // Check right neighbor if exists and smaller
            if (i < n - 1 && arr[i + 1] < maxSize) {
                dominantIndex = i + 1;
                break;
            }
        }
    }

    // Output the index of the dominant piranha or -1 if none found
    console.log(dominantIndex);
}
