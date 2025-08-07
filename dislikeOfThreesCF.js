/*
🧠 Problem: Polycarp's Disliked Numbers

Polycarp dislikes numbers that:
1. Are divisible by 3 (like 3, 6, 9, 12, ...), or
2. End with the digit 3 (like 3, 13, 23, 33, ...)

He creates a list of numbers he **likes** by writing all positive integers (starting from 1) 
but skipping any number that meets the above conditions.

For example:
Liked numbers: 1, 2, 4, 5, 7, 8, 10, 11, 14, 16, ...

🎯 Task:
Given an integer k, print the k-th number in Polycarp's liked number sequence.

📥 Input:
- First line: t (number of test cases)
- Next t lines: one integer k per line (1 ≤ k ≤ 1000)

📤 Output:
For each test case, print the k-th liked number (in a new line).

🧪 Example Input:
10
1
2
3
4
5
6
7
8
9
1000

✅ Example Output:
1    // 1st liked number
2    // 2nd liked number
4    // 3rd liked number (3 is skipped)
5    // 4th
7    // 5th (6 is skipped)
8    // 6th
10   // 7th (9 and numbers ending in 3 are skipped)
11   // 8th
14   // 9th
1666 // 1000th liked number

💡 Tip:
- Build the sequence by checking numbers one by one, skipping those divisible by 3 or ending with 3.
- Store liked numbers until you reach the 1000th liked number.
*/




const prompt = require('prompt-sync')();

// Read number of test cases
const t = parseInt(prompt());
const ks = [];

for (let i = 0; i < t; i++) {
  ks.push(parseInt(prompt()));
}

// Precompute first 1000 liked numbers
const likedNumbers = [];
let num = 1;

while (likedNumbers.length < 1000) {
  if (num % 3 !== 0 && num % 10 !== 3) {
    likedNumbers.push(num);
  }
  num++;
}

// Output k-th liked number for each test case
for (let i = 0; i < t; i++) {
  console.log(likedNumbers[ks[i] - 1]);
}



// 🔧 How it works:
// It reads t test cases.

// It precomputes the first 1000 numbers that are not divisible by 3 and do not end with 3.

// Then for each test case, it simply returns the k-th number from the precomputed list.