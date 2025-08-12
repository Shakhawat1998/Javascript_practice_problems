/*
PROBLEM SIMPLIFIED:
-------------------
Vlad has multiple alarms set every day.
He goes to sleep at a given time (H:M in 24-hour format).
We need to calculate how long Vlad can sleep until the *next* alarm goes off.

- If an alarm is set exactly at the time Vlad goes to sleep → sleep time = 0 hours 0 minutes.
- Times wrap around after 23:59 → next minute is 00:00 (midnight).
- Multiple alarms may exist; we only care about the one that rings *soonest* after sleep time.

INPUT FORMAT:
-------------
t → number of test cases
For each test case:
  n  H  M  → number of alarms, sleep hour, sleep minute
  Then n lines: h_i  m_i → alarm hour & minute

OUTPUT FORMAT:
--------------
For each test case: "X Y" where:
X → hours of sleep before the next alarm
Y → minutes of sleep before the next alarm

------------------------
EXAMPLES & EXPLANATIONS:
------------------------

Example 1:
----------
Input:
1
1 6 13
8 0

Meaning:
- 1 test case
- Sleep time = 06:13
- Only 1 alarm → 08:00

Steps:
- From 06:13 to 08:00 → difference is 1 hour 47 minutes
Output:
1 47


Example 2:
----------
Input:
1
3 6 0
12 30
14 45
6 0

Meaning:
- Sleep time = 06:00
- Alarms: 12:30, 14:45, 06:00

Steps:
- One alarm is at 06:00 (exactly when Vlad sleeps)
- That means he sleeps 0 hours 0 minutes
Output:
0 0


Example 3:
----------
Input:
1
2 23 35
20 15
10 30

Meaning:
- Sleep time = 23:35
- Alarms: 20:15 (yesterday), 10:30 (tomorrow)

Steps:
- Since 20:15 is earlier than 23:35 today, it already passed → we check tomorrow's alarms.
- The next alarm is at 10:30 tomorrow.
- From 23:35 to midnight → 0h 25m
- Midnight to 10:30 → 10h 30m
- Total = 10h 55m
Output:
10 55


FINAL SAMPLE INPUT:
-------------------
3
1 6 13
8 0
3 6 0
12 30
14 45
6 0
2 23 35
20 15
10 30

FINAL SAMPLE OUTPUT:
--------------------
1 47
0 0
10 55
*/



// Import the 'prompt-sync' package for synchronous input in Node.js
const prompt = require("prompt-sync")();

// Read the number of test cases
let t = parseInt(prompt("Enter number of test cases: "));

// Loop over each test case
while (t--) {
    // Read n, h, m → number of alarms, sleep hour, sleep minute
    let [n, h, m] = prompt("Enter n (alarms), H (sleep hour), M (sleep minute): ")
        .split(" ")
        .map(Number);

    // Convert sleep time into total minutes from 00:00
    let t1 = 60 * h + m;

    // Initialize the minimum difference to the maximum possible (24 hours in minutes)
    let ans = 24 * 60;

    // Loop over each alarm
    for (let i = 0; i < n; i++) {
        // Read the alarm time (hour and minute)
        let [ah, am] = prompt(`Enter alarm ${i + 1} time (hour minute): `)
            .split(" ")
            .map(Number);

        // Convert alarm time into total minutes from 00:00, subtract sleep time
        let t2 = 60 * ah + am - t1;

        // If alarm time is before sleep time, wrap to the next day
        if (t2 < 0) t2 += 24 * 60;

        // Keep the minimum time difference among all alarms
        ans = Math.min(ans, t2);
    }

    // Convert the smallest difference (in minutes) into hours and minutes
    console.log("Vlad will sleep for:", Math.floor(ans / 60), "hours", ans % 60, "minutes");
}
