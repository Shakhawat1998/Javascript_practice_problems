// You have a variable x that starts at 0.

// You are given n statements. Each statement either increases or decreases x by 1.

// "++X" or "X++" means increase x by 1.

// "--X" or "X--" means decrease x by 1.

// Your task: Execute all statements in order and print the final value of x.

// Input:
// First line: integer n (number of statements)

// Next n lines: each line is a statement containing ++ or -- and the variable X in any order.

// Output:
// Print the final value of x.

// Input:
// 1
// ++X

// Output:
// 1


// Input:
// 2
// X++
// --X

// Output:
// 0




const prompt = require('prompt-sync')();  // Import prompt-sync for input

let t = Number(prompt());  // Read the number of statements
let cnt = 0;              // Initialize counter (variable x) to 0

for (let i = 0; i < t; i++) {
    let s = prompt();     // Read the statement string, e.g., "++X", "X--", etc.

    // Check the middle character of the statement
    // If it is '+', increment cnt
    // If it is '-', decrement cnt
    if (s[1] === '+') {
        cnt++;
    } else {
        cnt--;
    }
}

console.log(cnt);  // Output the final value of x
