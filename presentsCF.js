// // Petya invited n friends to a New Year party. Each friend gave exactly one gift to another friend (possibly to themselves).

// // You are given a list showing who each friend gave a gift to. Your task is to find, for each friend, who gave a gift to them.

// // Input:
// // First line: integer n — number of friends.

// // Second line: n integers — the i-th integer is the friend number that friend i gave a gift to.

// // Output:
// // Print n integers: the i-th integer should be the friend who gave a gift to friend i.

// // Explanation:
// // If friend i gave a gift to friend p[i], then friend p[i] received a gift from friend i.

// // You need to invert this mapping.




// Input:
// 4
// 2 3 4 1

// Output:
// 4 1 2 3

// Explanation:

// Friend 1 gave a gift to friend 2 → friend 2 received gift from friend 1

// Friend 2 gave a gift to friend 3 → friend 3 received gift from friend 2

// Friend 3 gave a gift to friend 4 → friend 4 received gift from friend 3

// Friend 4 gave a gift to friend 1 → friend 1 received gift from friend 4


// Input:
// 3
// 1 3 2

// Output:
// 1 3 2


// Explanation:

// Friend 1 gave to 1 → friend 1 received from 1 (self)

// Friend 2 gave to 3 → friend 3 received from 2

// Friend 3 gave to 2 → friend 2 received from 3


// Input:
// 2
// 1 2

// Output:
// 1 2


// Explanation:

// Friend 1 gave to 1 → friend 1 received from 1 (self)

// Friend 2 gave to 2 → friend 2 received from 2 (self)



const prompt = require('prompt-sync')();

const n = parseInt(prompt("Enter number of friends:"));
const a = new Array(n + 1); // Array to store who gave gift to friend i (1-based indexing)

for (let i = 1; i <= n; i++) {
    // Read the friend number to whom friend i gave a gift
    let gift = parseInt(prompt(`Friend ${i} gave a gift to:`));
    
    // Store the giver (i) at position 'gift' in array 'a'
    a[gift] = i;
}

// Print out for each friend i, who gave them a gift
let result = [];
for (let i = 1; i <= n; i++) {
    result.push(a[i]);
}

console.log(result.join(' '));
