/*
Problem:
---------

https://codeforces.com/problemset/problem/405/A
There are n columns of toy cubes in a box, arranged in a line.
Each column i has a_i cubes stacked vertically.

Initially, gravity pulls cubes DOWN, so cubes stay in their columns.

When gravity switches to pull cubes RIGHT, cubes rearrange so that
all cubes "fall" to the right side, effectively sorting the columns
by their heights in ascending order.

Task:
Given the initial cubes count in each column, output the cubes count
after gravity switches (i.e., the sorted columns).

---

Example 1:
Input:
4
3 2 1 2

Visual before gravity switch (gravity DOWN):

Col 1   Col 2   Col 3   Col 4
###     ##      #       ##

(Heights: 3, 2, 1, 2)

Visual after gravity switch (gravity RIGHT):

Columns sorted ascending: 1 2 2 3

Col 1   Col 2   Col 3   Col 4
#       ##      ##      ###

(Heights: 1, 2, 2, 3)

Output:
1 2 2 3

---

Example 2:
Input:
3
2 3 8

Visual before gravity switch:

Col 1   Col 2   Col 3
##      ###     ########

Visual after gravity switch:

Columns already sorted ascending, so no change.

Output:
2 3 8
*/



const prompt = require('prompt-sync')();

const n = Number(prompt());
const columns = prompt().split(' ').map(Number);

// Gravity switch to right means sorting the columns ascending
columns.sort((a, b) => a - b);

// Print the new configuration
console.log(columns.join(' '));