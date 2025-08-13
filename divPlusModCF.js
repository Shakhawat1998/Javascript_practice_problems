/*
PROBLEM (Simplified):

Given a function:
   f_a(x) = floor(x / a) + (x mod a)

- 'a' is a fixed integer.
- 'x' is any integer between l and r (inclusive).
- floor(x / a) means integer division of x by a.
- x mod a is the remainder when x is divided by a.

Task:
For each test case, find the maximum value of f_a(x) for x in [l, r].

--------------------------------------------------
EXAMPLES:

Input:
5
1 4 3
5 8 4
6 10 6
1 1000000000 1000000000
10 12 8

Output:
2
4
5
999999999
5

--------------------------------------------------
EXPLANATION for first sample (l=1, r=4, a=3):

Calculate f_3(x) for x = 1, 2, 3, 4:

f_3(1) = floor(1/3) + 1 mod 3 = 0 + 1 = 1
f_3(2) = floor(2/3) + 2 mod 3 = 0 + 2 = 2
f_3(3) = floor(3/3) + 3 mod 3 = 1 + 0 = 1
f_3(4) = floor(4/3) + 4 mod 3 = 1 + 1 = 2

Maximum value in [1..4] is 2 (achieved at x=2 and x=4).

--------------------------------------------------
NOTES / INTUITION:

- floor(x / a) grows as x increases.
- x mod a ranges from 0 to a-1.
- To maximize f_a(x), try to get the maximum remainder (a-1), but that means x must be just before a multiple of a.
- So check:
  1) f_a(r), i.e., at the right boundary.
  2) f_a at the number just before the next multiple of 'a' <= r, but >= l.
- The maximum of these two values will be the answer.
*/



// Intuition:
// f_a(x) = floor(x/a) + (x mod a).
// To maximize f_a(x) in [l, r], we consider:
// 1) The value at r itself: f_a(r).
// 2) The value at the number just before the largest multiple of 'a' <= r.
//    Because (x mod a) is max when x mod a = a-1, i.e., x is just before multiple of a.
// We pick the maximum of these two values, but only if that "just before" number is >= l.

const prompt = require("prompt-sync")();

const t = parseInt(prompt()); // number of test cases

for(let i=0; i<t; i++){
    let [l,r,a] = prompt().split(" ").map(Number);
    
    // Calculate f_a at r
    const valAtR = Math.floor(r / a) + (r % a);

    // Find the largest multiple of a <= r
    let x = Math.floor(r / a) * a - 1; 

    // Check if x is inside [l, r]
    let valAtX = -1;
    if(x >= l){
        valAtX = Math.floor(x / a) + (x % a);
    }

    // Print max of the two candidates
    console.log(Math.max(valAtR, valAtX));
}
