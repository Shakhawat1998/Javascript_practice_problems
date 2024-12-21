// Counting Character Frequencies:
// We use an array count[] to store the frequency of each character. 
// The index of the array corresponds to the character's ASCII value, and the
//  value at that index represents how many times that character appears in the string.
// Finding the First Non-Repeated Character:
// After counting the frequencies, we loop through the string again.
//  The first character with a frequency of 1 is the first non-repeated character, and we print it.

function firstNonRepeatedCharacter(str) {
    let count = new Array(256).fill(0); // Array to store character frequencies (for ASCII)

    // Count the frequency of each character
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        count[charCode]++;
    }

    // Find the first character with a frequency of 1
    for (let i = 0; i < str.length; i++) {
        if (count[str.charCodeAt(i)] === 1) {
            console.log("First non-repeated character: " + str[i]);
            return;
        }
    }

    console.log("No non-repeated character found.");
}

firstNonRepeatedCharacter("swiss"); 
