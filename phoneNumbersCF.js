// You have n digit cards and want to create as many phone numbers as possible.

// A phone number is a string of length 11 that starts with the digit '8' followed by 10 other digits.

// You can use each card at most once. The phone numbers do not need to be different.

// Input:

// An integer n (1 ≤ n ≤ 100) — number of digit cards.

// A string of n digits representing the cards you have.

// Output:

// The maximum number of phone numbers you can make using the cards.

// If you cannot make any phone number, output 0.

//input
// 11
// 00000000008
//output
// 1
//input
// 22
// 0011223344556677889988
//output
// 2
//input
// 11
// 31415926535
//output
// 0
// In the first example, one phone number, "8000000000", can be made from these cards.

// In the second example, you can make two phone numbers from the cards, for example, "80123456789" and "80123456789".

// In the third example you can't make any phone number from the given cards.

const prompt = require('prompt-sync')();

const n = parseInt(prompt(), 10);
const cards = prompt();

function maxPhoneNumbers(n, cards) {
  let countEights = 0;
  for (let c of cards) {
    if (c === '8') countEights++;
  }
  return Math.min(countEights, Math.floor(n / 11));
}

const result = maxPhoneNumbers(n, cards);
console.log(result);




