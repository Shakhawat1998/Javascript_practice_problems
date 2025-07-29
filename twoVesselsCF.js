// // // // Problem: Equalize Water in Two Vessels
// // // // You have two vessels with water:

// // // // Vessel A contains a grams of water.

// // // // Vessel B contains b grams of water.

// // // // You also have a cup that can hold up to c grams of water.

// // // // In one move, you can:

// // // // Scoop up to c grams of water from one vessel, and

// // // // Pour it into the other vessel.

// // // // Your goal is to make the amount of water in both vessels equal, using as few moves as possible.

// // // // Input
// // // // The first line contains an integer t — number of test cases.

// // // // Each of the next t lines contains three integers: a, b, and c.

// // // // Output
// // // // For each test case, print the minimum number of moves needed to make the two vessels contain the same amount of water.

// // // //input
// // // 6
// // // 3 7 2
// // // 17 4 3
// // // 17 17 1
// // // 17 21 100
// // // 1 100 1
// // // 97 4 3

// // // //output
// // // 1
// // // 3
// // // 0
// // // 1
// // // 50
// // // 16


// // Note
// // In the first test case, only one move is enough: if we pour 2
// //  grams of water from the second vessel into the first one, both vessels will contain 5
// //  grams of water.

// // In the second example test case, three moves are enough:

// // Pour 3
// //  grams of water from the first vessel into the second one. After this move, the first vessel will contain 17−3=14
// //  grams of water, and the second vessel will contain 4+3=7
// //  grams.
// // Pour 2
// //  grams of water from the first vessel into the second one. After this move, the first vessel will contain 14−2=12
// //  grams of water, and the second vessel will contain 7+2=9
// //  grams.
// // Finally, pour 1.5
// //  grams of water from the first vessel into the second one. After this move, the first vessel will contain 12−1.5=10.5
// //  grams of water, and the second vessel will contain 9+1.5=10.5
// //  grams.
// // Note that this is not the only way to equalize the vessels in 3
// //  moves, but there is no way to do it in 2
// //  moves.

// // In the third example test case, the vessels initially contain the same amount of water, so no moves are needed. The answer is 0
// // .


// You have:

// Two vessels: one with a grams, one with b grams of water.

// A cup of capacity c.

// Let’s define:

// d = a - b = the difference in water between the two vessels.

// Our goal: make d = 0 (i.e., equal water in both vessels).

// 🔄 What happens in a move?
// In one move, you:

// Scoop at most c grams of water from one vessel.

// Pour it into the other vessel.

// Let’s go through both possible directions:

// Case 1: Pour from vessel A to vessel B
// You take x grams (where x ≤ c) from A and pour it into B.

// Now:

// A loses x → becomes a - x

// B gains x → becomes b + x

// So new difference becomes:

// (
// 𝑎
// −
// 𝑥
// )
// −
// (
// 𝑏
// +
// 𝑥
// )
// =
// 𝑎
// −
// 𝑏
// −
// 2
// 𝑥
// =
// 𝑑
// −
// 2
// 𝑥
// (a−x)−(b+x)=a−b−2x=d−2x
// So d decreases by 2x.

// ✅ This move reduces d by up to 2c.

// Case 2: Pour from vessel B to vessel A
// You take x grams (where x ≤ c) from B and pour it into A.

// Now:

// B loses x → becomes b - x

// A gains x → becomes a + x

// So new difference becomes:

// (
// 𝑎
// +
// 𝑥
// )
// −
// (
// 𝑏
// −
// 𝑥
// )
// =
// 𝑎
// −
// 𝑏
// +
// 2
// 𝑥
// =
// 𝑑
// +
// 2
// 𝑥
// (a+x)−(b−x)=a−b+2x=d+2x
// So d increases by 2x.

// ✅ This move increases d by up to 2c.

// 📌 What does this mean?
// In one move, you can change d by any amount in the range:

// [
// −
// 2
// 𝑐
// ,
// +
// 2
// 𝑐
// ]
// [−2c,+2c]
// In particular, if your goal is to make |d| = 0, the best case is to reduce d by the maximum allowed, which is 2c per move.

// 📉 So how fast can you reach 0?
// You can reduce |d| by at most 2c per move.

// So total moves required is:

//ceil(abs(d)/2c)
// That’s why the formula works.

// ✅ Example to visualize
// Let’s say:

// a = 20, b = 10, c = 5

// Then d = 10

// You can:

// Pour 5 grams from A to B → A = 15, B = 15 → d = 0

// Change in d = -2 * 5 = -10

// ✅ Done in 1 move!

// But if c = 2, each move reduces d by 2 * 2 = 4, so:

// First move: d = 10 → 6

// Second move: d = 6 → 2

// Third move: d = 2 → 0

// ✅ Takes 3 moves.
const prompt = require("prompt-sync")();

const t = parseInt(prompt("Enter number of test cases: "));
for (let i = 0; i < t; i++) {
    const [a, b, c] = prompt("Enter a b c: ").split(" ").map(Number);
    const diff = Math.abs(a - b);
    const moves = Math.ceil(diff / (2 * c));
    console.log(moves);
}
