/*
PROBLEM SIMPLIFICATION: Monocarp Numbers Comparison

We have two numbers described in a special format:
- Each number is a positive integer x with p zeros appended.
  Example: x=2, p=3 → 2000

Task:
- Compare two numbers given as (x1, p1) and (x2, p2)
- Print:
  '<' if the first number < second number
  '>' if the first number > second number
  '=' if they are equal

---------------------------------------------------
EXAMPLES:

Example 1:
Input: x1=2, p1=1 ; x2=19, p2=0
Numbers: 20 and 19
Comparison: 20 > 19
Output: >

Example 2:
Input: x1=10, p1=2 ; x2=100, p2=1
Numbers: 1000 and 1000
Comparison: equal
Output: =

Example 3:
Input: x1=1999, p1=0 ; x2=2, p2=3
Numbers: 1999 and 2000
Comparison: 1999 < 2000
Output: <

Example 4:
Input: x1=1, p1=0 ; x2=1, p2=0
Numbers: 1 and 1
Comparison: equal
Output: =

Example 5:
Input: x1=99, p1=0 ; x2=1, p2=2
Numbers: 99 and 100
Comparison: 99 < 100
Output: <

---------------------------------------------------
OBSERVATION:
- The actual numbers can be huge (up to 10^6 digits)
- So, we compare:
  1) Total length = digits in x + number of zeros
  2) If lengths differ → longer number is bigger
  3) If lengths equal → compare x values directly
- This avoids building the huge numbers explicitly.
*/



// Import prompt-sync for reading input from console
const prompt = require("prompt-sync")();

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {
    // Read input values: a, b, c, d
    let [a, b, c, d] = prompt().split(" ").map(Number);

    // Compute logarithmic values to compare
    // Using property: log10(a * 10^b) = log10(a) + b
    let x = Math.log10(a) + b;
    let y = Math.log10(c) + d;

    // Intuition:
    // - Directly compare x and y
    // - Use a small epsilon to handle floating-point precision errors
    const eps = 1e-7;

    if (Math.abs(x - y) <= eps) {
        // Numbers are effectively equal
        console.log("=");
    } else if (x > y) {
        // First number is greater
        console.log(">");
    } else {
        // Second number is greater
        console.log("<");
    }
}




/*
1. The Problem

We need to compare two numbers that are given in the form:

    Number = x * 10^p

- x is a normal integer.
- p is the number of zeros appended.
- For example, (2,3) → 2000, (19,0) → 19.

The numbers can get extremely large (up to millions of digits),
so direct computation isn’t feasible.

---------------------------------------------------

2. Logarithmic Trick

Instead of building the huge number, we use logarithms:

    log10(x * 10^p) = log10(x) + p

- Math.log10(a) + b computes the "magnitude" of the number in base 10.
- Similarly, Math.log10(c) + d for the second number.

Why this works:
- Numbers with bigger logarithms are inherently larger.
- Example:
    x1 = 2, p1 = 1 → log10(2*10^1) = log10(2) + 1 ≈ 1.301
    x2 = 19, p2 = 0 → log10(19*10^0) = log10(19) ≈ 1.279
    Since 1.301 > 1.279 → first number is bigger

---------------------------------------------------

3. Handling Floating-Point Precision

- Floating-point arithmetic may introduce tiny errors.
- Two numbers that are effectively equal may differ by a very small decimal.
- So we define a small epsilon, eps = 1e-7:
    - If |x - y| <= eps → treat numbers as equal
    - Otherwise, compare directly

---------------------------------------------------

4. Comparing the Numbers

- If Math.abs(x - y) <= eps → =
- If x > y → >
- Else → <

This approach avoids dealing with huge numbers explicitly,
works efficiently, and handles very large values of x and p.

---------------------------------------------------

✅ Summary

Key idea:
- Instead of comparing x * 10^p directly, compare log10(x * 10^p) = log10(x) + p
- This reduces a huge number comparison problem to a simple floating-point comparison
*/









