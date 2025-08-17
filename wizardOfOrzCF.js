/*
PROBLEM SIMPLIFICATION:

We have `n` panels in a row.
- Each panel shows a digit (0 to 9).
- Initially, all panels show 0.
- Every second, all panels increase their digit by +1 (modulo 10).
  Example: 0 → 1, 1 → 2, ..., 9 → 0.

We can PAUSE one panel at any second.
- Once a panel is paused, it stops changing.
- Its neighbors pause 1 second later, their neighbors 2 seconds later, and so on.

So:
- If you pause panel `x` at time `t`, then:
  - Panel `x` freezes at digit `(t % 10)`.
  - Panel `y` freezes at digit `((t + |x-y|) % 10)`.

After all panels are frozen, we read digits left → right
and form a number.  
Our goal: **maximize this number**.


--------------------------------------------------------
EXAMPLES:
--------------------------------------------------------

Example 1:
Input:
1
1

- Only 1 panel.
- Pause it when it shows digit 9.
- Final number = "9".

Output:
9


--------------------------------------------------------

Example 2:
Input:
1
2

Case: n = 2 (two panels)

Let’s check optimal pause:

Option A:
- Pause panel 1 at time t = 9.
  Panel 1 → (9 % 10) = 9
  Panel 2 → (9+1 % 10) = 0
  Final number = "90"

Option B:
- Pause panel 2 at time t = 9.
  Panel 2 → (9 % 10) = 9
  Panel 1 → (9+1 % 10) = 0
  Final number = "09"

Option C:
- Pause panel 2 at time t = 8.
  Panel 2 → 8
  Panel 1 → (8+1 % 10) = 9
  Final number = "98"  ← BEST

So, optimal result = "98"

Output:
98


--------------------------------------------------------

KEY OBSERVATION:
- To maximize the number:
  → The best strategy is to pause the **rightmost panel** at time = 9.
  → This creates digits decreasing from 9 down to (10 - n + 1), wrapping modulo 10 if needed.

So for n=1 → 9
   for n=2 → 98
   for n=3 → 987
   for n=4 → 9876
   ...
   for n=10 → 9876543210

--------------------------------------------------------
*/
// Import prompt-sync for reading input
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {
    // Read n (number of panels)
    let n = parseInt(prompt());

    // Special cases:
    if (n === 1) {
        console.log("9"); // Only one digit → "9"
    } else if (n === 2) {
        console.log("98"); // Two digits → "98"
    } else {
        // Start with "989"
        let result = "989";

        // For remaining (n-3) digits, append digits in sequence "0123456789..."
        for (let i = 0; i < n - 3; i++) {
            result += (i % 10).toString(); // Wrap around using modulo 10
        }

        // Print the final number
        console.log(result);
    }
}


/*
PROBLEM SIMPLIFICATION:

We have n panels in a row.
- Each starts at digit 0.
- Every second, all digits increase by +1 (mod 10).
- You choose one panel to pause at some time t.
- Then, its neighbors pause 1 second later, their neighbors 2 seconds later, etc.

The final digits form an n-digit number (can have leading zeros).
Our task: choose the pause position & time to get the LARGEST possible number.

------------------------------------
OBSERVATION:
- Best strategy is well-known:
  → For n = 1 → "9"
  → For n = 2 → "98"
  → For n >= 3 → "989" + (n-3) more digits cycling through "0123456789..."

------------------------------------
EXAMPLES:

1) n = 1
   Answer: "9"

2) n = 2
   Answer: "98"

3) n = 3
   Answer: "989"

4) n = 4
   Answer: "9890"

5) n = 6
   Answer: "989012"

6) n = 12
   Answer: "989012345678"

------------------------------------
So the rule:
- Start with "989".
- If n > 3, append (n-3) digits from the cycle "0123456789".
*/
