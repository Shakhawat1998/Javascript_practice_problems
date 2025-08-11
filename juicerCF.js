/*
Problem: Kolya and the Juicer

Kolya has n oranges with given sizes a1, a2, ..., an.

Rules:
1. Oranges are processed in order from a1 to an.
2. An orange can only be put into the juicer if its size ≤ b.
   - If an orange is larger than b, it is thrown away (skipped).
3. The juicer collects the squeezed juice in a waste section.
   - We track the total size of oranges squeezed (waste amount).
4. If the total waste becomes STRICTLY greater than d:
   - Kolya empties the waste section.
   - Waste count resets to 0.
5. We need to count the number of times the waste section is emptied.

-----------------------------------------------------
Example 1:
n = 2, b = 7, d = 10
a = [5, 6]
Process:
- Orange 1: size 5 ≤ 7 → add to waste (waste = 5)
- Orange 2: size 6 ≤ 7 → add to waste (waste = 11 > 10) → empty waste
Emptied: 1 time
Output: 1

-----------------------------------------------------
Example 2:
n = 1, b = 5, d = 10
a = [7]
Process:
- Orange 1: size 7 > 5 → skip
No waste collected → 0 times emptied
Output: 0

-----------------------------------------------------
Example 3:
n = 3, b = 10, d = 10
a = [5, 7, 7]
Process:
- Orange 1: 5 ≤ 10 → waste = 5
- Orange 2: 7 ≤ 10 → waste = 12 > 10 → empty waste (count = 1, waste reset to 0)
- Orange 3: 7 ≤ 10 → waste = 7 (≤ 10, so no empty)
Output: 1

-----------------------------------------------------
Example 4:
n = 1, b = 1, d = 1
a = [1]
Process:
- Orange 1: 1 ≤ 1 → waste = 1 (≤ d)
No empty
Output: 0
*/



// Import prompt-sync to read input (for Node.js)
const prompt = require('prompt-sync')();

// Read number of oranges (n), max orange size (b), and max waste before emptying (d)
let [n, b, d] = prompt().split(' ').map(Number);

// Read the sizes of the oranges
let oranges = prompt().split(' ').map(Number);

let waste = 0;       // Current total waste in juicer
let emptyCount = 0;  // Number of times waste section is emptied

// Process each orange in order
for (let i = 0; i < n; i++) {
    let size = oranges[i];

    // Only process if orange fits in juicer (size ≤ b)
    if (size <= b) {
        waste += size;  // Add orange size to waste

        // If waste exceeds d, empty the waste section
        if (waste > d) {
            emptyCount++;  // Increase empty count
            waste = 0;     // Reset waste to zero
        }
    }
}

// Output the number of times waste section was emptied
console.log(emptyCount);
