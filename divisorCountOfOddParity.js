/*
Problem:
--------
Given a positive integer N, find how many of its divisors have "odd parity".

Definitions:
- Divisor: A number that divides N without leaving a remainder.
- Parity of a number: Number of 1's in the binary representation of that number.
- Odd parity means the count of 1's in the binary form is odd.

Example:
--------
N = 500

Divisors of 500:
1, 2, 4, 5, 10, 20, 25, 50, 100, 125, 250, 500

Check parity of each divisor:
- 1 (binary 1) → 1 one → odd parity
- 2 (binary 10) → 1 one → odd parity
- 4 (binary 100) → 1 one → odd parity
- 5 (binary 101) → 2 ones → even parity
- 10 (binary 1010) → 2 ones → even parity
- 20 (binary 10100) → 2 ones → even parity
- 25 (binary 11001) → 3 ones → odd parity
- 50 (binary 110010) → 3 ones → odd parity
- 100 (binary 1100100) → 3 ones → odd parity
- 125 (binary 1111101) → 6 ones → even parity
- 250 (binary 11111010) → 6 ones → even parity
- 500 (binary 111110100) → 6 ones → even parity

Divisors with odd parity are: 1, 2, 4, 25, 50, 100

Output:
-------
6
*/


const prompt = require("prompt-sync")(); // Import prompt-sync for input

const N = BigInt(prompt());               // Read input number as BigInt

// Function to count number of set bits (1s) in binary representation of BigInt
function countOnes(num) {
  let count = 0;                         // Initialize count to 0
  while (num > 0n) {                     // Loop while number is greater than 0
    count += Number(num & 1n);          // Add 1 if least significant bit is set
    num >>= 1n;                         // Right shift number by 1 bit
  }
  return count;                         // Return total count of set bits
}

const sqrtN = BigInt(Math.floor(Math.sqrt(Number(N)))); // Calculate integer square root of N

let countOddParityDivisors = 0;          // Initialize count of divisors with odd parity

for (let i = 1n; i <= sqrtN; i++) {      // Iterate from 1 to sqrtN
  if (N % i === 0n) {                     // Check if i is a divisor of N
    if (countOnes(i) % 2 === 1)          // If i has odd parity (odd number of set bits)
      countOddParityDivisors++;           // Increment count

    const paired = N / i;                 // Calculate paired divisor N/i

    if (paired !== i && countOnes(paired) % 2 === 1) // If paired divisor different and has odd parity
      countOddParityDivisors++;           // Increment count
  }
}

console.log(countOddParityDivisors);     // Print total count of divisors with odd parity
