// Print pattern:
// 1 2 3 * 
// 1 2 * 4 
// 1 * 3 4 
// * 2 3 4 

// PatternPrinter.js

function printPattern() {
    const n = 4; // Number of rows and columns

    for (let i = 0; i < n; i++) {
        let row = '';

        // Loop through columns
        for (let j = 0; j < n; j++) {
            if (j === n - i - 1) {
                row += '* ';  // Place '*' in the correct position
            } else {
                row += (j + 1) + ' '; // Place numbers
            }
        }

        console.log(row.trim()); // Print the row
    }
}

printPattern();
