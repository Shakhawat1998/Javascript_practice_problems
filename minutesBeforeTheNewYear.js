/*
Problem: Minutes Before New Year

You have the current time in 24-hour format (h hours and m minutes),
where 0 ≤ h < 24 and 0 ≤ m < 60.

Goal:
- Calculate how many minutes remain until New Year,
  which occurs at 00:00 (midnight).

Input:
- t test cases.
- Each test case: two integers h and m representing current time.
- It is guaranteed that time is never midnight itself (0 0).

Output:
- For each test case, print the minutes left until New Year.

How to solve:
- Total minutes in a day = 24 * 60 = 1440
- Current minutes passed = h * 60 + m
- Minutes remaining = 1440 - current minutes

Examples:

Input:
5
23 55
23 0
0 1
4 20
23 59

Output:
5       // From 23:55 to 00:00, 5 minutes remain
60      // From 23:00 to 00:00, 60 minutes remain
1439    // From 00:01 to 00:00 next day, 1439 minutes remain
1180    // From 04:20 to 00:00 next day, 1180 minutes remain
1       // From 23:59 to 00:00, 1 minute remains
*/


const prompt = require('prompt-sync')();  // Import prompt-sync for input

const t = Number(prompt());               // Read number of test cases

for (let i = 0; i < t; i++) {            // Loop over each test case
  const [h, m] = prompt().split(' ').map(Number); // Read hours and minutes for the current time

  const totalMinutes = 24 * 60;          // Calculate total minutes in a day (1440)
  const passedMinutes = h * 60 + m;      // Calculate how many minutes have passed since midnight
  const minutesLeft = totalMinutes - passedMinutes; // Calculate minutes remaining until New Year (midnight)

  console.log(minutesLeft);              // Output the minutes left
}
