/*
Problem:
---------
HQ9+ is a joke programming language with 4 instructions:

  'H' - prints "Hello, World!"
  'Q' - prints the source code of the program itself
  '9' - prints the "99 Bottles of Beer" song lyrics
  '+' - increments an internal counter (no output)

Any other characters are ignored.

You are given a program string p.
Your task: Determine if running the program produces any output.

Output:
--------
Print "YES" if the program produces output (contains 'H', 'Q', or '9'),
otherwise print "NO".

Examples:
---------

Example 1:
Input: "Hi!"
- Contains 'H' → prints "Hello, World!"
Output: YES

Example 2:
Input: "Codeforces"
- No 'H', 'Q', or '9'
- No output produced
Output: NO
*/



const prompt = require('prompt-sync')();

const program = prompt();

// Check if program contains any output-producing instructions
// 'H', 'Q', or '9' produce output
const producesOutput = [...program].some(char => char === 'H' || char === 'Q' || char === '9');

// Print "YES" if output will be produced, else "NO"
console.log(producesOutput ? "YES" : "NO");