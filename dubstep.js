/*
PROBLEM (Simplified):

We have a remix of a song where the word "WUB" is added:
    - Before the first word (can be 0 or more times)
    - Between every two words (at least once)
    - After the last word (can be 0 or more times)

Our job: 
    - Remove all "WUB"
    - Restore the original words with a single space between them

Constraints:
    - Only uppercase English letters are used.
    - "WUB" never appears in the original words.
    - The original song has at least one word.
    - String length ≤ 200.

------------------------------------------------
EXAMPLES:

Example 1:
Input:
    WUBWUBABCWUB
Process:
    WUB + WUB + ABC + WUB
    Remove "WUB" → ["", "", "ABC", ""]
    Ignore empty strings → ["ABC"]
Output:
    ABC

Example 2:
Input:
    WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB
Process:
    WUB + WE + WUB + ARE + WUB + WUB + THE + WUB + CHAMPIONS + WUB + MY + WUB + FRIEND + WUB
    Remove "WUB" → ["", "WE", "", "ARE", "", "", "THE", "", "CHAMPIONS", "", "MY", "", "FRIEND", ""]
    Ignore empty strings → ["WE", "ARE", "THE", "CHAMPIONS", "MY", "FRIEND"]
Output:
    WE ARE THE CHAMPIONS MY FRIEND
*/



const prompt = require("prompt-sync")();

let s = prompt("Enter remix: ").trim();

let flag = 0;      // Tracks if a word has started
let result = "";   // Stores the final output string

for (let i = 0; i < s.length; i++) {
    if (s[i] === 'W' && s[i + 1] === 'U' && s[i + 2] === 'B') {
        if (flag === 1) {
            result += " ";  // Add space only between words
            flag = 0;       // Reset flag to avoid multiple spaces
        }
        i += 2; // Skip 'U' and 'B'
    } else {
        result += s[i];   // Add current character to result
        flag = 1;         // We are inside a word
    }
}

// Trim trailing spaces if any
result = result.trim();

console.log(result);