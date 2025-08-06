// You are given an integer n (12 ≤ n ≤ 1,000,000).

// Your task is to find two composite numbers x and y such that:

// Both x and y are greater than 1 and less than n,

// x + y = n.

// What is a composite number?
// A composite number is a positive integer that has more than two divisors.

// In other words, it’s not a prime and not 1.
// // 
// Examples: 4, 6, 8, 9, 10, 12, ...

// Input:
// A single integer n (12 ≤ n ≤ 1,000,000).

// Output:
// Two composite numbers x and y whose sum equals n.

// If there are multiple answers, you can print any one of them.

// Examples:
// Input	Possible Output	Explanation
// 12	4 8	4 and 8 are composite and 4+8=12
// 15	6 9	6 and 9 are composite and 6+9=15
// 23	8 15	8 and 15 are composite and 8+15=23
// 1000000	500000 500000	Both 500,000 are composite numbers

// You cannot use numbers like 1 or any prime numbers in your answer.



const prompt = require('prompt-sync')();

const n = parseInt(prompt("Enter n (≥12): "));

// Function to check if a number is composite
function isComposite(num) {
    if (num <= 3) return false; // 1,2,3 are not composite
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return true;
    }
    return false;
}

// Find two composite numbers x and y such that x + y = n
function findCompositePair(n) {
    for (let x = 4; x < n; x++) { // start from smallest composite number 4
        let y = n - x;
        if (isComposite(x) && isComposite(y)) {
            return [x, y];
        }
    }
    return null; // theoretically never reached for n≥12
}

const result = findCompositePair(n);
if (result) {
    console.log(result[0], result[1]);
} else {
    console.log("No solution found");
}

