/*
Polycarp wants to check if a number n can be formed by adding some number of 2020s and some number of 2021s.

Why 2020 and 2021? Because he wants to remember the year 2020 and the new year 2021.

We need to answer "YES" if it is possible, or "NO" if not.

Examples:

n = 4041
4041 = 2020 + 2021 → YES

n = 4042
4042 = 2021 + 2021 → YES

n = 8081
8081 = 2020 + 2020 + 2020 + 2021
   = 3 * 2020 + 1 * 2021 → YES

n = 8079
No combination of 2020s and 2021s can make 8079 → NO

Constraints:
- Up to 10,000 test cases
- Each n up to 1,000,000

Approach:
Try how many times we can use 2021 (from 0 up to a small limit)
Check if the rest is divisible by 2020.
If yes, print "YES", otherwise "NO".
*/


const prompt = require('prompt-sync')();

function canRepresentAs2020And2021() {
    const t = +prompt(); // number of test cases
    for (let i = 0; i < t; i++) {
        const n = +prompt();
        let canRepresent = false;

        // Try all counts of 2021 up to 1000
        for (let count2021 = 0; count2021 <= 1000; count2021++) {
            const remainder = n - count2021 * 2021;
            if (remainder < 0) break; // no point checking further
            if (remainder % 2020 === 0) {
                canRepresent = true;
                break;
            }
        }

        console.log(canRepresent ? "YES" : "NO");
    }
}

canRepresentAs2020And2021();

