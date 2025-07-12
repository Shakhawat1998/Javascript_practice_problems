
// Given a string and an int n, return a string made of the
//  first and last n chars from the string. The string length will be at least n.


// nTwice("Hello", 2) → "Helo"
// nTwice("Chocolate", 3) → "Choate"
// nTwice("Chocolate", 1) → "Ce"


function nTwice(str, n) {
  let result = "";

  // Add first n characters
  for (let i = 0; i < n; i++) {
    result += str[i];
  }

  // Add last n characters
  for (let i = str.length - n; i < str.length; i++) {
    result += str[i];
  }

  return result;
}

// Test cases
console.log(nTwice("Hello", 2));       // "Helo"
console.log(nTwice("Chocolate", 3));   // "Choate"
console.log(nTwice("Chocolate", 1));   // "Ce"
