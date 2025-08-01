// // You have a 5×5 grid containing exactly one 1 and the rest are 0s.

// // You want to move the 1 to the center of the grid (row 3, column 3).

// // You can only move the 1 by swapping:

// // Two neighboring rows (swap row i and i+1), or

// // Two neighboring columns (swap column j and j+1).

// // Task:
// // Find the minimum number of such swaps needed to bring the 1 to the center position.

// // Input:
// // 5 lines, each with 5 integers (0 or 1).

// // Exactly one 1 in the entire grid.

// // Output:
// // Print the minimum number of moves required.


// // Input:
// // 0 0 0 0 0
// // 0 0 0 0 1
// // 0 0 0 0 0
// // 0 0 0 0 0
// // 0 0 0 0 0

// // Output:
// // 3


// // Input:
// // 0 0 0 0 0
// // 0 0 0 0 0
// // 0 1 0 0 0
// // 0 0 0 0 0
// // 0 0 0 0 0

// // Output:
// // 1

// Hint:
// The minimum moves = distance between the current position of 1 and center (3, 3) measured as
// |row_of_1 - 3| + |col_of_1 - 3|




const prompt = require('prompt-sync')();

const matrix = [];

// Read 5 lines and store each as an array inside matrix
for (let i = 0; i < 5; i++) {
    const row = prompt().trim().split(' ');
    matrix.push(row);
}

// Find position of '1' in the matrix
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matrix[i][j] === '1') {
            // Calculate moves to center (2,2) since zero-indexed
            const moves = Math.abs(i - 2) + Math.abs(j - 2);
            console.log(moves);
            process.exit(0);
        }
    }
}

