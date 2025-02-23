// CharacterRunLengthEncoderWithMap.js

function compressString(input) {
    let frequencyMap = {}; // To store character counts

    // Count occurrences of each character
    for (let char of input) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Create the compressed string
    let compressed = '';
    for (let char in frequencyMap) {
        compressed += frequencyMap[char] + char;
    }

    return compressed;
}

console.log(compressString("aaabbccca"));  // Output: 4a2b3c
