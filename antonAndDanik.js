// Anton and Danik played n games in a row.

// Each game is either won by Anton (A) or Danik (D) — there are no ties.

// // You have to determine who won more games overall.

// If Anton won more games, print "Anton"

// If Danik won more games, print "Danik"

// If they won the same number of games, print "Friendship"

// 👉 Input:
// First line: integer n (number of games)
// // 
// Second line: string s of length n

// each character is A (Anton wins) or D (Danik wins)

// 🧪 Examples:
// Input
// Copy code
// 6
// ADAAAA
// Anton wins: 5 times (A at positions 1,3,4,5,6)
// Danik wins: 1 time (D at position 2)
// Anton has more wins → Output: Anton

// Input
// Copy code
// 7
// DDDAADA
// Anton wins: 3 times
// Danik wins: 4 times
// Danik has more wins → Output: Danik

// Input
// Copy code
// 6
// DADADA
// Anton wins: 3 times
// Danik wins: 3 times
// Same wins → Output: Friendship

// 🔒 Constraints
// 1 ≤ n ≤ 100,000


const prompt = require('prompt-sync')();

// Read input
const n = parseInt(prompt());   // number of games (not used directly here)
const s = prompt();             // string of game results

let antonWins = 0;
let danikWins = 0;

// Count wins for Anton and Danik
for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
        antonWins++;
    } else if (s[i] === 'D') {
        danikWins++;
    }
}

// Output the result
if (antonWins > danikWins) {
    console.log("Anton");
} else if (danikWins > antonWins) {
    console.log("Danik");
} else {
    console.log("Friendship");
}
