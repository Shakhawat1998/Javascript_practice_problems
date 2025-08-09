/*
Problem:
--------
CUET has a candy lake with N candies, numbered from 1 to N.
Each candy has a number written on it: A1, A2, ..., AN.
The sweetness of candies depends on how many candies Bhotka eats.

Bhotka loves candies but gets sick if total sweetness exceeds K.
If Bhotka eats S candies, the sweetness of the i-th candy is:
    Ai + S * i   (for i from 1 to N)

You want to find:
1) The maximum number S of candies Bhotka can eat without exceeding total sweetness K.
2) The minimum total sweetness X for those S candies.

Input:
------
- N (number of candies)
- Array A of N integers (numbers written on candies)
- K (maximum total sweetness Bhotka can tolerate)

Output:
-------
Two integers:
- S: maximum candies Bhotka can eat
- X: minimum total sweetness of those S candies

Key idea:
---------
- For a fixed S, sweetness of each candy changes as Ai + S*i.
- To minimize total sweetness, pick S candies with smallest sweetness values.
- Check if their sum <= K.
- Use binary search on S (from 0 to N) to find the maximum S that fits.

Example walkthrough:
--------------------
Input:
5
5 4 3 2 1
16

Check S = 3:
Sweetness of candies = 
[5+3*1=8, 4+3*2=10, 3+3*3=12, 2+3*4=14, 1+3*5=16]
Pick 3 smallest: 8, 10, 12 sum=30 > 16 (not possible)

Check S = 2:
Sweetness = [5+2*1=7, 4+2*2=8, 3+2*3=9, 2+2*4=10, 1+2*5=11]
Pick 2 smallest: 7, 8 sum=15 <= 16 (possible)

Check S = 1:
Sweetness = [5+1*1=6, 4+1*2=6, 3+1*3=6, 2+1*4=6, 1+1*5=6]
Pick 1 smallest: 6 sum=6 <= 16 (possible)

So max S is 2, min sweetness X is 15

Another Example:
--------------
Input:
5
5 4 3 2 1
10

Check S = 2:
Sweetness = [7,8,9,10,11]
Pick 2 smallest: 7+8=15 > 10 (not possible)

Check S = 1:
Sweetness = [6,6,6,6,6]
Pick 1 smallest: 6 <= 10 (possible)

Max S = 1, X = 6

*/



const prompt = require("prompt-sync")(); // Import prompt-sync to read input

const n = parseInt(prompt()); // Read the number of candies
const A = prompt().split(" ").map(Number); // Read array A of sweetness base values for candies
const K = parseInt(prompt()); // Read maximum total sweetness Bhotka can tolerate

// Function to check if Bhotka can eat S candies without exceeding K sweetness
// Returns the total sweetness if possible, otherwise -1
function canEat(S) {
  // Calculate sweetness of each candy when eating S candies: Ai + S*(i+1)
  const sweetness = A.map((val, i) => val + S * (i + 1));
  // Sort sweetness in ascending order to pick the smallest values
  sweetness.sort((a, b) => a - b);
  // Sum the sweetness of the S smallest candies
  let sum = 0;
  for (let i = 0; i < S; i++) sum += sweetness[i];
  // Return sum if it does not exceed K, else return -1 to indicate not possible
  return sum <= K ? sum : -1;
}

let low = 0, high = n; // Binary search boundaries for S (number of candies to eat)
let maxS = 0, minSweetness = 0; // Track maximum candies and corresponding minimum sweetness

// Binary search to find maximum S such that total sweetness <= K
while (low <= high) {
  let mid = Math.floor((low + high) / 2); // Middle value for current search
  const totalSweet = canEat(mid); // Check if eating mid candies is possible
  if (totalSweet !== -1) { // If possible to eat mid candies
    maxS = mid; // Update max candies eaten
    minSweetness = totalSweet; // Update minimum sweetness sum
    low = mid + 1; // Try for more candies
  } else {
    high = mid - 1; // Try fewer candies
  }
}

console.log(maxS, minSweetness); // Output max candies and minimum sweetness
