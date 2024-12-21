function printPascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let num = 1;
        
        // Print numbers for each row
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += num + ' ';
            num = num * (i - j) / (j + 1); // (i - j) / (j + 1)  is the formula for 
            // efficient calculation of binomial coefficients
        }

        // Print the row, trimming any extra space at the end
        console.log(row.trim());
    }
}

let rows = 5;
printPascalsTriangle(rows);
