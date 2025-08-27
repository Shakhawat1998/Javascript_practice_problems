/*
Problem: Polycarp's Sleep & Alarm

Polycarp wants to sleep at least `a` minutes to feel refreshed.

- First alarm rings after `b` minutes.
- If he still needs more sleep:
    - He sets the next alarm to ring after `c` minutes.
    - But it takes him `d` minutes to fall asleep again.
- If the alarm rings while he is still falling asleep, he just resets it again.
- You need to calculate the total time until Polycarp gets enough sleep,
  OR print -1 if he will never be able to get enough sleep.


-----------------------------------
Examples explained step by step:
-----------------------------------

Example 1:
Input: 10 3 6 4
- Polycarp needs at least 10 mins sleep.
- First alarm after 3 mins → He slept 3 mins.
- He needs more sleep → sets alarm for 6 mins, but falls asleep in 4 mins.
  → So he only sleeps (6 - 4) = 2 mins more.
- Total sleep so far = 3 + 2 = 5.
- Again → adds 2 mins (each cycle adds 2 mins sleep).
- After 4 cycles total sleep = 11 ≥ 10.
- Total time = 3 (first alarm) + 4*6 (four resets) = 27.
Answer = 27


Example 2:
Input: 11 3 6 4
- Same as above, but Polycarp needs 11 mins sleep.
- He ends with exactly 11 mins after same cycles.
Answer = 27


Example 3:
Input: 5 9 4 10
- Needs 5 mins sleep.
- First alarm after 9 mins → He already slept 9 ≥ 5.
Answer = 9


Example 4:
Input: 6 5 2 3
- Needs 6 mins sleep.
- First alarm after 5 mins → only 5 mins slept (< 6).
- Next alarms give (c - d) = (2 - 3) = -1 mins sleep (not possible).
- He will never reach 6 mins.
Answer = -1


Example 5:
Input: 1 1 1 1
- Needs 1 min sleep.
- First alarm after 1 min → already done.
Answer = 1


Example 6:
Input: 3947465 47342 338129 123123
- First alarm = 47342 mins sleep.
- Still not enough → effective sleep per cycle = c - d = 338129 - 123123 = 215006.
- Remaining sleep needed = 3947465 - 47342 = 3890123.
- Cycles needed = ceil(3890123 / 215006) = 19.
- Total time = b + cycles * c = 47342 + 19*338129 = 6471793.
Answer = 6471793


Example 7:
Input: 234123843 13 361451236 361451000
- Needs 234123843 mins sleep.
- First alarm after 13 mins → slept = 13.
- Remaining = 234123830.
- Effective per cycle = c - d = 236 mins.
- Cycles needed = ceil(234123830 / 236) = 992173.
- Total time = 13 + 992173*361451236 = 358578060125049.
Answer = 358578060125049
*/



// Import prompt-sync library to take console input
// Run: npm install prompt-sync   (only once needed)
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());  

// Loop through all test cases
for (let i = 0; i < t; i++) {
    // Read a, b, c, d as BigInt (because numbers can get huge > 1e18)
    // a = required sleep minutes
    // b = first alarm time
    // c = interval for subsequent alarms
    // d = time needed to fall asleep again
    let [a, b, c, d] = prompt().split(" ").map(BigInt);

    // Case 1: If the first alarm already gave him enough sleep
    // Example: if he needs 5 mins, first alarm is after 9 mins → already done
    if (b >= a) {
        console.log(b.toString());
        continue;
    }

    // Case 2: If effective gain per cycle is <= 0, he will never get enough sleep
    // Because effective gain = c - d
    // If c <= d → he wastes all the time falling asleep, never gains sleep
    if (c <= d) {
        console.log(-1);
        continue;
    }

    // Remaining sleep needed after the first alarm
    let remaining = a - b;

    // Effective sleep gained per cycle
    let gain = c - d;

    // Number of cycles required (ceil division)
    // ceil(remaining / gain) = (remaining + gain - 1) / gain
    let cycles = (remaining + gain - 1n) / gain;

    // Total time spent = first alarm time + number of cycles * alarm interval
    let total = b + cycles * c;

    // Print result as string (because BigInt cannot be printed directly as number)
    console.log(total.toString());
}

/*
--------------------------------------
Intuition Recap:
--------------------------------------
- Polycarp first sleeps `b` minutes.
- If still not enough:
    - Each cycle gives him (c - d) minutes of extra sleep.
    - BUT he spends full `c` minutes of time for each cycle.
- If c <= d → no net sleep gain → impossible → -1.
- Otherwise:
    - Compute how many cycles needed to reach total sleep >= a.
    - Add that many full intervals of `c` to total time.
- This guarantees minimum time when Polycarp wakes up refreshed.

--------------------------------------
Example walkthrough:
Input:
1
10 3 6 4

Step 1: Needs 10 mins, first alarm after 3 → slept 3 mins.
Step 2: Remaining = 7. Effective gain per cycle = 6 - 4 = 2.
Step 3: Cycles = ceil(7/2) = 4.
Step 4: Total time = 3 + 4*6 = 27.

Output:
27
*/
