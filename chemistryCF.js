/*
Problem Simplified:
-------------------
We are given a string `s` of length `n` and an integer `k`.
We must remove EXACTLY `k` characters from `s`. 
After removal, we can rearrange the remaining characters.
The goal: Check if the remaining string can be rearranged into a palindrome.

Key Idea:
---------
- A palindrome allows at most 1 character with an odd frequency (if length is odd).
- All other characters must appear in even counts.
- So we check: After removing `k` characters, can the leftover characters form such a structure?

Input:
------
t -> number of test cases

For each test case:
n, k -> length of string, characters to delete
s    -> string of length n

Output:
-------
YES -> if possible
NO  -> otherwise

Examples:
---------

1) n=1, k=0, s="a"
   - No removals.
   - "a" is already a palindrome.
   -> YES

2) n=2, k=0, s="ab"
   - No removals.
   - "ab" cannot be rearranged into a palindrome.
   -> NO

3) n=2, k=1, s="ba"
   - Remove 1 char: remove 'b' -> "a", remove 'a' -> "b"
   - Single letter is always a palindrome.
   -> YES

4) n=3, k=1, s="abb"
   - Remove 'a' -> "bb" which is palindrome.
   -> YES

5) n=3, k=2, s="abc"
   - Remove 2 chars: "a", "b", or "c" remains.
   - Single char -> palindrome.
   -> YES

6) n=6, k=2, s="bacacd"
   - Remove 'b' and 'd' -> "acac"
   - Rearranged to "acca" -> palindrome.
   -> YES

7) n=6, k=2, s="fagbza"
   - Try removing any 2 chars → leftover always breaks palindrome condition.
   -> NO

8) n=6, k=2, s="zwaafa"
   - Cannot make palindrome after removing 2.
   -> NO

9) n=7, k=2, s="taagaak"
   - Remove 't' and 'k' -> "aagaa"
   - "aagaa" is palindrome.
   -> YES

10) n=14, k=3, s="ttrraakkttoorr"
    - Remove 3 chars properly → even distribution left.
    -> YES

11) n=5, k=3, s="debdb"
    - Remove 'e','b','b' -> "dd" (palindrome).
    -> YES

12) n=5, k=4, s="ecadc"
    - Remove 4 chars, 1 left → single letter palindrome.
    -> YES

13) n=5, k=3, s="debca"
    - No way to balance odds.
    -> NO

14) n=5, k=3, s="abaac"
    - Remove 'c','b','a' -> "aa" (palindrome).
    -> YES
*/


// Import prompt-sync for input
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt("Enter number of test cases: "));

while (t--) {
    // Read n and k
    let [n, k] = prompt("Enter n and k: ").split(" ").map(Number);

    // Read the string
    let s = prompt("Enter string: ");

    // Frequency map for characters
    let freq = {};

    // Count frequency of each character in s
    for (let i = 0; i < n; i++) {
        let ch = s[i];
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Count how many characters have odd frequency
    let oddCount = 0;
    for (let ch in freq) {
        if (freq[ch] % 2 !== 0) {
            oddCount++;
        }
    }

    /*
    Intuition:
    ----------
    - A palindrome can have at most 1 odd frequency character.
    - After removing k characters, we want the remaining string 
      to follow palindrome rules.
    - If oddCount > k+1, it's impossible ("NO").
    - Otherwise, it is possible ("YES").
    */
    if (oddCount > k + 1) {
        console.log("NO");
    } else {
        console.log("YES");
    }
}
