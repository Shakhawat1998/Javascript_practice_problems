// /*
// Problem: Devu and Churu's Event Scheduling

// We have:
// - Devu (singer) will sing n songs.
// - ith song takes t[i] minutes exactly.
// - After each song (except the last), Devu needs 10 minutes rest.
// - Churu (comedian) tells jokes, each joke = 5 minutes.
// - Churu does not need rest.

// Rules:
// 1. Total event time must be ≤ d minutes.
// 2. Devu must sing all his songs completely.
// 3. We want to maximize the number of jokes Churu tells.

// If it's impossible for Devu to finish all songs within d minutes, print -1.
// Otherwise, print the maximum number of jokes possible.

// Constraints:
// 1 ≤ n ≤ 100
// 1 ≤ d ≤ 10000
// 1 ≤ t[i] ≤ 100
// */


// // Example 1:
// n = 3, d = 30
// songs = [2, 2, 1]

// /*
// Step-by-step schedule:

// - After 1st song (2 min), Devu rests 10 min → Churu can tell 2 jokes (10 / 5 = 2).
// - After 2nd song (2 min), Devu rests 10 min → Churu can tell 2 more jokes.
// - Before first song starts → Churu can tell 1 joke (5 min) in the beginning if time allows.

// Possible arrangement:
//   Joke (5) → Song1 (2) → Rest (10) → Song2 (2) → Rest (10) → Song3 (1)
// Total time = 5 + 2 + 10 + 2 + 10 + 1 = 30 min

// Total jokes:
//   1 (start) + 2 (after song1) + 2 (after song2) = 5 jokes

// Output: 5
// */


// // Example 2:
// n = 3, d = 20
// songs = [2, 1, 1]

// /*
// Devu's singing time = 2 + 1 + 1 = 4 minutes
// Rest time = 2 rests × 10 min each = 20 minutes
// Total = 4 + 20 = 24 minutes

// But available time = 20 minutes → impossible.

// Output: -1
// */


// Import prompt-sync for interactive console input
const prompt = require("prompt-sync")({ sigint: true });

// Read n (number of songs) and d (total event time in minutes)
let [n, d] = prompt("Enter n and d: ").split(" ").map(Number);
// Intuition: n = songs count, d = total allowed minutes for event

// Read song times array
let songs = prompt("Enter song times: ").split(" ").map(Number);
// Intuition: songs[i] = time Devu needs for ith song

// Step 1: Calculate total singing time
let totalSingingTime = songs.reduce((sum, time) => sum + time, 0);
// Intuition: Sum of all songs' durations

// Step 2: Calculate total rest time (10 min after each song except last)
let totalRestTime = (n - 1) * 10;
// Intuition: Devu rests only between songs

// Step 3: Minimum required time for event
let minRequiredTime = totalSingingTime + totalRestTime;
// Intuition: If this > d, event not possible

// Step 4: Check feasibility
if (minRequiredTime > d) {
    console.log(-1); // Not possible
} else {
    // Step 5: Calculate jokes during rests
    let jokesFromRests = (n - 1) * 2;
    // Intuition: Each 10 min rest = 2 jokes (5 min each)

    // Step 6: Calculate extra leftover time
    let remainingTime = d - minRequiredTime;
    // Intuition: Free minutes left after songs + rests

    // Step 7: Convert leftover time to jokes
    let jokesFromExtra = Math.floor(remainingTime / 5);
    // Intuition: Every 5 min = 1 joke

    // Step 8: Total jokes
    console.log(jokesFromRests + jokesFromExtra);
}
