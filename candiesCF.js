//https://codeforces.com/problemset/problem/1343/A



/*
PROBLEM (Simplified):

- Vova found n candy wrappers.
- He bought candies over k days (k > 1).
- On day 1, he bought x candies.
- On day 2, he bought 2x candies.
- On day 3, he bought 4x candies.
- ...
- On day k, he bought 2^(k-1) * x candies.

Total candies bought = x + 2x + 4x + ... + 2^(k-1)*x = n

- Given n, find any positive integer x such that for some integer k > 1,
  the sum above equals n.

-----------------------------------------------------
INPUT:
- t test cases
- Each test case: integer n (3 ≤ n ≤ 10^9)
- It's guaranteed that at least one solution exists for each n.

-----------------------------------------------------
OUTPUT:
- For each test case, print any valid positive integer x.

-----------------------------------------------------
EXAMPLES:

Input:
7
3
6
7
21
28
999999999
999999984

Output:
1        // 3 = 1*(1 + 2), x=1, k=2
2        // 6 = 2*(1 + 2), x=2, k=2
1        // 7 = 1*(1 + 2 + 4), x=1, k=3
7        // 21 = 7*(1 + 2), x=7, k=2
4        // 28 = 4*(1 + 2 + 4), x=4, k=3
333333333
333333328

-----------------------------------------------------
KEY IDEA:

- Sum of series = x * (2^k - 1)
- For some k > 1, (2^k - 1) divides n
- Find any divisor of n of the form (2^k - 1), then x = n / (2^k - 1)
- Because n and k are given, just try k from 2 to 30 (since 2^30 > 10^9)

*/



const prompt = require("prompt-sync")();

const t = Number(prompt().trim()); // Number of test cases

for (let i = 0; i < t; i++) {
  const n = Number(prompt().trim()); // Read n for each test case

  // We try values of k from 2 to 30 because 2^30 > 10^9 (max n)
  let x = -1; // Initialize x as -1 to mark no solution found yet
  for (let k = 2; k <= 30; k++) {
    const divisor = (1 << k) - 1; // Calculate (2^k - 1) using bit shift

    // Check if divisor divides n exactly
    if (n % divisor === 0) {
      x = n / divisor; // Calculate x = n / (2^k - 1)
      break; // Found a valid x and k, break out of loop
    }
  }

  console.log(x); // Print the found x (guaranteed to exist by problem statement)
}
