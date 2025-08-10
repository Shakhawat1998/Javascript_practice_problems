/*
Problem: Watering the Flower

Petya’s parents want him to water their flower.  
- There are 12 months in the year.  
- In month i, if he waters it, the flower grows by ai centimeters.  
- If he doesn’t water it in month i, it grows by 0 cm that month.  

Goal:
- The total growth in the year must be at least k centimeters.  
- Petya wants to water the flower in as few months as possible.  
- If it's impossible to reach at least k growth, print -1.  
- If k = 0, Petya doesn't need to water at all → answer is 0.

Approach:
- Sort the monthly growth values in descending order.  
- Pick the largest growth months until the sum ≥ k.  
- Count how many months were chosen.  
- If even after all 12 months sum < k, print -1.

------------------------------------------------------------
Example 1:
Input:
5
1 1 1 1 2 2 3 2 2 1 1 1

Sorted growths: 3, 2, 2, 2, 2, 1, 1, ...
Take largest months:
Month with 3 → total = 3
Month with 2 → total = 5 (≥ k)
Answer = 2 months

------------------------------------------------------------
Example 2:
Input:
0
0 0 0 0 0 0 0 1 1 2 3 0

k = 0 → No need to water at all
Answer = 0

------------------------------------------------------------
Example 3:
Input:
11
1 1 4 1 1 5 1 1 4 1 1 1

Sorted growths: 5, 4, 4, 1, ...
Take:
5 → total = 5
4 → total = 9
4 → total = 13 (≥ k)
Answer = 3 months
*/



// Import prompt-sync for Node.js input
const prompt = require("prompt-sync")();

// Read k: the required total growth for the flower
let k = parseInt(prompt("Enter required growth k: "));

// Read the 12 space-separated integers for monthly growth
let growths = prompt("Enter 12 growth values: ")
    .split(" ")               // split input string into array of strings
    .map(Number);             // convert each to number

// If k is 0 → Petya doesn't need to water the flower at all
if (k === 0) {
    console.log(0);
} else {
    // Sort growth values in descending order (largest first)
    growths.sort((a, b) => b - a);

    let total = 0;      // total growth so far
    let months = 0;     // number of months chosen

    // Go through the months starting from the largest growth
    for (let i = 0; i < 12; i++) {
        total += growths[i];  // add this month's growth to total
        months++;             // count this month as watered

        // If total growth has reached or exceeded k → stop
        if (total >= k) {
            console.log(months); // output result
            return;              // exit program
        }
    }

    // If all 12 months were used but total < k → impossible
    console.log(-1);
}
