// Fox Ciel wants to draw a snake on an n by m grid (n rows, m columns). Here's how the snake looks:

// The snake starts at the top-left corner (row 1, column 1) and moves right along the first row.

// Then it goes down one row and:

// If it’s an even-numbered "snake row," the snake is at the rightmost column (just one '#'), with the rest of that row as '.'.

// If it’s an odd-numbered "snake row," the snake is at the leftmost column (just one '#'), with the rest '.'.

// Then it goes down one more row and moves left along that entire row.

// This pattern repeats every 3 rows:

// Row 1: Full snake (all '#')

// Row 2: Snake tail at rightmost or leftmost column, rest '.'

// Row 3: Full snake (all '#')

// Row 4: Snake tail switches side, rest '.'

// Row 5: Full snake, and so on...

// ✨ Pattern Rules
// Rows numbered 1, 3, 5, ... (odd rows): full row of '#'.

// Even rows alternate:

// If the even row is 2, 6, 10, ... (2 mod 4): snake tail at the rightmost cell ('#' at column m).

// If the even row is 4, 8, 12, ... (0 mod 4): snake tail at the leftmost cell ('#' at column 1).

// 📥 Input Format:
// Two integers:

// n — number of rows (odd number, 3 ≤ n ≤ 50)

// m — number of columns (3 ≤ m ≤ 50)

// 📤 Output Format:
// Print n lines, each line containing exactly m characters — the snake pattern.

// Use # for snake parts

// Use . for empty cells

// No spaces in output lines

// 🐍 Examples Explained
// Example 1:
// Input:


// 3 3
// Output:


// ###
// ..#
// ###
// Explanation:

// Row 1 (odd): all #

// Row 2 (even, 2 mod 4): tail at rightmost cell → last cell is #, rest .

// Row 3 (odd): all #

// Example 2:
// Input:


// 3 4
// Output:


// ####
// ...#
// ####
// Explanation same as above, just wider row.

// Example 3:
// Input:


// 5 3
// Output:


// ###
// ..#
// ###
// #..
// ###
// Explanation:

// Rows 1,3,5 full #

// Row 2 (2 mod 4): tail at rightmost (..#)

// Row 4 (0 mod 4): tail at leftmost (#..)

// Example 4:
// Input:


// 9 9
// Output:


// #########
// ........#
// #########
// #........
// #########
// ........#
// #########
// #........
// #########
// Explanation:

// Odd rows (1,3,5,7,9): full #

// Even rows alternate tail positions:

// Rows 2,6 (2 mod 4): tail at rightmost (........#)

// Rows 4,8 (0 mod 4): tail at leftmost (#........)

// 📝 Summary:
// Full # rows alternate with rows with single # at one end.

// Tail side switches every 2 rows.

// // Pattern repeats every 4 rows.


const prompt = require('prompt-sync')();

// Read inputs
const n = parseInt(prompt('Enter n (odd number): ').trim());
const m = parseInt(prompt('Enter m: ').trim());

function drawSnake(n, m) {
  for (let r = 1; r <= n; r++) {
    if (r % 2 === 1) {
      // Odd rows: full row of '#'
      console.log('#'.repeat(m));
    } else {
      // Even rows: tail either right or left
      if (r % 4 === 0) {
        // Tail at leftmost
        console.log('#' + '.'.repeat(m - 1));
      } else {
        // Tail at rightmost
        console.log('.'.repeat(m - 1) + '#');
      }
    }
  }
}

drawSnake(n, m);
