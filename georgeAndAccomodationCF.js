// // George and Alex want to live together in a room at the dorm.
// // Each room has:

// // p = how many people already live there

// // q = the room’s capacity

// // You’re given data for n rooms.
// // Your task is to count how many rooms have space for both George and Alex, i.e., at least 2 empty spots.

// // 🔢 Input Format
// // First line: n (number of rooms)

// // Next n lines: each line has two integers p and q

// // 🧾 Output
// // One number: how many rooms can fit both George and Alex

// Input:
// 3
// 1 1
// 2 2
// 3 3

// Output:
// 0

// Explanation:
// Room 1: 1/1 → Full

// Room 2: 2/2 → Full

// Room 3: 3/3 → Full
// ✅ No room has space for 2 more people → Answer: 0



// Input:
// 3
// 1 10
// 0 10
// 10 10

// Output:
// 2


// Explanation:
// Room 1: 1/10 → 9 spaces left → ✅

// Room 2: 0/10 → 10 spaces left → ✅

// Room 3: 10/10 → Full
// ✅ Two rooms can fit George and Alex → Answer: 2



const n = parseInt(prompt("Enter number of rooms:")); // Number of rooms
let count = 0;

for (let i = 0; i < n; i++) {
    const [p, q] = prompt().split(' ').map(Number);
    
    // If the room has space for at least 2 more people
    if (q - p >= 2) {
        count++;
    }
}

console.log(count); // Output number of rooms where both George and Alex can move in
