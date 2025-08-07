// 🏃‍♂️ Marathon Race: Count How Many Runners Are Ahead of Timur
//
// Problem:
// Given distances run by Timur and three other runners, count how many ran farther than Timur.
//
// Input:
// - First line: integer t (number of test cases)
// - Next t lines: each contains 4 distinct integers a, b, c, d
//   where:
//     a = distance run by Timur
//     b, c, d = distances run by the other three participants
//
// Output:
// For each test case, print how many participants ran farther than Timur.
//
// 🔍 How to solve:
// Count how many of b, c, d are greater than a.
//
// Examples:
//
// Input:
// 4
// 2 3 4 1
// 10000 0 1 2
// 500 600 400 300
// 0 9999 10000 9998
//
// Output:
// 2
// 0
// 1
// 3
//
// Explanation:
// 1) Timur ran 2, others ran 3,4,1 → two ran farther (3 and 4).
// 2) Timur ran 10000, others 0,1,2 → none ran farther.
// 3) Timur ran 500, others 600,400,300 → only one ran farther (600).
// 4) Timur ran 0, others 9999,10000,9998 → all three ran farther.




const prompt = require('prompt-sync')();

const t = parseInt(prompt("Enter number of test cases: "));

for (let i = 0; i < t; i++) {
    // Read distances: a = Timur, b, c, d = others
    const [a, b, c, d] = prompt("Enter distances (a b c d): ").split(' ').map(Number);

    // Count how many ran farther than Timur
    let count = 0;
    if (b > a) count++;
    if (c > a) count++;
    if (d > a) count++;

    console.log(count);
}
