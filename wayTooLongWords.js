// You are given a list of words. If a word is longer than 10 characters, shorten it using the following rule:

// Keep the first letter

// Count how many letters are between the first and last letter

// Add the last letter

// For example:

// "localization" → "l10n" (because there are 10 letters between 'l' and 'n')

// "word" → stays "word" (since it’s not longer than 10)

// 📥 Input
// The first line contains an integer n (1 ≤ n ≤ 100) — the number of words.

// The next n lines each contain one word made of lowercase English letters.
// Each word's length is between 1 and 100.

// 📤 Output
// Print n lines — each line is either the original word (if it's 10 characters or less), or its shortened form.


//Input
// 4
// word
// localization
// internationalization
// pneumonoultramicroscopicsilicovolcanoconiosis

// output
// word
// l10n
// i18n
// p43s

const prompt = require('prompt-sync')();
const n = parseInt(prompt());
for (let i = 0; i < n; i++) {
    let word = prompt();
    if (word.length > 10) {
        console.log(word[0] + (word.length - 2) + word[word.length - 1]);
    } else {
        console.log(word);
    }
}



