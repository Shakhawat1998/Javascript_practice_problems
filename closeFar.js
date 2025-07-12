
// Given three ints, a b c, return true if
//  one of b or c is "close" (differing from a
//      by at most 1), while the other is "far", 
//      differing from both other values by 2 or more.
//      Note: Math.abs(num) computes the absolute value of a number.


// closeFar(1, 2, 10) → true
// closeFar(1, 2, 3) → false
// closeFar(4, 1, 3) → true


function closeFar(a, b, c) {
  function closeToA(x) {
    return Math.abs(a - x) <= 1;
  }

  function farFrom(x, y) {
    return Math.abs(x - y) >= 2;
  }

  if (closeToA(b) && farFrom(c, a) && farFrom(c, b)) {
    return true;
  }

  if (closeToA(c) && farFrom(b, a) && farFrom(b, c)) {
    return true;
  }

  return false;
}

// Test cases
console.log(closeFar(1, 2, 10)); // true
console.log(closeFar(1, 2, 3));  // false
console.log(closeFar(4, 1, 3));  // true
