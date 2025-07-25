// We have an array of heights, representing the altitude along a
//  walking trail. Given start/end indexes into the array, return
//   the sum of the changes for a walk beginning at the start index 
//   and ending at the end index. For example, with the heights
//    {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1 + 5 = 6.
//     The start end end index will both be valid indexes into the 
//     array with start <= end.


// sumHeights([5, 3, 6, 7, 2], 2, 4) → 6
// sumHeights([5, 3, 6, 7, 2], 0, 1) → 2
// sumHeights([5, 3, 6, 7, 2], 0, 4) → 11



function sumHeights(heights, start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += Math.abs(heights[i + 1] - heights[i]);
  }
  return sum;
}

// Tests
console.log(sumHeights([5, 3, 6, 7, 2], 2, 4)); // → 6
console.log(sumHeights([5, 3, 6, 7, 2], 0, 1)); // → 2
console.log(sumHeights([5, 3, 6, 7, 2], 0, 4)); // → 11


//  Explanation:
// We loop from start to end - 1.

// For each step, calculate the absolute difference between 
// the current height and the next.

// Sum up all those differences and return the result.

