// // You're given a username made up of lowercase 
// // English letters.
// // To guess the user's gender:

// // Count how many different letters appear in 
// // the username.

// // If the number of different letters is even, print:
// // 👉 "CHAT WITH HER!" (female)

// // If the number is odd, print:
// // // 👉 "IGNORE HIM!" (male)
// input
// wjmzbmr

// ----
// Distinct letters = w, j, m, z, b, r → total = 6 (even)

// output
// CHAT WITH HER!


// input 
// xiaodao

// output
// IGNORE HIM!




const prompt = require('prompt-sync')();

let username = prompt(); // Read the username string

let uniqueChars = new Set(); // Create a Set to store distinct characters

// Insert each character into the Set
for (let i = 0; i < username.length; i++) {
  uniqueChars.add(username[i]);
}

// Check if the number of distinct chars is even or odd and print accordingly
if (uniqueChars.size % 2 === 0) {
  console.log("CHAT WITH HER!");
} else {
  console.log("IGNORE HIM!");
}


