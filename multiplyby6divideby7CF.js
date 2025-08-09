/*
You start with an integer n.

You want to reach 1 by doing moves:
- Either multiply n by 2
- Or divide n by 6 (only if n is divisible by 6)

Find the minimum number of moves to get 1 from n, or say -1 if impossible.

Input:
- t test cases
- For each test case: one integer n

Output:
- Minimum moves to get 1 from n or -1 if not possible.

Examples:

Input:
7
1
2
3
12
12345
15116544
387420489

Output:
0    // Already 1, no moves needed
-1   // Can't reach 1 from 2
2    // 3 -> multiply by 2 = 6 -> divide by 6 = 1
-1   // Can't reach 1 from 12 by these moves
-1   // Can't reach 1 from 12345
12   // See note below for sequence from 15116544
36   // A sequence of 36 moves from 387420489

Note for 15116544 (6th test case):
Sequence:
15116544 /6 = 2519424
2519424 /6 = 419904
419904 /6 = 69984
69984 /6 = 11664
11664 *2 = 23328
23328 /6 = 3888
3888 /6 = 648
648 /6 = 108
108 *2 = 216
216 /6 = 36
36 /6 = 6
6 /6 = 1
Total moves = 12
*/



const prompt = require('prompt-sync')();

function reduceToOneMoves() {
    const t = +prompt();
    for (let i = 0; i < t; i++) {
        let n = +prompt();
        let moves = 0;

        // If n is already 1, moves = 0
        if (n === 1) {
            console.log(0);
            continue;
        }

        // Count how many times n is divisible by 2 and 3
        let count2 = 0, count3 = 0;
        let temp = n;

        while (temp % 2 === 0) {
            temp /= 2;
            count2++;
        }
        while (temp % 3 === 0) {
            temp /= 3;
            count3++;
        }

        // If after removing all 2s and 3s the number is not 1, impossible
        if (temp !== 1 || count3 < count2) {
            console.log(-1);
            continue;
        }

        // Number of moves:
        // For each 3, we do one divide by 6 move (which removes one 2 and one 3)
        // But since count3 > count2, extra (count3 - count2) multiplies by 2 are needed first
        moves = (count3 - count2) + count3;

        console.log(moves);
    }
}

reduceToOneMoves();







// Step-by-step explanation:
// Input: n = 15116544

// The goal: reach 1 by multiplying by 2 or dividing by 6 (if divisible).

// What does the code do?
// Count factors of 2 and 3 in n

// We factorize n into powers of 2 and 3:

// Count how many times 2 divides n:


// 15116544 / 2 = 7558272  (count2 = 1)
// 7558272 / 2 = 3779136   (count2 = 2)
// 3779136 / 2 = 1889568   (count2 = 3)
// 1889568 / 2 = 944784    (count2 = 4)
// 944784 / 2 = 472392     (count2 = 5)
// 472392 / 2 = 236196     (count2 = 6)
// 236196 / 2 = 118098     (count2 = 7)
// 118098 / 2 = 59049      (count2 = 8)
// 59049 is not divisible by 2, stop counting.
// So, count2 = 8.

// Count how many times 3 divides n:

// 59049 / 3 = 19683    (count3 = 1)
// 19683 / 3 = 6561     (count3 = 2)
// 6561 / 3 = 2187      (count3 = 3)
// 2187 / 3 = 729       (count3 = 4)
// 729 / 3 = 243        (count3 = 5)
// 243 / 3 = 81         (count3 = 6)
// 81 / 3 = 27          (count3 = 7)
// 27 / 3 = 9           (count3 = 8)
// 9 / 3 = 3            (count3 = 9)
// 3 / 3 = 1            (count3 = 10)
// So, count3 = 10.

// Check if after removing all 2s and 3s, remainder is 1

// After dividing by all 2s and 3s, the leftover is 1, so it’s possible to reduce.

// Check if count3 < count2

// Here, count3 = 10 and count2 = 8.

// Since count3 >= count2, we can proceed.

// Calculate minimum moves

// Each division by 6 removes one 2 and one 3 simultaneously. So at least count3 
// moves to remove all 3s (and 2s simultaneously).

// If count3 > count2, we need to multiply by 2 extra times (count3 - count2 times) 
// to "balance" the number of 2s for divisions by 6 to be possible.

// So total moves = (count3 - count2) + count3 = (10 - 8) + 10 = 2 + 10 = 12 moves.


// 12
// This matches the example given.

// Summary:
// Factorize n into powers of 2 and 3.

// If leftover after removing 2s and 3s is not 1, print -1.

// If count of 3’s is less than count of 2’s, print -1 (impossible).

// Otherwise, minimum moves = (count3 - count2) + count3.
