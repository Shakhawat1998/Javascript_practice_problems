// Given a string, return true if "bad" appears starting at 
// index 0 or 1 in the string, such as with "badxxx" or "xbadxx" 
// but not "xxbadxx". The string may be any length, including 0.
//  Note: use .equals() to compare 2 strings.


// hasBad("badxx") → true
// hasBad("xbadxx") → true
// hasBad("xxbadxx") → false

function hasBad(str) {
// Check length first (need at least 3 chars starting at 0 or 1)
  if (str.length < 3) return false;
  // Check starting at index 0 or 1
  return str.substring(0, 3) === "bad" || str.substring(1, 4) === "bad";
}


console.log(hasBad("badxx"));    // true
console.log(hasBad("xbadxx"));   // true
console.log(hasBad("xxbadxx"));  // false
console.log(hasBad("ba"));       // false
console.log(hasBad("bady"));     // true
