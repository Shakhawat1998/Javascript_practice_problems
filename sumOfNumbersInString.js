const input = "a1b2@#$$%@A324";

let sum = 0;
let currentNumber = "";

for (let i = 0; i < input.length; i++) {
  let char = input[i];

  if (char >= '0' && char <= '9') {
    currentNumber += char; // build the number
  } else {
    if (currentNumber !== "") {
      sum += parseInt(currentNumber); // convert and add
      currentNumber = ""; // reset for next number
    }
  }
}

// In case string ends with a number
if (currentNumber !== "") {
  sum += parseInt(currentNumber);
}

console.log("Sum of numbers:", sum);