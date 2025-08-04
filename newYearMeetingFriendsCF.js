// There are 3 friends who live on a number line (like points on a ruler).

// They live at positions x1, x2, and x3.

// They want to meet at one point (can be any point on the number line) to celebrate the New Year.
// Your task is to find the minimum total distance they all need to travel if they meet at the best point.

// 🧠 Goal
// Find the minimum total distance the 3 friends must travel if they all meet at the same place.

// 🔢 Input
// Three distinct integers x1, x2, and x3
// Each number represents a house location on a straight line
// (1 ≤ x1, x2, x3 ≤ 100)

// 📤 Output
// Print a single integer — the minimum total distance the friends have to travel.

// ✅ Examples Explained
// Input:

// 7 1 4
// Sorted positions: 1, 4, 7
// Best meeting point = 4 (middle friend’s house)

// Friend at 7 → moves to 4 → distance = 3

// Friend at 1 → moves to 4 → distance = 3

// Friend at 4 → stays → distance = 0

// Total = 3 + 3 + 0 = 6

// ✔️ Output:


// 6
// Input:

// 30 20 10
// Sorted positions: 10, 20, 30
// Best meeting point = 20

// 10 → 20 → 10 units

// 30 → 20 → 10 units

// 20 → stays → 0

// Total = 10 + 0 + 10 = 20

// ✔️ Output:


// 20
// 💡 Tip
// The best meeting point is always the middle value of the three positions (the median) because it minimizes the sum of absolute distances.


// 🧠 Why Is the Minimal Total Distance max - min?
// Let’s break down why the formula:


// Minimal total distance = max position - min position
// works for exactly three friends.

// 🎯 Goal:
// All 3 friends must meet at one point on the number line.
// We want the total distance they all travel to be as small as possible.

// 💡 Insight:
// If you sort the positions, the best meeting point is always the middle number (called the median).

// The sum of absolute differences from all points to the median is the smallest possible.

// 🔢 Let’s Take an Example:
// Suppose the friends live at positions:


// x1 = 7, x2 = 1, x3 = 4
// First, sort them:


// [1, 4, 7]
// Now test meeting at different points:

// Option 1: Meet at 1
// 1 → 1: 0

// 4 → 1: 3

// 7 → 1: 6

// Total = 0 + 3 + 6 = 9

// Option 2: Meet at 4 (the median)
// 1 → 4: 3

// 4 → 4: 0

// 7 → 4: 3

// Total = 3 + 0 + 3 = 6 ✅ (minimum)

// Option 3: Meet at 7
// 1 → 7: 6

// 4 → 7: 3

// 7 → 7: 0

// Total = 6 + 3 + 0 = 9

// 📌 So Why Is It max - min?
// When you meet at the middle person’s position, the left person travels middle - min, and the right person travels max - middle.

// So total distance becomes:


// (middle - min) + (max - middle) = max - min
// ✅ That’s why:


// Minimum total distance = max - min
// This works only for 3 friends because the median minimizes the total absolute distance.