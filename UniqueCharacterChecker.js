// check if a string has all unique characters (no repeating letters)


function isIsomeric(str) {
    // Remove spaces (optional) and make the string lowercase for consistency
    str = str.replace(/\s+/g, '').toLowerCase();

    // Loop through the string and check if any character repeats
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false; // If a character repeats, return false
            }
        }
    }

    return true; // If no repeats were found, return true
}


console.log(isIsomeric("Background"));   // true
console.log(isIsomeric("Backstabbing")); // false
