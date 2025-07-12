// Given a string, if the string begins with "red" or "blue" 
// return that color string, otherwise return the empty string.


// seeColor("redxx") → "red"
// seeColor("xxred") → ""
// seeColor("blueTimes") → "blue"

function seeColor(str) {
  if (str.length >= 3 &&
      str[0] === 'r' && str[1] === 'e' && str[2] === 'd') {
    return "red";
  } else if (str.length >= 4 &&
             str[0] === 'b' && str[1] === 'l' && str[2] === 'u' && str[3] === 'e') {
    return "blue";
  } else {fdgg
    return "";
  }
}

// Test cases
console.log(seeColor("redxx"));       // "red"
console.log(seeColor("xxred"));       // ""
console.log(seeColor("blueTimes"));   // "blue"
console.log(seeColor("bluered"));     // "blue"
console.log(seeColor("green"));       // ""
