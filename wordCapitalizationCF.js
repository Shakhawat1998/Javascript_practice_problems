// You are given a word. Your task is to make the first letter uppercase, and leave the rest of the letters exactly as they are.

// Input:
// A single word with only English letters (uppercase or lowercase).
// The word is non-empty and has at most 103 characters.

// Output:
// Print the word after changing just the first letter to uppercase.

// Examples:
// Input:
// ApPLe
// Output:
// ApPLe

// Input:
// konjac
// Output:
// Konjac

/// Take input
let s = prompt("Enter a word:");

// Capitalize the first character and keep the rest unchanged
let result = s[0].toUpperCase() + s.slice(1);

// Print result
console.log(result);
