// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true


var isIsomorphic = function(s, t) {
    let m1 = new Array(256).fill(0);
    let m2 = new Array(256).fill(0);
    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]) {
            return false;
        }
        m1[s.charCodeAt(i)] = i + 1;
        m2[t.charCodeAt(i)] = i + 1;
    }
    return true;
};

// Sample input
let s = "egg";
let t = "add";

// Output the result
console.log(isIsomorphic(s, t)); // This will print: true



// The isIsomorphic function checks if two strings, s and t, are isomorphic, meaning each character in s can be consistently mapped to a character in t with a one-to-one relationship.

// Key Ideas:
// Use two arrays (m1 and m2) of size 256 to track the last seen index of characters in s and t, respectively.
// As we iterate over both strings, we check if the last seen positions of the current characters from both strings match. If they don’t, the strings are not isomorphic.
// If the positions match, we update the arrays to record the current indices.
// Steps:
// Initialize m1 and m2 to store the indices of characters.
// For each character in both strings, check if their last seen indices match.
// If all characters have consistent mappings, return true; otherwise, return false.
// Example:
// For s = "egg" and t = "add", the function returns true because each character from s can be mapped to a unique character in t, maintaining the one-to-one relationship.

// Time Complexity:
// O(n), where n is the length of the strings.
// Space Complexity:
// O(1), as the size of m1 and m2 is constant (256).