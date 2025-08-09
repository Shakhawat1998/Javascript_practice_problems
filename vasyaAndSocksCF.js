/*
Problem: Vasya's Socks

- Vasya starts with n pairs of socks.
- Each day, Vasya wears one pair of socks.
- At the end of the day, he throws that pair away (used up).
- Every m-th day, Vasya's mom buys him 1 new pair of socks in the evening.
  (So new socks bought on day m can only be worn starting day m+1.)
  
Question:
How many consecutive days can Vasya wear socks before he runs out?

Example 1:
Input: n = 2, m = 2
Day 1: wears 1st pair (1 left)
Day 2: wears 2nd pair (0 left)
Evening of Day 2: mom buys 1 pair (1 new pair now)
Day 3: wears new pair (0 left)
Answer: 3 days

Example 2:
Input: n = 9, m = 3
Days 1-9: wears initial 9 pairs (0 left)
Evenings of days 3, 6, 9: mom buys 1 pair each (total 3 pairs)
Days 10-12: wears these 3 new pairs (0 left)
Evening of day 12: mom buys 1 pair (1 new pair now)
Day 13: wears new pair (0 left)
Answer: 13 days
*/



const prompt = require('prompt-sync')();  // Import prompt-sync for input

// Read two integers n and m from user input, split by space, convert to numbers
const [nInput, m] = prompt('Enter n and m: ').split(' ').map(Number);

let n = nInput;   // Current socks count
let days = 0;     // Days Vasya can wear socks

// Simulate each day while Vasya has socks to wear
for (let i = 1; i <= n; i++) {
    days++;       // Vasya wears socks today, so increase day count

    // Every m-th day mom buys one new pair in the evening (after Vasya used one today)
    if (i % m === 0) {
        n++;        // Increase total socks by 1
    }
}

// Print the total number of days Vasya can wear socks
console.log(days);

