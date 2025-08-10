/*
Problem: Defeat the Dragon with Limited Spells

Kana wants to defeat a dragon whose initial hit points (HP) = x.

Kana can cast two types of spells (each can be used limited times):
1) Void Absorption (up to n times):
   - HP becomes floor(HP/2) + 10 after casting.
2) Lightning Strike (up to m times):
   - HP decreases by 10 after casting.

Goal:
- Determine if it is possible to reduce the dragon's HP to 0 or less
  by casting the spells in any order, but not exceeding the given limits.

Input:
- t test cases
- For each test case: three integers x, n, m

Output:
- Print "YES" if dragon can be defeated
- Print "NO" otherwise

---------------------------------------------------------------
Example:

Input:
7
100 3 4
189 3 4
64 2 3
63 2 3
30 27 7
10 9 1
69117 21 2

Output:
YES
NO
NO
YES
YES
YES
YES

Explanation (first test case):
- Initial HP = 100
- Use Void Absorption: floor(100/2)+10 = 60
- Use Lightning Strike: 60 - 10 = 50
- Use Void Absorption: floor(50/2)+10 = 35
- Use Void Absorption: floor(35/2)+10 = 27
- Use Lightning Strike: 27 - 10 = 17
- Use Lightning Strike: 17 - 10 = 7
- Use Lightning Strike: 7 - 10 = -3 (dragon defeated)
*/




const prompt = require('prompt-sync')();

const t = parseInt(prompt()); // Read number of test cases

for (let i = 0; i < t; i++) {
    let [x, n, m] = prompt().split(' ').map(Number); // Read x, n, m for each test case

    // Cast Void Absorption spells up to n times
    for (let i = 0; i < n; i++) {
        const temp = Math.floor(x / 2) + 10; // Calculate HP after Void Absorption
        if (x <= temp) break; // If spell doesn't reduce HP, stop casting
        x = temp; // Update HP after casting Void Absorption
    }

    // Check if remaining HP can be reduced by m Lightning Strikes (each reduces HP by 10)
    if (x <= m * 10) {
        console.log("YES"); // Dragon can be defeated
    } else {
        console.log("NO"); // Dragon cannot be defeated
    }
}
