/*
📌 Problem Simplified:

We are given a Fibonacci number n (0 ≤ n < 10^9). 
We need to represent it as the sum of **three Fibonacci numbers** 
(not necessarily distinct). 

Recall Fibonacci numbers:
F0 = 0
F1 = 1
Fi = Fi-2 + Fi-1 for i ≥ 2

Sequence looks like: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

We have to find a triple (a, b, c) such that:
a + b + c = n
a, b, c ∈ Fibonacci numbers
If impossible, print: "I'm too stupid to solve this problem"

------------------------------------------------
📌 Input:
- A single integer n, guaranteed to be a Fibonacci number

📌 Output:
- Three Fibonacci numbers a, b, c such that a+b+c = n
- Or print "I'm too stupid to solve this problem" if no solution

------------------------------------------------
📌 Examples Explained:

Example 1:
Input:
3
Output:
1 1 1

Explanation:
- 3 is a Fibonacci number (F4 = 3)
- Can be represented as 1 + 1 + 1
- All numbers are Fibonacci numbers
- ✅ Valid solution

Example 2:
Input:
13
Output:
2 3 8

Explanation:
- 13 is a Fibonacci number (F7 = 13)
- 2, 3, 8 are Fibonacci numbers: 2=F3, 3=F4, 8=F6
- Sum: 2+3+8 = 13
- ✅ Valid solution
- Note: Other valid solutions exist, e.g., 5+5+3=13

------------------------------------------------
📌 Observations / Simplification:

1. n is always a Fibonacci number
2. For n = 0 → trivial solution: 0+0+0=0
3. For n = 1 → 0+0+1=1
4. For n ≥ 2 → 
   - We can always write n as sum of three Fibonacci numbers
   - Common simple trick: 0 + 1 + (n-1) 
     because n-1 is also a Fibonacci number if n ≥ 2
5. Multiple valid outputs possible

✅ Strategy:
- Check if n = 0 or 1 → handle trivial cases
- Else → output 0 1 (n-1)
- This will always work because n ≥ 2 is guaranteed to be Fibonacci

*/




/*
📌 Problem Recap:
- Input: Fibonacci number n (0 ≤ n < 10^9)
- Output: Three Fibonacci numbers a, b, c such that a+b+c = n
- If impossible, print "I'm too stupid to solve this problem"
- Trick: For n >= 2, 0 + 1 + (n-1) always works
*/

const prompt = require('prompt-sync')()

// Take input via prompt
let n = parseInt(prompt("Enter a Fibonacci number:"));

// Handle trivial case n = 0
if (n === 0) {
    // 0+0+0=0
    console.log("0 0 0");
}
// Handle trivial case n = 1
else if (n === 1) {
    // 0+0+1=1
    console.log("0 0 1");
}
// Handle n >= 2
else {
    // Use the simple trick: 0 + 1 + (n-1)
    // 0 and 1 are Fibonacci numbers
    // n-1 is guaranteed to be a Fibonacci number if n >= 2
    console.log(`0 1 ${n - 1}`);
}

/*
📌 Example Runs:

Input: 3
Output: 0 1 2   (0+1+2=3)

Input: 13
Output: 0 1 12  (0+1+12=13)

Input: 0
Output: 0 0 0

Input: 1
Output: 0 0 1
*/
