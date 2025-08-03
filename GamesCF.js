// // // // There are n football teams, and each team has:

// // // // a home uniform color (worn when hosting a game),

// // // // a guest uniform color (worn when visiting another team).

// // // // Each team plays every other team at home once, so there are n * (n - 1) total matches.

// // // // Usually:

// // // // Host team wears home uniform

// // // // Guest team wears guest uniform

// // // // Exception:
// // // // If host's home uniform color matches the guest's guest uniform color, then the host must wear guest uniform instead (to avoid confusion).

// // // // Your Task:
// // // // Count how many times this exception happens during all matches.

// // // //input format 

// // // n               ← number of teams
// // // h1 a1           ← team 1's home and guest uniform colors
// // // h2 a2           ← team 2's home and guest uniform colors
// // // ...
// // // hn an           ← team n's home and guest uniform colors

// // Output:
// // One integer: total number of times a host must wear guest uniform due to color clash.


// //input 
// 3
// 1 2
// 2 4
// 3 4


// All matches:

// Team 1 hosts 2: 1 vs 4 → no clash

// Team 1 hosts 3: 1 vs 4 → no clash

// Team 2 hosts 1: 2 vs 2 → clash → host uses guest (1 time)

// Team 2 hosts 3: 2 vs 4 → no clash

// Team 3 hosts 1: 3 vs 2 → no clash

// Team 3 hosts 2: 3 vs 4 → no clash

// Output: 1


// //input
// 4
// 100 42
// 42 100
// 5 42
// 100 5

// Matches where host’s home matches guest’s guest:

// 1 vs 2: 100 vs 100 → clash

// 2 vs 1: 42 vs 42 → clash

// 2 vs 3: 42 vs 42 → clash

// 3 vs 4: 5 vs 5 → clash

// 4 vs 2: 100 vs 100 → clash

// Output: 5

// //input 
// 2
// 1 2
// 1 2

// All matches:

// 1 vs 2: 1 vs 2 → no clash

// 2 vs 1: 1 vs 2 → no clash

// Output: 0

// Read input using prompt-sync or any input method
const prompt = require('prompt-sync')();

// Read number of teams
const n = parseInt(prompt());

// Arrays to store home and guest uniform colors
let a = []; // home colors
let b = []; // guest colors

// Input: reading home and guest uniform colors
for (let i = 0; i < n; i++) {
    const [home, guest] = prompt().split(' ').map(Number);
    a.push(home);  // a[i] = home color
    b.push(guest); // b[i] = guest color
}

let ans = 0;

// Count the number of clashes where host has to wear guest uniform
for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
        if (a[i] === b[k]) {
            // Host's home color matches guest's guest color
            ans++;
        }
    }
}

console.log(ans);
