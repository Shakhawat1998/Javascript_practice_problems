// Petya is watching a football game and notes down the players' positions as a string made up of '0's and '1's.

// Each '0' represents a player from one team.

// Each '1' represents a player from the other team.

// If there is a sequence of 7 or more identical characters (either all '0's or all '1's) 
// in a row, then the situation is considered dangerous.

// Your task is to check the given string and print:

// "YES" if the situation is dangerous,

// "NO" otherwise.

// Example 1:
// Input: 001001
// Output: NO
// Explanation: No team has 7 or more players consecutively.

// Example 2:
// Input: 1000000001
// Output: YES
// Explanation: There are 8 zeros consecutively, so it's dangerous.

const prompt = require('prompt-sync')();

const s1 = prompt();
let cnt = 1;

for (let i = 1; i < s1.length; i++) {
    if (s1[i] === s1[i - 1]) {
        cnt++;
        if (cnt === 7) {
            console.log('YES');
            process.exit(0);
        }
    } else {
        cnt = 1;
    }
}

console.log('NO');


