// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.


function checkIfPangram(s) {
    if (s.length < 26) {
        return false;
    }

    const seen = new Array(26).fill(0);
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        let index = letters.indexOf(ch);
        if (index !== -1) {
            seen[index] = 1;
        }
    }

    let count = 0;
    for (let i = 0; i < 26; i++) {
        count += seen[i];
    }

    return count === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));