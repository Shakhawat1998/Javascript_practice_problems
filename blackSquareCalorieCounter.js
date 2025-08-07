// Problem: Calculate total calories burned in a mobile game called "Black Square".
//
// Game Setup:
// - The phone screen has 4 vertical strips.
// - If a black square appears on strip i (i = 1 to 4), touching it costs ai calories.
// - You're given:
//   1. 4 integers a1, a2, a3, a4 → calories needed for strip 1 to 4.
//   2. A string `s` representing the game process.
//      Each character in `s` is '1', '2', '3', or '4', indicating which strip the square appeared on at that second.
//
// Task:
// - For each character in the string `s`, add the corresponding calorie cost from a1–a4.
// - Print the total calorie cost.
//
// --------------------------
// Example 1:
// Input:
//   a = [1, 2, 3, 4]
//   s = "123214"
//
// Steps:
//   '1' → a1 = 1
//   '2' → a2 = 2
//   '3' → a3 = 3
//   '2' → a2 = 2
//   '1' → a1 = 1
//   '4' → a4 = 4
//
// Total = 1 + 2 + 3 + 2 + 1 + 4 = 13
// Output: 13
//
// --------------------------
// Example 2:
// Input:
//   a = [1, 5, 3, 2]
//   s = "11221"
//
// Steps:
//   '1' → a1 = 1
//   '1' → a1 = 1
//   '2' → a2 = 5
//   '2' → a2 = 5
//   '1' → a1 = 1
//
// Total = 1 + 1 + 5 + 5 + 1 = 13
// Output: 13


// Require prompt-sync for input handling
const prompt = require('prompt-sync')();

// Take input for calories for strips 1 to 4
// Example input: 1 2 3 4
const calorieInput = prompt().split(' ').map(Number);

// Take input for the game string
// Example input: 123214
const s = prompt("Enter the game string: ");

// Store the calorie values in an array
const calories = calorieInput;

// Initialize total calories to 0
let totalCalories = 0;

// Loop through each character in the string
for (let i = 0; i < s.length; i++) {
    const stripIndex = parseInt(s[i]) - 1; // Convert char to index (0-based)
    totalCalories += calories[stripIndex]; // Add corresponding calorie
}

// Output the total calories burned
console.log("Total calories wasted:", totalCalories);
