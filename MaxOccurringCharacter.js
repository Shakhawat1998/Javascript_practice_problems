function maxOccurringCharacter() {
    const str = "programming";
    const charCount = {};

    // Count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the character with the maximum occurrence
    let maxChar = str[0];
    let maxCount = 0;

    for (const char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    console.log(maxChar);
}

maxOccurringCharacter();
