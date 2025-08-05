// A group of n friends wants to make toasts together. For each toast (where every friend drinks once), they need:

// A bit of drink

// A slice of lime

// Some salt

// They want to find out how many full toasts per person they can make with what they have.

// 📥 Input Format:
// You are given one line of numbers:

// bash
// Copy
// Edit
// n k l c d p nl np
// Here's what each value means:

// Variable	Meaning
// n	Number of friends
// k	Number of bottles of drink
// l	Each bottle has l ml drink
// c	Number of limes
// d	Each lime can be cut into d slices
// p	Total grams of salt
// nl	Each friend needs nl ml drink per toast
// np	Each friend needs np grams of salt per toast

// 🧠 How to Solve It:
// We need to find out how many full rounds (toasts) they can do such that everyone can participate equally in each round.

// Let’s calculate how many toasts they can make based on each resource:

// 🥤 1. Drink
// Total drink available = k * l (bottles × ml per bottle)

// Each toast for all friends needs = n * nl ml

// So, number of toasts possible from drink = floor((k*l)/(n*nl))


// 🍋 2. Lime Slices
// Total lime slices = c * d (limes × slices per lime)

// Each toast for all friends needs = n slices (1 per person)

// Toasts from lime = floor((c*d)/n)

// 🧂 3. Salt
// Total salt = p grams

// Each toast for all friends needs = n * np grams

// Toasts from salt = floor(p/(n*np))


// ✅ Final Answer:
// The number of toasts they can make is the minimum of the three above:

// text
// Copy
// Edit
// toastsPerPerson = min(drink_toasts, lime_toasts, salt_toasts)
// 🔍 Example Breakdown:
// Input:
// Copy
// Edit
// 3 4 5 10 8 100 3 1
// Step-by-step explanation:
// n = 3 friends

// k = 4 bottles

// l = 5 ml per bottle → total drink = 4 * 5 = 20 ml

// c = 10 limes

// d = 8 slices per lime → total slices = 10 * 8 = 80 slices

// p = 100 grams of salt

// nl = 3 ml needed per friend per toast

// np = 1 gram of salt per friend per toast

// 🍹 Drink:
// Total: 20 ml

// Needed per toast for 3 people = 3 * 3 = 9 ml

// Toasts from drink: 20 // 9 = 2

// 🍋 Lime:
// Total slices = 80

// Needed per toast: 3 slices

// Toasts from lime: 80 // 3 = 26

// 🧂 Salt:
// Total salt = 100 grams

// Needed per toast: 3 * 1 = 3 grams

// Toasts from salt: 100 // 3 = 33

// ✅ Result:
// Minimum of 2 (drink), 26 (lime), 33 (salt)
// → Final Answer: 2 toasts per person



const prompt = require('prompt-sync')();

// Read all input numbers from one line, split by space, and convert to integers
let [n, k, l, c, d, p, nl, np] = prompt("Enter n k l c d p nl np: ").split(' ').map(Number);

// Calculate total amount of drink in milliliters
const totalDrink = k * l;

// Calculate total number of lime slices
const totalSlices = c * d;

// Calculate how many toasts can be made based on the drink supply
// Each toast requires nl ml per friend, so total for all friends is n * nl
const drinkToasts = Math.floor(totalDrink / (n * nl));

// Calculate how many toasts can be made based on lime slices
// Each toast requires 1 slice per friend, so total slices divided by number of friends
const limeToasts = Math.floor(totalSlices / n);

// Calculate how many toasts can be made based on salt
// Each toast requires np grams per friend, so total for all friends is n * np
const saltToasts = Math.floor(p / (n * np));

// The final answer is the minimum number of toasts possible based on the limiting resource
const maxToasts = Math.min(drinkToasts, limeToasts, saltToasts);

// Output the result: how many toasts each friend can make
console.log(maxToasts);


