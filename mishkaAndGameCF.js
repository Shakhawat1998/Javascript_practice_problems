// 🐻 Mishka and Chris Dice Game
// Two players, Mishka and Chris, play a dice game for 'n' rounds.
// In each round, both roll a 6-sided dice.
// Whoever gets the higher number wins that round.
// If both get the same number, it's a draw for that round.

// At the end of all rounds:
// - If Mishka wins more rounds, print: "Mishka"
// - If Chris wins more rounds, print: "Chris"
// - If both win the same number of rounds, print: "Friendship is magic!^^"

// 📥 Input:
// First line: n (number of rounds)
// Next n lines: two numbers per line — Mishka's roll and Chris's roll

// 📤 Output:
// One of the following: "Mishka", "Chris", or "Friendship is magic!^^"

// ✅ Example 1:
// Input:
// 3
// 3 5  -> Chris wins (5 > 3)
// 2 1  -> Mishka wins (2 > 1)
// 4 2  -> Mishka wins (4 > 2)
// Output:
// Mishka
// Explanation: Mishka won 2 rounds, Chris won 1. So Mishka wins overall.

// ✅ Example 2:
// Input:
// 2
// 6 1  -> Mishka wins
// 1 6  -> Chris wins
// Output:
// Friendship is magic!^^
// Explanation: 1 round each, so it's a draw.

// ✅ Example 3:
// Input:
// 3
// 1 5  -> Chris wins
// 3 3  -> Draw
// 2 2  -> Draw
// Output:
// Chris
// Explanation: Chris won 1 round, Mishka won 0, so Chris wins.


// npm install prompt-sync before running: npm install prompt-sync
const prompt = require('prompt-sync')();

// Read number of rounds
const n = parseInt(prompt());

let mishkaWins = 0;
let chrisWins = 0;

// Loop through each round
for (let i = 1; i <= n; i++) {
  const input = prompt();
  const [mi, ci] = input.split(' ').map(Number);

  if (mi > ci) {
    mishkaWins++; // Mishka wins the round
  } else if (ci > mi) {
    chrisWins++; // Chris wins the round
  }
  // If equal, no points to either
}

// Determine and print result
if (mishkaWins > chrisWins) {
  console.log("Mishka");
} else if (chrisWins > mishkaWins) {
  console.log("Chris");
} else {
  console.log("Friendship is magic!^^");
}
