function toggleCase(str) {
    let result = '';
    for (let char of str) {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            // Uppercase A-Z → convert to lowercase
            result += String.fromCharCode(code + 32);
        } else if (code >= 97 && code <= 122) {
            // Lowercase a-z → convert to uppercase
            result += String.fromCharCode(code - 32);
        } else {
            // Non-alphabetic character remains the same
            result += char;
        }
    }
    return result;
}

// Example
const input = "aBXcDeRDe";
console.log(toggleCase(input)); // Output: "AbxCdErdE"
