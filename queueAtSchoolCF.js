// // In a school canteen, boys (B) and girls (G) line up in a queue of n students.

// // But the boys feel awkward standing in front of girls. So, every second, if a boy (B) is immediately followed by a girl (G), they swap positions.

// // 👉 Task:
// // You're given:

// // The initial queue (a string of 'B' and 'G')

// // A number of seconds t

// // Simulate the process for t seconds and print the final queue.

// // 🔄 Rules:
// // Each second, go left to right through the queue

// // Whenever you see 'B' followed by 'G', swap them

// // Skip the next position to avoid double swapping in the same second


// //input 
// 5 1
// BGGBG

// //explanation
// Step 0: B G G B G
// After 1 second: G B G G B → Output: GBGGB

// //input 
// 5 2
// BGGBG


// //explanation 
// Step 0: B G G B G
// Step 1: G B G G B
// Step 2: G G B G B → Output: GGBGB


// //input 
// 4 1
// GGGB


// //explanation
// No swaps needed (no 'B' before a 'G') → stays the same → Output: GGGB

// Constraints:
// 1 ≤ n, t ≤ 50 (so simulation is fine)

// Only characters are B and G

const prompt = require('prompt-sync')();

// Read inputs
let [n, t] = prompt().split(' ').map(Number);  // n = length of string, t = seconds
let s = prompt().split(''); // Convert string to array for easier swapping

// Simulate t seconds
while (t--) {
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === 'B' && s[i + 1] === 'G') {
            // Swap positions
            [s[i], s[i + 1]] = [s[i + 1], s[i]];
            i++; // Skip next index to avoid double swapping
        }
    }
}

// Join the array back into a string and print
console.log(s.join(''));
