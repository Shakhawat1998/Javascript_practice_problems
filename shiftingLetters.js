// ou are given a string s of lowercase English letters and an integer array shifts of the same length.

// Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
// Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.

// Return the final string after all such shifts to s are applied.

 

// Example 1:

// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: We start with "abc".
// After shifting the first 1 letters of s by 3, we have "dbc".
// After shifting the first 2 letters of s by 5, we have "igc".
// After shifting the first 3 letters of s by 9, we have "rpl", the answer.
// Example 2:

// Input: s = "aaa", shifts = [1,2,3]
// Output: "gfd"


/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
function shiftingLetters(s, shifts) {
  const n = shifts.length;
  let total = 0;

  // Convert to array for easier in-place edits
  const arr = s.split('');

  // Accumulate shifts backwards (suffix sum)
  for (let i = n - 1; i >= 0; i--) {
    total = (total + shifts[i]) % 26;
    // Apply the shift to current character
    const code = arr[i].charCodeAt(0) - 97;      // 'a' → 0, …, 'z' → 25
    const newCode = (code + total) % 26;
    arr[i] = String.fromCharCode(97 + newCode);
  }

  return arr.join('');
}


// 🧠 Intuition Behind the Solution
// Suffix Sum of Shifts
// Shifting s[0] by shifts[0] means everything up to index 0 gets shifted that many times. But when you shift s[1] 
// by shifts[1], everything up to index 1 is affected
// —including s[0] again.
// Hence, the total shift applied to s[i] is the sum of shifts[i] + shifts[i + 1] + ... + shifts[n-1].

// Efficient Accumulation
// We avoid nested loops (which would be O(n²)) by traversing shifts backwards and maintaining a running total 
// (mod 26). Each iteration’s total gives the correct cumulative shift for the current character—making it an 
// O(n) approach.

// Shift Operation
// Convert a character to 0–25 using charCodeAt(), add the cumulative shift (total), 
// take % 26, then convert 
// it back to a character with fromCharCode.


function shiftingLetters(s, shifts) {
  const n = shifts.length;
  let total = 0;
  const arr = s.split('');

  for (let i = n - 1; i >= 0; i--) {
    total = (total + shifts[i]) % 26;
    const code = arr[i].charCodeAt(0) - 97;
    arr[i] = String.fromCharCode(97 + (code + total) % 26);
  }

  return arr.join('');
}

// 🧪 Example calls
console.log(shiftingLetters('abc', [3, 5, 9]));
// Expected output: 'rpl'
// Explanation:  
//  - s[2]='c' shifted by 9 → 'l'
//  - s[1]='b' shifted by 5+9=14 → 'p'
//  - s[0]='a' shifted by 3+5+9=17 → 'r'

console.log(shiftingLetters('xyz', [2, 4, 1]));
// Expected output: 'zab'
// Explanation: wrapping around the alphabet

console.log(shiftingLetters('', []));
// Expected output: '' (handles empty string)

console.log(shiftingLetters('aaa', [26, 52, 78]));
// Expected output: 'aaa' (shifts are multiples of 26, so no net change)
