/*
📌 Problem Simplified:

Stepan has a phone with initial charge = f.
- The phone is ON at time 0.
- Phone loses "a" units of charge per 1 unit of time if left ON.
- If Stepan turns OFF and later turns ON the phone, it costs "b" units of charge instantly.
- At times m1, m2, ..., mn Stepan MUST send messages.
- If charge becomes ≤ 0 at any time, Stepan cannot send the message.

Question:
Can Stepan send ALL messages with his given battery? 
Print "YES" or "NO".

------------------------------------------------
📌 Input format:
t = number of test cases

For each test case:
n f a b   →  number of messages, initial charge, per-time cost, on/off cost
m1 m2 ... mn   → message send times

------------------------------------------------
📌 Key Idea:
- Between messages, Stepan can either:
  1. Leave phone ON → lose (time_gap * a)
  2. Turn OFF and ON again → lose b
- He should always pick the smaller cost: min(time_gap * a, b)

------------------------------------------------
📌 Examples Explained:

Example Input:
6
1 3 1 5
3
7 21 1 3
4 6 10 13 17 20 26
5 10 1 2
1 2 3 4 5
1 1000000000 1000000000 1000000000
1000000000
3 11 9 6
6 8 10
12 621526648 2585904 3566299
51789 61859 71998 73401 247675 298086 606959 663464 735972 806043 806459 919683

------------------------------------------------
Example 1:
n=1, f=3, a=1, b=5
m=[3]

→ gap from 0 → 3
   cost if ON = 3*1 = 3
   cost if OFF/ON = 5
   pick min = 3
   f=3-3=0 ❌ (battery 0 before message)
Answer: NO

------------------------------------------------
Example 2:
n=7, f=21, a=1, b=3
m=[4,6,10,13,17,20,26]

Check gaps:
gap1=4-0=4 → min(4*1=4, 3)=3 → f=21-3=18
gap2=6-4=2 → min(2*1=2, 3)=2 → f=18-2=16
gap3=10-6=4 → min(4,3)=3 → f=16-3=13
gap4=13-10=3 → min(3,3)=3 → f=13-3=10
gap5=17-13=4 → min(4,3)=3 → f=10-3=7
gap6=20-17=3 → min(3,3)=3 → f=7-3=4
gap7=26-20=6 → min(6,3)=3 → f=4-3=1
✅ f>0 at end
Answer: YES

------------------------------------------------
Example 3:
n=5, f=10, a=1, b=2
m=[1,2,3,4,5]

gap1=1 → min(1,2)=1 → f=10-1=9
gap2=1 → min(1,2)=1 → f=9-1=8
gap3=1 → f=8-1=7
gap4=1 → f=7-1=6
gap5=1 → f=6-1=5
✅ f>0
Answer: YES

------------------------------------------------
Example 4:
n=1, f=1e9, a=1e9, b=1e9
m=[1e9]

gap=1e9 → min(1e9*1e9=too big, 1e9)=1e9
f=1e9-1e9=0 ❌
Answer: NO

------------------------------------------------
Example 5:
n=3, f=11, a=9, b=6
m=[6,8,10]

gap1=6 → min(6*9=54, 6)=6 → f=11-6=5
gap2=2 → min(2*9=18, 6)=6 → f=5-6=-1 ❌
Answer: NO

------------------------------------------------
Example 6:
n=12, f=621526648, a=2585904, b=3566299
m=[51789 ... 919683]

Check each gap with min cost…
✅ After all messages, f>0
Answer: YES
*/



/*
📌 Problem Recap:
- Stepan must send n messages at times m1..mn.
- Phone starts ON at time 0 with f battery.
- Phone loses "a" per time unit if ON.
- Turning OFF/ON costs "b".
- Battery must stay > 0 at every message.
- Output YES if all messages can be sent, NO otherwise.
*/

/*
📌 Intuition:
- For each gap between messages:
   costIfOn = gap * a
   costIfOff = b
   Use min(costIfOn, costIfOff)
- Deduct chosen cost from battery
- If battery <= 0 → NO
- Else → YES
*/

const prompt = require('prompt-sync')();

// Function for one test case
function canSendAllMessages(n, f, a, b, messages) {
    let prev = 0; // last reference time
    for (let i = 0; i < n; i++) {
        let gap = messages[i] - prev;        // time since last
        let cost = Math.min(gap * a, b);     // cheaper option
        f -= cost;                           // deduct battery
        if (f <= 0) return "NO";             // battery dead → fail
        prev = messages[i];                  // update last time
    }
    return "YES"; // survived all messages
}

// ---------------------------
// 📌 Prompt-sync input (each line separately)
// ---------------------------
let t = parseInt(prompt("Enter number of test cases:")); // number of test cases
let results = [];

for (let tc = 0; tc < t; tc++) {
    // Read n, f, a, b for this test case
    let [n, f, a, b] = prompt(`Test case ${tc + 1}: Enter n f a b:`).trim().split(" ").map(Number);

    // Read message times for this test case
    let messages = prompt(`Test case ${tc + 1}: Enter ${n} message times:`)
                    .trim()
                    .split(" ")
                    .map(Number);

    // Solve and store result
    results.push(canSendAllMessages(n, f, a, b, messages));
}

// Print all results
console.log("Results:");
results.forEach(ans => console.log(ans));

/*
Example Run:

Prompt 1: Enter number of test cases:
6

Prompt 2: Test case 1: Enter n f a b:
1 3 1 5
Prompt 3: Test case 1: Enter 1 message times:
3
...
Prompt X: Test case 6: Enter n f a b:
12 621526648 2585904 3566299
Prompt X+1: Test case 6: Enter 12 message times:
51789 61859 71998 73401 247675 298086 606959 663464 735972 806043 806459 919683

Console Output:
Results:
NO
YES
YES
NO
NO
YES
*/
