/*
🐧 Problem: Penguin Rocher has n sticks.
- He has exactly one stick of every length from 1 to n.
  Example: if n = 4, sticks = [1, 2, 3, 4].

🔧 He can combine two sticks:
- If he connects sticks of lengths a and b → new stick length = a + b.
- The two old sticks are removed, and the new stick is added to his set.
- The new stick can also be used for more combinations.

🎯 Goal:
- Create the maximum number of sticks that have the SAME length.
- Not all sticks must be the same length — just maximize the count for one length.

📥 Input:
t → number of test cases
For each test case: n (1 ≤ n ≤ 10^9)

📤 Output:
For each test case: Maximum number of sticks of equal length possible.

---------------------------------------------------
📌 EXAMPLES:

Example 1:
Input:
1
1
Explanation:
Only one stick of length 1, so max same length = 1.
Output:
1

Example 2:
Input:
1
2
Sticks: [1, 2]
We can’t make more than one stick with the same length.
Output:
1

Example 3:
Input:
1
3
Sticks: [1, 2, 3]
Combine 1 and 2 → 3
Now we have [3, 3]
Max same length = 2
Output:
2

Example 4:
Input:
1
4
Sticks: [1, 2, 3, 4]
Combine 1 and 3 → 4
Now we have [2, 4, 4]
Max same length = 2
Output:
2

---------------------------------------------------
💡 Key observation:
- When n = 1 → answer = 1
- When n = 2 → answer = 1
- For n ≥ 3 → answer = Math.floor((n + 1) / 2)
*/


// Import prompt-sync for user input
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
    // Read value of n for this test case
    let n = parseInt(prompt(`Enter n for test case ${i + 1}: `));

    /*
      Logic:
      - If n = 1 or n = 2 → only one stick with same length possible.
      - If n ≥ 3 → The formula (n + 1) / 2 gives max sticks with same length.
        (We take floor division since answer must be integer.)
    */
    let maxSameLength;
    if (n <= 2) {
        maxSameLength = 1;
    } else {
        maxSameLength = Math.floor((n + 1) / 2);
    }

    console.log(maxSameLength);
}
