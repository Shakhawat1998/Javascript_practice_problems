/*
We have a game with a binary string s (only '0' and '1').

Rules:
1. Alice moves first, then Bob, then Alice again, and so on.
2. On a player's turn:
    - They must choose two DIFFERENT and ADJACENT characters in s
      (one '0' and one '1').
    - Delete both characters from the string.
3. If a player cannot make a move, they lose.
4. Both players play optimally.

Goal:
Given the string, determine if Alice can win.

---------------------------------
💡 Key Insight:
- Each move removes exactly ONE '0' and ONE '1'.
- The total possible moves = min(count of '0', count of '1').
- If this number is ODD → Alice wins.
- If this number is EVEN → Bob wins.

---------------------------------
Example 1:
Input:
01
- '0' count = 1
- '1' count = 1
- Possible moves = min(1,1) = 1 (odd) → Alice wins.

Output:
DA

---------------------------------
Example 2:
Input:
1111
- '0' count = 0
- '1' count = 4
- Possible moves = min(0,4) = 0 (even) → Bob wins.

Output:
NET

---------------------------------
Example 3:
Input:
0011
- '0' count = 2
- '1' count = 2
- Possible moves = min(2,2) = 2 (even) → Bob wins.

Output:
NET
*/



const prompt = require('prompt-sync')(); // Import prompt-sync for input

const t = parseInt(prompt()); // Read number of test cases

for (let i = 0; i < t; i++) { // Loop through each test case
    const s = prompt(); // Read the binary string s for this test case

    let count0 = 0; // Initialize count of '0's
    let count1 = 0; // Initialize count of '1's

    for (const ch of s) { // Iterate over each character in string s
        if (ch === '0') count0++; // Increment zero count if char is '0'
        else count1++;             // Otherwise increment one count
    }

    const moves = Math.min(count0, count1); // Calculate possible moves (pairs of '0' and '1')

    if (moves % 2 === 1) { // If number of moves is odd
        console.log("DA");  // Alice wins, print "DA"
    } else {
        console.log("NET"); // Otherwise, Bob wins, print "NET"
    }
}
