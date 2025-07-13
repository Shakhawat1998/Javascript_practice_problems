// You are given an array of n positive integers.

// Task:
// Find and print an element from the array such that all other 
// elements in the array are divisible by it.
// If no such element exists, print -1.

// If there are multiple valid answers, you may print any one of them.

// Input Format:

// The first line contains an integer n (1 ≤ n ≤ 10⁵), the size of the array.

// The second line contains n integers a₁, a₂, ..., aₙ (1 ≤ aᵢ ≤ 10⁹), 
// the array elements.

// Output Format:

// Print a single integer from the array that divides all 
// elements of the array.

// If no such element exists, print -1.


// Input:
// 3
// 2 2 4
// Output:
// 2

// Input:
// 5
// 2 1 3 1 6
// Output:
// 1

// Input:
// 3
// 2 3 5
// Output:
// -1


const prompt = require('prompt-sync')();


function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

function findCommonDivisor(arr) {
  const m = findMin(arr);
  for (const num of arr) {
    if (num % m !== 0) {
      return -1;
    }
  }
  return m;
}

// // Example call:
// console.log(findCommonDivisor(4, [2, 2, 4, 8])); // Output: 2
const arr =[]

const n = parseInt(prompt(),10)
for(let i=0;i<n;i++){
    let k = parseInt(prompt(),10)
    arr.push(k)
}

console.log(findCommonDivisor(arr))