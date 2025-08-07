/*
Problem: Determine which equation is true: a + b = c or a - b = c

You are given three integers a, b, and c.
Exactly one of the two equations is true:
    1) a + b = c
    2) a - b = c

Your task: For each test case, print "+" if the first equation (a + b = c) is true,
otherwise print "-" (meaning a - b = c is true).

-------------------------------------------------------------
Input:
- The first line contains an integer t (1 ≤ t ≤ 162) — number of test cases.
- Then t lines follow, each containing three integers a, b, c:
  - 1 ≤ a, b ≤ 9
  - -8 ≤ c ≤ 18
  - Exactly one of a + b = c or a - b = c holds true.

Output:
- For each test case, output "+" if a + b = c.
- Otherwise output "-".

-------------------------------------------------------------
Examples:

Input:
11
1 2 3
3 2 1
2 9 -7
3 4 7
1 1 2
1 1 0
3 3 6
9 9 18
9 9 0
1 9 -8
1 9 10

Output:
+
-
-
+
+
-
+
+
-
-
+

Explanation:
- For test case 1: 1 + 2 = 3, so output "+"
- For test case 2: 3 - 2 = 1, so output "-"
- For test case 3: 2 - 9 = -7, so output "-"
- And so on...

*/



const prompt = require('prompt-sync')();

const t = parseInt(prompt());

for (let i = 0; i < t; i++) {
  const [a, b, c] = prompt().split(' ').map(Number);

  // Check if a + b equals c
  if (a + b === c) {
    console.log('+');
  } else {
    // Otherwise, a - b equals c
    console.log('-');
  }
}
