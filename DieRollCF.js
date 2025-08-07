// Problem: Dot wants to know the probability she can win or tie the highest roll
// from Yakko and Wakko on a six-sided die.
//
// Input:
// - Y: Yakko's roll (1 to 6)
// - W: Wakko's roll (1 to 6)
//
// Output:
// - Probability Dot's roll >= max(Y, W)
// - Probability should be reduced to simplest fraction A/B
//
// How to calculate:
// - Maximum roll among Yakko and Wakko: maxRoll = Math.max(Y, W)
// - Dot wins if she rolls at least maxRoll (including tie)
// - Number of winning outcomes = 6 - maxRoll + 1
// - Total possible outcomes = 6
// - Probability = (6 - maxRoll + 1) / 6
//
// Simplify fraction before output.
//
// Example:
// Input: 4 2
// maxRoll = 4
// winning outcomes = 6 - 4 + 1 = 3 (rolling 4,5,6)
// Probability = 3/6 = 1/2


// To run this code:
// npm install prompt-sync
const prompt = require('prompt-sync')();

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const input = prompt("Enter Yakko's and Wakko's rolls (Y W): ");
const [Y, W] = input.split(' ').map(Number);

const maxRoll = Math.max(Y, W);
const numerator = 6 - maxRoll + 1;
const denominator = 6;

// Simplify fraction
const divisor = gcd(numerator, denominator);

console.log(`${numerator / divisor}/${denominator / divisor}`);
