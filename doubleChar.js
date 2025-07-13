// Given a string, return a string where for every char in the original, there are two chars.


// doubleChar("The") → "TThhee"
// doubleChar("AAbb") → "AAAAbbbb"
// doubleChar("Hi-There") → "HHii--TThheerree"





function doubleChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

// Example calls:
console.log(doubleChar("The"));      // "TThhee"
console.log(doubleChar("AAbb"));     // "AAAAbbbb"
console.log(doubleChar("Hi-There")); // "HHii--TThheerree"
