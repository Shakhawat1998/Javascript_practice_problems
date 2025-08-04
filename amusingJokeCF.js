// After a holiday party, Santa and his guest find a pile of letters scattered at the door. These letters originally came from:

// The guest's name

// The host's name

// Now they want to check:

// Can the pile of letters be exactly rearranged to form the guest's name + host's NAME — no letters missing or extra?

// ✅ What You Need To Do:
// You're given three strings:

// Line 1 → guest name

// Line 2 → host name

// Line 3 → pile of letters found in the morning

// Your task is to:

// Combine the guest and host names

// Sort or count letters in the combined name and in the pile

// Check if both have the exact same letters (same frequency, no extras or missing)

// 📥 Input Format:
// Three lines:


// Line 1: GUESTNAME (only uppercase A–Z)
// Line 2: HOSTNAME
// Line 3: PILE (mixed-up letters)
// 📤 Output Format:
// Print:

// "YES" → if the pile can form both names

// "NO" → otherwise

// 💡 Logic:

// guest + host === sortedOrCountMatched(pile)
// 📚 Examples Explained:
// Example 1:

// Input:
// SANTACLAUS
// DEDMOROZ
// SANTAMOROZDEDCLAUS

// guest + host = SANTACLAUSDEDMOROZ

// pile = SANTAMOROZDEDCLAUS

// ✅ All letters match → YES
// Example 2:

// Input:
// PAPAINOEL
// JOULUPUKKI
// JOULNAPAOILELUPUKKI

// guest + host = PAPAINOELJOULUPUKKI

// pile = JOULNAPAOILELUPUKKI

// ❌ Missing one "P", and one extra "L" → NO
// Example 3:

// Input:
// BABBONATALE
// FATHERCHRISTMAS
// BABCHRISTMASBONATALLEFATHER

// guest + host = BABBONATALEFATHERCHRISTMAS

// pile = BABCHRISTMASBONATALLEFATHER

// ❌ One extra "L" → NO



// Import prompt-sync
const prompt = require('prompt-sync')();

// Read the three input lines
const guest = prompt('Enter guest name: ').trim();
const host = prompt('Enter host name: ').trim();
const pile = prompt('Enter pile of letters: ').trim();

// Step 1: Combine guest and host names
const combined = guest + host;

// Step 2: Sort both strings
const sortedCombined = combined.split('').sort().join('');
const sortedPile = pile.split('').sort().join('');

// Step 3: Compare the sorted results
if (sortedCombined === sortedPile) {
  console.log("YES");
} else {
  console.log("NO");
}
