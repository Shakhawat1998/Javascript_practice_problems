/*
Problem: Reconstruct Polycarp's String from Trace

You are given the *trace* of a lost string s (only lowercase English letters).

Definition:
- Trace array a of size n:
  - ai = number of indices j < i such that sj = si
  - In other words: ai = how many times current character has appeared before.

Task:
- Given trace array, reconstruct *any valid string s* of length n.
- Multiple answers may exist; print any one.

Constraints:
- 1 ≤ t ≤ 10^4 (test cases)
- 1 ≤ n ≤ 2*10^5 (string length)
- Sum of n over all test cases ≤ 2*10^5
- Answer always exists


------------------------------------------------
Examples with step-by-step explanation:
------------------------------------------------

Example Input:
5
11
0 0 0 1 0 2 0 3 1 1 4
10
0 0 0 0 0 1 0 1 1 0
1
0
8
0 1 2 3 4 5 6 7
8
0 0 0 0 0 0 0 0

Example Output:
abracadabra
codeforces
a
aaaaaaaa
dijkstra

------------------------------------------------
Explanation:
------------------------------------------------

Testcase 1:
n=11, trace = [0,0,0,1,0,2,0,3,1,1,4]
- Position 1: a1=0 → new char → 'a'
- Position 2: a2=0 → new char → 'b'
- Position 3: a3=0 → new char → 'r'
- Position 4: a4=1 → must repeat a char seen once → 'a'
- Position 5: a5=0 → new char → 'c'
- Position 6: a6=2 → char seen twice → 'a'
- Position 7: a7=0 → new char → 'd'
- Position 8: a8=3 → char seen 3 times → 'a'
- Position 9: a9=1 → repeat any char seen once → 'b'
- Position 10: a10=1 → repeat any char seen once → 'r'
- Position 11: a11=4 → char seen 4 times → 'a'
String = "abracadabra"


Testcase 2:
n=10, trace = [0,0,0,0,0,1,0,1,1,0]
- First 5 values = 0 → introduce 5 new chars → "codef"
- 6th value=1 → reuse a char seen once → 'o'
- 7th value=0 → new char → 'r'
- 8th value=1 → reuse char seen once → 'c'
- 9th value=1 → reuse char seen once → 'e'
- 10th value=0 → new char → 's'
One valid string = "codeforces"


Testcase 3:
n=1, trace = [0]
- Only one position, needs a new char → "a"


Testcase 4:
n=8, trace = [0,1,2,3,4,5,6,7]
- Each ai increases, meaning same letter repeats and count increases
- Must be "aaaaaaaa"


Testcase 5:
n=8, trace = [0,0,0,0,0,0,0,0]
- All values are 0, so always choose a new char
- One possible valid answer = "dijkstra"
  (any 8 distinct letters would work, e.g., "abcdefgh")


------------------------------------------------
Intuition:
------------------------------------------------
- If ai=0 → create a new unused character.
- If ai>0 → pick a character that has appeared exactly ai times so far.
- Repeat until string is built.
*/



// Import prompt-sync to read input from console
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
for (let i= 0; i < t; i++) {
    // Read length of string
    let n = parseInt(prompt());

    // Read trace array
    let a = prompt().split(" ").map(Number);

    // This will store the reconstructed string
    let s = "";

    // Count how many times each character has been used
    // Array of size 26 (for 'a' to 'z'), initialized with 0
    let cnt = new Array(26).fill(0);

    // Next unused letter index (0='a', 1='b', ...)
    let nxt = 0;

    // Process each position
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            // Case 1: ai=0 → need a new unused letter
            while (cnt[nxt] > 0) nxt++; // find the next unused
            s += String.fromCharCode(97 + nxt); // convert to letter
            cnt[nxt]++; // mark it as used
        } else {
            // Case 2: ai>0 → find a char that has been used exactly ai times
            for (let j = 0; j < 26; j++) {
                if (cnt[j] === a[i]) {
                    s += String.fromCharCode(97 + j); // reuse that char
                    cnt[j]++; // increase its usage count
                    break; // important: stop after finding one
                }
            }
        }
    }

    // Print the reconstructed string
    console.log(s);
}


/*
--------------------------
Example Walkthrough:
Input:
5
11
0 0 0 1 0 2 0 3 1 1 4
10
0 0 0 0 0 1 0 1 1 0
1
0
8
0 1 2 3 4 5 6 7
8
0 0 0 0 0 0 0 0

Output:
abracadabra
codeforces
a
aaaaaaaa
dijkstra
--------------------------

Intuition Recap:
- If ai=0 → pick a brand new letter.
- If ai>0 → find a letter that has appeared exactly ai times so far.
- Keep track of frequency with cnt[26].
- This guarantees reconstruction of a valid string.
*/
