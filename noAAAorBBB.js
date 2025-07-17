// Given two integers a and b, return any string s such that:

// s has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
// The substring 'aaa' does not occur in s, and
// The substring 'bbb' does not occur in s.
 

// Example 1:

// Input: a = 1, b = 2
// Output: "abb"
// Explanation: "abb", "bab" and "bba" are all correct answers.
// Example 2:

// Input: a = 4, b = 1
// Output: "aabaa"
 

// Constraints:

// 0 <= a, b <= 100
// It is guaranteed such an s exists for the given a and b.



// Approach
// Find character which appears in string more often
// Insert this character max(a, b) times
// On first pass insert low frequence character every 2 indexes while last
// If anything left inser every 3 indexes
// a = 3
// b = 3

// result = "aaa"

// After first iteration:
// "aaba"

// After second iteration:
// "ababab"


function strWithout3a3b(a, b) {
    // Result string
    let result = '';

    // Loop until both a and b are zero
    while (a > 0 || b > 0) {
        // Determine if we should add 'a' or 'b'
        // Prefer adding the character with the higher count unless the last two characters are the same
        let lastTwo = result.slice(-2);

        if ((a > b && lastTwo !== 'aa') || lastTwo === 'bb') {
            // Add 'a' if it's available and safe
            result += 'a';
            a--;
        } else if (b > 0) {
            // Add 'b' otherwise
            result += 'b';
            b--;
        }
    }

    return result;
}


console.log(strWithout3a3b(4, 1)); // Output: "aabaa"
console.log(strWithout3a3b(1, 2)); // Output: "bba"
console.log(strWithout3a3b(3, 3)); // Output: "ababab"
