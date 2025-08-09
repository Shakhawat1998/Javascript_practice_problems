/*
Problem: Mole's Keyboard Shift

Mole types on a special keyboard arranged as:

Row 1: q w e r t y u i o p
Row 2: a s d f g h j k l ;
Row 3: z x c v b n m , . /

Sometimes, Mole's hands shift one position to the left or right.
This means each typed character is actually the neighbor key in that direction,
not the intended key.

Given:
- Direction of shift ('L' means Mole's hands moved left, so typed keys are right neighbors)
             ('R' means hands moved right, so typed keys are left neighbors)
- A typed sequence of characters (no spaces)

Output:
- The original message before the hand shift.

Example:
Input:
R
s;;upimrrfod;pbr

Explanation:
- Direction 'R' means typed chars are left neighbors of the original keys.
- So to find the original, shift each typed char one key to the right on the keyboard.

Output:
allyouneedislove
*/



const prompt = require('prompt-sync')();  // Import prompt-sync to read input

// Read the direction character ('L' or 'R') from input
const direction = prompt('Enter direction (L or R): ').trim();

// Read the typed string from Mole (no spaces)
const typed = prompt('Enter typed string: ').trim();

// The keyboard layout as a single string (all keys in order)
const keyboard = "qwertyuiopasdfghjkl;zxcvbnm,./";

let original = '';  // To store the decoded original message

// For each character typed by Mole
for (const ch of typed) {
    // Find the index of this typed char in the keyboard layout
    const idx = keyboard.indexOf(ch);

    // Calculate the index of the original char:
    // If direction is 'R', hands moved right, so typed char is left neighbor,
    // so original char is to the right (+1)
    // If direction is 'L', hands moved left, so typed char is right neighbor,
    // so original char is to the left (-1)
    const originalIdx = direction === 'R' ? idx + 1 : idx - 1;

    // Append the original character to the result string
    original += keyboard[originalIdx];
}

// Output the decoded original message
console.log(original);

