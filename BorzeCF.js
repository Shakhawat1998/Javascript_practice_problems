// Borze Code Decoder
//
// In Berland, ternary numbers (digits 0, 1, 2) are written using Borze code:
//   0 → "."
//   1 → "-."
//   2 → "--"
//
// You're given a valid Borze string (made of "." and "-").
// Decode it into the original ternary number.
//
// Examples:
// Input: ".-.--"      → Output: "012"
// Input: "--."        → Output: "20"
// Input: "-..-.--"    → Output: "1012"
//
// Rules:
// - Read the string left to right.
// - "."       → "0"
// - "-."      → "1"
// - "--"      → "2"
// - Always check two characters if current is "-"


// Borze Code Decoder
// 0 → "."       | 1 → "-."       | 2 → "--"

const prompt = require('prompt-sync')();
const borze = prompt("Enter Borze code: "); // e.g. .-.--

// Initialize result string
let result = "";

// Loop through the string
for (let i = 0; i < borze.length; ) {
    if (borze[i] === ".") {
        // Single dot means 0
        result += "0";
        i += 1;
    } else if (borze[i] === "-" && borze[i + 1] === ".") {
        // "-." means 1
        result += "1";
        i += 2;
    } else if (borze[i] === "-" && borze[i + 1] === "-") {
        // "--" means 2
        result += "2";
        i += 2;
    }
}

console.log(result); // Print the decoded ternary number
