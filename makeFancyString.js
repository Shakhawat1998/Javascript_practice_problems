// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

 

// Example 1:

// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".
// Example 2:

// Input: s = "aaabaaaa"
// Output: "aabaa"
// Explanation:
// Remove an 'a' from the first group of 'a's to create "aabaaaa".
// Remove two 'a's from the second group of 'a's to create "aabaa".
// No three consecutive characters are equal, so return "aabaa".
// Example 3:

// Input: s = "aab"
// Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".
 

// Constraints:

// 1 <= s.length <= 105
// s consists only of lowercase English letters.


// Intuition
// We need to modify a string by removing characters so that no three 
// consecutive characters are the same. So, while two identical characters 
// in a row are fine, three or more repeated ones aren't allowed. Our goal is 
// to make the fewest changes possible to achieve this.

// The idea is simple: we go through the string and track how many times 
// each character repeats in a row. If a character repeats fewer than three times, 
// we can leave it as is. But when we hit three or more consecutive identical characters, 
// we need to remove the extra ones—keeping only the first two.

// For example, if we have the string "aaabbb", we keep the first two 'a's and 
// remove the third one. Then, we do the same for 'b'. This guarantees that we never 
// have three consecutive identical characters, and we’re only removing characters when 
// it’s absolutely necessary.

// Algorithm
// Set prev to the first character of the string (s[0]), to keep track of the 
// previous character.
// Initialize frequency to 1, which counts the consecutive occurrences
//  of prev.
// Create a string ans to store the resulting fancy string, and append the 
// first character of s to it.
// Iterate through the string starting from the second character:
// If s[i] is the same as prev:
// Increment frequency by 1 (since it's the same as the previous character).
// Otherwise:
// Update prev to the current character s[i].
// Reset frequency to 1, as a new character is encountered.
// If frequency < 3, append the current character s[i] to ans. 
// This ensures that no three consecutive characters are added.
// Return ans.

function makeFancyString(s) {
    let prev = s[0];
    let frequency = 1;
    let ans = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === prev) {
            frequency++;
        } else {
            prev = s[i];
            frequency = 1;
        }

        if (frequency < 3) {
            ans += s[i];
        }
    }

    return ans;
}


console.log(makeFancyString("leeetcode")); // Output: "leetcode"
