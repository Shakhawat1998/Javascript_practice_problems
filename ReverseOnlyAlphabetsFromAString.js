// Input = "34auto35qa@sdet?25year";

// Output = "34otua35aqAteds?25raey"


function reverseAlphabets(alphabetCollector) {
    process.stdout.write(alphabetCollector.split('').reverse().join(''));
    alphabetCollector = '';  // Reset alphabetCollector
    return alphabetCollector;
}

function processInput(input) {
    let alphabetCollector = '';

    for (let ch of input) {
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            alphabetCollector += ch;
        } else {
            alphabetCollector = reverseAlphabets(alphabetCollector);
            process.stdout.write(ch);  // Print the non-alphabet character
        }
    }

    if (alphabetCollector) {
        alphabetCollector = reverseAlphabets(alphabetCollector);
    }
}

// Example usage:
processInput("34auto35qa@sdet?25year");
