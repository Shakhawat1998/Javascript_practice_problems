// Polycarp hides three positive integers: a, b, and c.

// Instead of telling you the values directly, he writes four numbers on the board — in random order:

// a + b

// a + c

// b + c

// a + b + c

// ✅ Your Task:
// Given these 4 numbers, find any valid values of a, b, and c that match the board values.

// 📝 You can print them in any order.

// 🧠 Key Idea:
// // The largest number will always be a + b + c, because it's the sum of all 3.

// The remaining 3 numbers are: a + b, a + c, b + c

// So, if you:

// Sort the array → last number is total = a + b + c

// Then:

// a = total - (b + c)

// b = total - (a + c)

// c = total - (a + b)

// But there's an easier trick:

// Let’s call the sorted numbers: x, y, z, sum
// Then:

// a = sum - z

// b = sum - y

// c = sum - x

// 🔍 Examples Explained:
// Example 1:
// Input: 3 6 5 4
// Sort: [3, 4, 5, 6] → sum = 6
// Then:

// a = 6 - 5 = 1

// b = 6 - 4 = 2

// c = 6 - 3 = 3

// ✅ Output: 1 2 3 (or any order)

// Example 2:
// Input: 40 40 40 60
// Sort: [40, 40, 40, 60] → sum = 60
// Then:

// a = 60 - 40 = 20

// b = 60 - 40 = 20

// c = 60 - 40 = 20

// ✅ Output: 20 20 20

// Example 3:
// Input: 201 101 101 200
// Sort: [101, 101, 200, 201] → sum = 201
// Then:

// a = 201 - 200 = 1

// b = 201 - 101 = 100

// c = 201 - 101 = 100

// ✅ Output: 1 100 100





const prompt = require('prompt-sync')();

// Read 4 space-separated numbers from input
let nums = prompt("Enter 4 numbers: ").split(' ').map(Number);

// Sort the numbers in ascending order
nums.sort((a, b) => a - b);

// The largest number is the sum of all three: a + b + c
let total = nums[3];

// The other three are: a + b, a + c, b + c
// We can find a, b, c by subtracting the others from the total
let a = total - nums[2];
let b = total - nums[1];
let c = total - nums[0];

// Output the three numbers in any order
console.log(a, b, c);
