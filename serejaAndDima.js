// Sereja and Dima are playing a card game.

// 🃏 Rules of the Game:

// There are n cards placed in a row (left to right), each with a distinct number.

// They take turns, and Sereja goes first.

// On each turn, a player can only pick from the two ends — either the leftmost or rightmost card.

// Each player uses a greedy strategy: they always choose the larger of the two end cards.

// The game ends when all cards are taken.

// The player with the higher total sum of card values wins.

// ✅ Your Task:
// Simulate the game and print the final scores of both players.

// 🔢 Input:
// n — number of cards (1 ≤ n ≤ 1000)

// A list of n space-separated integers — the card values (all distinct and between 1 and 1000)

// 📤 Output:
// Two integers:

// Total score of Sereja

// Total score of Dima

// 🔍 Example 1:
// Input:


// 4
// 4 1 2 10
// Gameplay:

// Cards: [4, 1, 2, 10]

// Sereja's turn → picks 10 → [4, 1, 2]

// Dima's turn → picks 4 → [1, 2]

// Sereja's turn → picks 2 → [1]

// Dima's turn → picks 1

// Final Scores:

// Sereja: 10 + 2 = 12

// Dima: 4 + 1 = 5

// Output:


// 12 5
// 🔍 Example 2:
// Input:


// 7
// 1 2 3 4 5 6 7
// Gameplay:

// Cards: [1, 2, 3, 4, 5, 6, 7]

// Sereja picks 7 → [1, 2, 3, 4, 5, 6]

// Dima picks 6 → [1, 2, 3, 4, 5]

// Sereja picks 5 → [1, 2, 3, 4]

// Dima picks 4 → [1, 2, 3]

// Sereja picks 3 → [1, 2]

// Dima picks 2 → [1]

// Sereja picks 1

// Final Scores:

// Sereja: 7 + 5 + 3 + 1 = 16

// Dima: 6 + 4 + 2 = 12

// Output:


// 16 12



const prompt = require('prompt-sync')();

// Read number of cards
const n = parseInt(prompt("Enter number of cards: "));

// Read the card values into an array
let cards = prompt("Enter card values: ").split(' ').map(Number);

// Initialize pointers to both ends of the array
let left = 0;
let right = n - 1;

// Initialize scores
let serejaScore = 0;
let dimaScore = 0;

// Track turn: true = Sereja's turn, false = Dima's turn
let serejaTurn = true;

// Play the game
while (left <= right) {
    // Choose the larger card from both ends
    let chosen;
    if (cards[left] > cards[right]) {
        chosen = cards[left];
        left++;
    } else {
        chosen = cards[right];
        right--;
    }

    // Assign the chosen card to the current player
    if (serejaTurn) {
        serejaScore += chosen;
    } else {
        dimaScore += chosen;
    }

    // Switch turn
    serejaTurn = !serejaTurn;
}

// Print final scores
console.log(`${serejaScore} ${dimaScore}`);

