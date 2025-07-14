// Given two strings ransomNote and magazine, return true
//  if ransomNote can be constructed by using the letters from 
//  magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English 
// letters.


var canConstruct = function(ransomNote, magazine) {
    // Create an empty object to store the frequency of each character in magazine
    let magaHash = {};

    // Loop through each character in the magazine string
    for (let c of magazine) {
        // Count how many times each character appears in magazine
        // If the character already exists in magaHash, increment its count
        // If not, initialize it to 1
        magaHash[c] = (magaHash[c] || 0) + 1;
    }

    // Loop through each character in the ransomNote string
    for (let c of ransomNote) {
        // If the character is not available in magaHash or the count is 0, return false
        // It means the character is either missing or already used up
        if (!magaHash[c] || magaHash[c] <= 0) {
            return false;
        }

        // Otherwise, use one instance of the character
        magaHash[c]--;
    }

    // If we were able to find all characters from ransomNote in magazine, return true
    return true;    
};


console.log(canConstruct("aa", "aab"))