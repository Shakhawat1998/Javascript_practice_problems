// // A tram moves through n stops (from 1 to n).
// // At each stop:

// // Some people exit the tram (a[i])

// // Then some people enter the tram (b[i])

// // 🚌 The tram starts empty at stop 1
// // 🚌 It ends empty at stop n
// // 🚌 At any time, the number of people in the tram must not exceed its capacity

// // 👉 Task:
// // Find the minimum capacity the tram must have so that the number of passengers inside never exceeds it.

// // 🔢 Input:
// // First line: n (number of stops)

// // Next n lines: two integers per line → a[i] b[i]

// // a[i]: number of people who exit at stop i

// // b[i]: number of people who enter at stop i

// // 🎯 Goal:
// // // Simulate the stops and track the maximum number of people inside the tram at any point.
// // That value is the minimum capacity required.

// //input 
// 4
// 0 3
// 2 5
// 4 2
// 4 0


// Step-by-step:
// Stop	Exit (a)	Enter (b)	Inside Before	Inside After
// 1	0	3	0	3
// 2	2	5	3 → 1	6
// 3	4	2	6 → 2	4
// 4	4	0	4 → 0	0 ✅

// ✅ Maximum inside at any time: 6
// 👉 Output: 6

// 📌 Constraints:
// 2 ≤ n ≤ 1000

// 0 ≤ a[i], b[i] ≤ 1000

// Tram is empty at the beginning and end

// a[1] = 0, b[n] = 0 (guaranteed)



const prompt = require('prompt-sync')();

let n = parseInt(prompt()); // number of stops

let current = 0; // current number of passengers
let maxCapacity = 0;

while (n--) {
    let [a, b] = prompt().split(' ').map(Number); // a = exit, b = enter

    current -= a; // passengers exit
    current += b; // passengers enter

    if (current > maxCapacity) {
        maxCapacity = current; // update max capacity if needed
    }
}

console.log(maxCapacity);

