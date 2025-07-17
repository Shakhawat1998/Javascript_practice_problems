// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

 

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]
 

// Constraints:

// 1 <= s.length <= 12
// s consists of lowercase English letters, uppercase English letters, and digits.



function letterCasePermutation(S) {
    let result = ['']; // Step 1

    for (let char of S) { // Step 2
        let temp = [];

        for (let str of result) { // Step 3
            if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
                temp.push(str + char.toLowerCase()); // Step 4
                temp.push(str + char.toUpperCase());
            } else {
                temp.push(str + char); // Step 5
            }
        }

        result = temp; // Step 6
    }

    return result; // Step 7
}

console.log(letterCasePermutation("a1B"));
// Output:
// ['a1b', 'a1B', 'A1b', 'A1B']


// 🔄 Example: Input "a1B"
// Let’s simulate it:

// result = ['']

// Process 'a':

// 'a' → 'a', 'A' → result = ['a', 'A']

// Process '1':

// Append '1' to each → result = ['a1', 'A1']

// Process 'B':

// 'B' → 'b', 'B'

// ['a1b', 'a1B', 'A1b', 'A1B']

// ✅ Final Output:

// js
// Copy
// Edit
// ['a1b', 'a1B', 'A1b', 'A1B']