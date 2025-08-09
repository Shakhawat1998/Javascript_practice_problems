/*
PROBLEM (Simplified):

https://codeforces.com/problemset/problem/451/A

- There is a grid formed by n horizontal sticks and m vertical sticks.
- Intersection points are where one horizontal and one vertical stick cross.
- Total intersection points = n * m.

GAME RULES:
- Two players: Akshat (goes first) and Malvika.
- On each turn, a player picks any remaining intersection point.
- Then, remove both sticks (one horizontal and one vertical) that pass through that point.
  This removes all intersection points along those sticks.
- If a player cannot make a move (no intersections left), they lose.

QUESTION:
- Assuming both play optimally, who wins?

---------------------------------------------------------
INPUT:
- Two integers n and m (1 ≤ n, m ≤ 100).

OUTPUT:
- "Akshat" if Akshat wins, or "Malvika" otherwise.

---------------------------------------------------------
EXAMPLES:

Example 1:
Input:
2 2

Grid:
- 2 horizontal, 2 vertical sticks
- 4 intersection points (2x2)

Moves:
- Akshat picks any intersection, removes 1 horizontal and 1 vertical stick
  → grid left with 1 horizontal and 1 vertical stick → 1 intersection left
- Malvika picks remaining intersection and removes sticks
- Akshat has no moves left, so Malvika wins.

Output:
Malvika

Example 2:
Input:
3 3

Grid:
- 3 horizontal, 3 vertical sticks
- 9 intersections

Moves:
- Each turn removes one horizontal and one vertical stick.
- The game continues until no sticks remain.
- Since both have equal turns when min(n,m) is odd, Akshat (first player) wins.

Output:
Akshat

---------------------------------------------------------
KEY INSIGHT:
- Each turn removes one horizontal and one vertical stick.
- Number of turns = min(n, m)
- If min(n,m) is odd → Akshat wins (he moves first).
- If even → Malvika wins.
*/



// Read input from prompt-sync or other input methods
const prompt = require("prompt-sync")();

const [n, m] = prompt().split(" ").map(Number);

// The number of turns is limited by the smaller dimension,
// because each move removes one horizontal AND one vertical stick.
const moves = Math.min(n, m);

// If the number of moves is odd, Akshat (first player) wins,
// else Malvika wins.
const winner = (moves % 2 === 1) ? "Akshat" : "Malvika";

console.log(winner);

/*
Explanation:

- Each move removes one horizontal and one vertical stick.
- After min(n, m) moves, no intersections remain.
- Players alternate moves starting with Akshat.
- If min(n, m) is odd, Akshat makes the last move → Akshat wins.
- If even, Malvika makes the last move → Malvika wins.

Examples:

Input: 2 2
min(2,2) = 2 (even) → Malvika wins

Input: 3 3
min(3,3) = 3 (odd) → Akshat wins

Input: 2 3
min(2,3) = 2 (even) → Malvika wins
*/
