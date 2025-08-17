/*
PROBLEM SIMPLIFICATION: Grasshopper Jumps

We have a grasshopper on a numeric axis starting at position x0.

Rules for jumps:
1) Jumps happen at integer minutes: 1, 2, 3, ..., n
2) Jump i has distance i
3) Direction:
   - If current position is EVEN → jump LEFT (subtract distance)
   - If current position is ODD  → jump RIGHT (add distance)

Goal:
- Given x0 and n, find the position of the grasshopper after n jumps.

---------------------------------------------------
OBSERVATION:
- The sequence of jumps depends only on the parity of x0 and n
- For large n (up to 10^14), simulating every jump is too slow
- Need a **formula or pattern based on x0 % 2 and n % 4** for fast calculation

---------------------------------------------------
EXAMPLES:

Example 1:
Input: 0 1
- Start at 0 (even)
- Jump 1 (distance=1) → left → 0-1 = -1
Output: -1

Example 2:
Input: 0 2
- Start at 0 (even)
- Jump 1 → left → -1
- Jump 2 → -1 is odd → right → -1+2 = 1
Output: 1

Example 3:
Input: 10 10
- Start at 10 (even)
- After 10 jumps → 11
Output: 11

Example 4:
Input: 10 99
- Start at 10 (even)
- After 99 jumps → 110
Output: 110

Example 5:
Input: 177 13
- Start at 177 (odd)
- After 13 jumps → 190
Output: 190

Example 6:
Input: 10000000000 987654321
- Large number of jumps
- Answer: 9012345679
Output: 9012345679

Example 7:
Input: -433494437 87178291199
- Negative starting point
- Output: -87611785637

Example 8:
Input: 1 0
- No jumps
- Output: 1

Example 9:
Input: -1 1
- One jump from -1 (odd)
- Jump 1 → right → -1+1 = 0
Output: 0

---------------------------------------------------
KEY INSIGHT:
- Each jump adds or subtracts its index based on parity
- We can detect a repeating pattern every 4 jumps:
  - Use parity of x0 and n % 4 to calculate final position
- This allows O(1) computation even for very large n.
*/




// Import prompt-sync for reading input
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {
    // Read initial position x0 and number of jumps n
    let [x0, n] = prompt().split(" ").map(BigInt); // Use BigInt for very large numbers

    // Initialize result
    let res = 0n;

    // Intuition:
    // The grasshopper pattern repeats every 4 jumps:
    // If x0 is even:
    //   n % 4 == 0 -> same as x0
    //   n % 4 == 1 -> x0 - n
    //   n % 4 == 2 -> x0 + 1
    //   n % 4 == 3 -> x0 + n + 1
    // If x0 is odd:
    //   Swap left/right logic
    if (x0 % 2n === 0n) { // x0 is even
        let r = n % 4n;
        if (r === 0n) res = x0;
        else if (r === 1n) res = x0 - n;
        else if (r === 2n) res = x0 + 1n;
        else res = x0 + n + 1n;
    } else { // x0 is odd
        let r = n % 4n;
        if (r === 0n) res = x0;
        else if (r === 1n) res = x0 + n;
        else if (r === 2n) res = x0 - 1n;
        else res = x0 - n - 1n;
    }

    // Print result for this test case
    console.log(res.toString());
}
