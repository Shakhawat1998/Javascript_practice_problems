
// Given 3 int values, a b c, return their sum. However, 
// if one of the values is 13 then it does not count towards 
// the sum and values to its right do not count. So for example, 
// if b is 13, then both b and c do not count.


// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1


function luckySum(a, b, c) {
  if (a === 13) {
    return 0;
  } else if (b === 13) {
    return a;
  } else if (c === 13) {
    return a + b;
  } else {
    return a + b + c;
  }
}

// Test cases
console.log(luckySum(1, 2, 3));     // 6
console.log(luckySum(1, 2, 13));    // 3
console.log(luckySum(1, 13, 3));    // 1
console.log(luckySum(13, 2, 3));    // 0
console.log(luckySum(13, 13, 13));  // 0
