/*
Problem Simplified:

Jon Snow has n stewards. Each steward has a strength value.

Jon will only support a steward if:
1. There exists at least one steward weaker than him (strictly smaller strength).
2. There exists at least one steward stronger than him (strictly greater strength).

We need to count how many stewards Jon will support.


-------------------
Key Idea:
-------------------
- Find the weakest steward strength = min(a)
- Find the strongest steward strength = max(a)
- Jon supports only those stewards whose strength is strictly between min and max
  (i.e., not equal to min or max)

So the answer = total stewards - (count of min strength stewards) - (count of max strength stewards)


-------------------
Example Walkthrough:
-------------------

Example 1:
Input:
2
1 5

Strengths = [1, 5]
- Steward with strength 1 → cannot be supported (no one weaker)
- Steward with strength 5 → cannot be supported (no one stronger)
=> Supported stewards = 0

Output:
0


Example 2:
Input:
3
1 2 5

Strengths = [1, 2, 5]
- Steward 1 → cannot be supported (no one weaker)
- Steward 5 → cannot be supported (no one stronger)
- Steward 2 → supported (since 1 is weaker and 5 is stronger)
=> Supported stewards = 1

Output:
1


Example 3:
Input:
6
4 4 4 4 4 4

Strengths = [4, 4, 4, 4, 4, 4]
- All have the same strength, so there is no "strictly weaker" or "strictly stronger" steward
=> Supported stewards = 0

Output:
0


Example 4:
Input:
5
2 5 3 2 5

Strengths = [2, 5, 3, 2, 5]
- Weakest = 2
- Strongest = 5
- Remove all 2’s and 5’s
- Left = [3]
=> Supported stewards = 1

Output:
1
*/



// Import prompt-sync for console input
const prompt = require("prompt-sync")({ sigint: true });

// Read number of stewards
let n = parseInt(prompt());

// Read array of steward strengths
let a = prompt().split(" ").map(Number);

// Find the minimum strength
let minStrength = Math.min(...a);

// Find the maximum strength
let maxStrength = Math.max(...a);

// Count how many stewards have the minimum strength
let countMin = a.filter(x => x === minStrength).length;

// Count how many stewards have the maximum strength
let countMax = a.filter(x => x === maxStrength).length;

// Number of supported stewards = total - countMin - countMax
let supported = n - countMin - countMax;

// If result is negative (like when all elements are equal), set it to 0
if (supported < 0) supported = 0;

// Print result
console.log(supported);

