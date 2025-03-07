const input = "Guru100paaji70HAPPY30";
let output = "";

for (let char of input) {
    if (!(char >= '0' && char <= '9')) { // Checks if the character is NOT a digit
        output += char;
    }
}

console.log("Output is:", output);
