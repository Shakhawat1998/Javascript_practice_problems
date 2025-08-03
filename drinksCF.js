// // Little Vasya loves orange juice! All the drinks in his fridge contain some percentage of orange juice.

// // One day, Vasya wants to make a cocktail using equal amounts of each drink. Your task is to calculate how much orange 
// // juice (in percentage) will be in the final cocktail.

// // 🧩 Input
// // n — number of drinks (1 ≤ n ≤ 100)

// // p1, p2, ..., pn — the percentage of orange juice in each drink (0 ≤ pi ≤ 100)

// // ✅ Output
// // Print the average percentage of orange juice in the cocktail.
// // (Use at least 12 digits after the decimal to avoid precision errors.)

// //input

// 3
// 50 50 100

// //explanation 

// Drink 1 has 50% orange juice

// Drink 2 has 50% orange juice

// Drink 3 has 100% orange juice

// //average 
// (50 + 50 + 100) / 3 = 200 / 3 = 66.666666666667%
//  //output
//  66.666666666667


//  //input
// 4
// 0 25 50 75

// //explanation 

// Drink 1 has 0%

// Drink 2 has 25%

// Drink 3 has 50%

// Drink 4 has 75%


// //average
// (0 + 25 + 50 + 75) / 4 = 150 / 4 = 37.5%


// //output

// 37.500000000000


// 🧠 Goal
// Just find the average of all given percentages and print it with good precision.




// Read input from the user (uncomment below if running locally)
 const prompt = require('prompt-sync')();

// Step 1: Read the number of drinks
let n = parseInt(prompt()); 

// Step 2: Initialize total percentage sum to 0
let total = 0;

// Step 3: Loop through each drink
for (let i = 0; i < n; i++) {
    // Read the percentage of orange juice in current drink
    let percent = parseFloat(prompt()); 
    total += percent; // Add to total
}

// Step 4: Calculate the average percentage
let average = total / n;

// Step 5: Print the result with 12 digits after the decimal
console.log(average.toFixed(12));

