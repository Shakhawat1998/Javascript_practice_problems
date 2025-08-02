// // // Limak and Bob are two bears.

// // // Limak’s current weight is a.

// // // Bob’s current weight is b.
// // // (It's guaranteed that 1 ≤ a ≤ b ≤ 10)

// // // Every year:

// // // Limak's weight becomes 3 times heavier (×3)

// // // Bob's weight becomes 2 times heavier (×2)

// // // Task:
// // // Find the number of full years it will take for Limak to become strictly heavier than Bob.



// // Two integers: a b
// // Where:

// // a = Limak's starting weight

// // b = Bob's starting weight

// // 🟩 Output Format:
// // One integer — number of years after which Limak becomes heavier than Bob.



// //input
// 4 7
// //output
// 2

// Explanation:

// Year 0: Limak = 4, Bob = 7

// Year 1: Limak = 4 × 3 = 12, Bob = 7 × 2 = 14

// Year 2: Limak = 12 × 3 = 36, Bob = 14 × 2 = 28

// Now Limak (36) > Bob (28) → ✅

// //input 
// 4 9
// //output
// 3


// Explanation:

// Year 0: Limak = 4, Bob = 9

// Year 1: Limak = 12, Bob = 18

// Year 2: Limak = 36, Bob = 36

// Year 3: Limak = 108, Bob = 72

// Now Limak > Bob → ✅


// //input 
// 1 1
// //output
// 1


// Explanation:

// Year 0: Limak = 1, Bob = 1

// Year 1: Limak = 3, Bob = 2

// Now Limak > Bob → ✅



const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter Limak's weight (a): "));
let b = parseInt(prompt("Enter Bob's weight (b): "));

let years = 0;

while (a <= b) {
    a *= 3;
    b *= 2;
    years++;
}

console.log(years);


// 🔍 How it works:
// Reads two integers a and b from user input.

// Each year:

// Limak’s weight is multiplied by 3.

// Bob’s weight is multiplied by 2.

// years counter increases.

// Loop continues until Limak becomes heavier than Bob.

// Finally, it prints how many years it took.
