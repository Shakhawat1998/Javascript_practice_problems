/*
Problem:
--------
Brain took photos represented by an n×m matrix where each element is a pixel color.

Colors can be:
- 'C' (cyan)
- 'M' (magenta)
- 'Y' (yellow)
- 'W' (white)
- 'G' (grey)
- 'B' (black)

We need to determine if the photo is black-and-white or colored.

Rules:
- If the photo contains only 'W', 'G', and 'B', it's black-and-white.
- If it contains any 'C', 'M', or 'Y', it's colored.

Input:
------
- First line: two integers n and m (rows and columns of the photo).
- Next n lines: each contains m characters separated by spaces representing pixel colors.

Output:
-------
- Print "#Black&White" if the photo is black-and-white.
- Print "#Color" if the photo is colored.

Example 1:
Input:
2 2
C M
Y Y

Explanation:
Contains 'C' and 'M' and 'Y' which are colored pixels.
Output:

*/


const prompt = require('prompt-sync')();

const [n, m] = prompt().split(' ').map(Number);

let isColored = false;

for (let i = 0; i < n; i++) {
    const row = prompt().split(' ');
    for (const pixel of row) {
        if (pixel === 'C' || pixel === 'M' || pixel === 'Y') {
            isColored = true;
            break;
        }
    }
    if (isColored) break;
}

console.log(isColored ? "#Color" : "#Black&White");
