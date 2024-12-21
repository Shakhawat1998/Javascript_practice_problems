function patternPrintUsingLoop() {
    // First part: descending pattern
    for (let i = 5; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }

    // Second part: ascending pattern
    for (let i = 2; i <= 5; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}

// Call the function to print the pattern
patternPrintUsingLoop();
