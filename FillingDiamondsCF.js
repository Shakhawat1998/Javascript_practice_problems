/*

Problem: Covering a Belt-Like Area with Diamond Shapes

https://codeforces.com/problemset/problem/1339/A

You have an integer n.

The belt-like area consists of (4n - 2) small triangles.

You want to cover this entire area with diamond shapes.

Each diamond shape covers exactly 2 triangles.

You can move, rotate, or flip the diamond shapes but cannot scale them.

Two coverings are considered different if there exists at least one pair of triangles covered by the same diamond in one covering and covered by different diamonds in the other.

Goal:

Calculate how many different ways there are to fully cover the belt-like area of (4n - 2) triangles using diamond shapes.

Input:

t: number of test cases

Then t lines follow, each with an integer n.

Output:

For each test case, output the number of ways to cover the belt.

Constraints:

1 ≤ t ≤ 10^4

1 ≤ n ≤ 10^9

The number of ways fits in 64-bit integer (≤ 10^18).

Examples:

Input:
2
2
1

Output:
2
1

Explanation:

For n=1, there is only 1 way to cover the area.

For n=2, there are 2 different ways to cover the area.

Summary:

The problem is about counting tilings of a belt-like shape of size (4n - 2) triangles with diamond shapes (each covering 2 triangles).

For given n, find how many distinct full coverings exist.

The answer is known to fit in 64-bit integer.
*/


// Read input from console
const prompt = require('prompt-sync')();

const t = parseInt(prompt());  // Number of test cases

for (let i = 0; i < t; i++) {
    const n = parseInt(prompt());  // Read integer n

    console.log(n)

}




