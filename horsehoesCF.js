// // Valera wants to go to a party wearing 4 horseshoes, and there's one rule:

// // All 4 horseshoes must be of different colors.

// // Valera already has 4 horseshoes, but some of them might have the same color.
// // He needs to buy extra horseshoes only if there are duplicates, so that all 4 are unique in color.

// // Your task is to figure out how many more horseshoes Valera needs to buy so that he ends up with 4 horseshoes of different colors.

// // 🧾 Input
// // Four integers: s1 s2 s3 s4 — the colors of Valera’s current 4 horseshoes.

// // Each color is represented by an integer (e.g., 3 means color number 3).

// // All numbers are between 1 and 10⁹.

// // 🖨 Output
// // Print one number — the minimum number of horseshoes Valera needs to buy so that he has 4 different colors.



// //input
// 1 7 3 3
// Explanation:
// Valera has colors: 1, 7, 3, and 3
// → 3 is repeated, so only 3 unique colors: 1, 3, 7

// He needs 1 more unique color to make the total 4 different.
// //output
// 1

// //input
// 7 7 7 7
// Explanation:
// Valera has all horseshoes of the same color: 7

// Only 1 unique color → needs 3 more different ones.
// //output
// 3


// minimumToBuy = 4 - numberOfUniqueColors


// Read input from the user (uncomment if using Node.js)
 const prompt = require('prompt-sync')();

// Step 1: Read the 4 horseshoe colors as space-separated values
let input = prompt(); // e.g., "1 7 3 3"

// Step 2: Split the input string and convert each item to an integer
let a = input.split(' ').map(Number); // Converts to [1, 7, 3, 3]

// Step 3: Sort the array so duplicate colors are next to each other
a.sort((x, y) => x - y); // After sorting: [1, 3, 3, 7]

// Step 4: Initialize a counter for duplicates
let colorsToBuy = 0;

// Step 5: Loop through the sorted array and count duplicates
for (let i = 1; i < 4; i++) {
    if (a[i] === a[i - 1]) {
        colorsToBuy++; // Count if current color is the same as previous
    }
}

// Step 6: Print the result
console.log(colorsToBuy);


