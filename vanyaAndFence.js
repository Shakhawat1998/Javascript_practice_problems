// // Vanya and his friends are walking in a single row along a fence of height h.

// // Each friend has a height a[i]

// // If a friend’s height is ≤ h, they walk normally and take 1 unit of road width

// // If a friend’s height is > h, they bend down and take 2 units of road width

// // 👉 Task:
// // You're given:

// // n = number of friends

// // h = height of the fence

// // a[1...n] = heights of each friend

// // 🔍 Find the minimum total width of the road so all friends can
// //  walk in a row without being noticed by the guard.



// //input
// 3 7
// 4 5 14


// Fence height: 7

// Friend heights: 4 ✅, 5 ✅, 14 ❌

// First 2 friends: ≤ 7 → each takes 1 unit

// Last friend: 14 > 7 → takes 2 units
// ✔️ Total width: 1 + 1 + 2 = 4

// Output: 4


// //input
// 6 1
// 1 1 1 1 1 1


// All friends' heights ≤ 1

// Everyone walks normally → 6 × 1 = 6

// Output: 6


// 6 5
// 7 6 8 9 10 5



// All but last friend are taller than 5

// They all bend → take 2 units each

// Last friend is 5 → takes 1 unit
// ✔️ Total: 5 × 2 + 1 = 11

// Output: 11

// 📌 Constraints:
// 1 ≤ n, h ≤ 1000

// 1 ≤ a[i] ≤ 2h


const prompt = require('prompt-sync')();

// Read first line: number of friends and height of the fence
let [no_of_friends, height_of_fence] = prompt().split(' ').map(Number);

// Read second line: list of friends' heights
let heights = prompt().split(' ').map(Number);

let road_width = 0; // to track total required width

// Loop through each friend's height
for (let i = 0; i < no_of_friends; i++) {
    let individual_height = heights[i];

    // If height is greater than fence, friend bends → takes 2 units
    if (individual_height > height_of_fence) {
        road_width += 2;
    } else {
        // Otherwise, takes 1 unit
        road_width += 1;
    }
}

// Output the total required road width
console.log(road_width);
