// 🔍 Problem Summary:
// Alice starts with a string word = "a". Bob asks her to repeatedly apply the following operation:

// For each character in word, generate its next character in the alphabet, and append this new string to the original.

// ➕ Operation Rule:
// Replace each character c in word with nextChar(c) where:

// 'z' becomes 'a'

// Otherwise: 'c' → c + 1 (e.g., 'a' → 'b', 'b' → 'c', 'y' → 'z')

// 🔁 How the Operation Works:
// Initial:

// word = "a"
// 1st operation:
// next("a") → "b"

// word = "a" + "b" = "ab"

// 2nd operation:
// next("ab") → "bc"

// word = "ab" + "bc" = "abbc"

// 3rd operation:
// next("abbc") → "bccd"

// word = "abbc" + "bccd" = "abbcbccd"

// ... and so on

// 🧠 Key Observation:
// We don't need to build the full string up to k = 500. Instead, we can simulate step-by-step, tracking the string growth until it reaches k characters, and then return the k-th character.

// 📈 Pattern Analysis:
// Each round doubles the size of the string.

// Step	word	Length
// 0	a	1
// 1	ab	2
// 2	ab + bc = abbc	4
// 3	abbc + bccd	8
// 4	abbc... + cdd...	16
// ...	...	...

// So after each operation, string length doubles:

// 1 → 2 → 4 → 8 → 16 → 32 → 64 → 128 → 256 → 512

// Since k ≤ 500, we can stop when length ≥ k.

// ✅ Example: k = 5
// Let’s walk through:


// Step 0: word = "a"               // Length = 1
// Step 1: next("a") = "b"          => word = "ab"             (len = 2)
// Step 2: next("ab") = "bc"        => word = "abbc"           (len = 4)
// Step 3: next("abbc") = "bccd"    => word = "abbcbccd"       (len = 8)
// Now we have enough characters.

// 👉 word[4] (0-based index) = 'b' ✅

// ✅ Example: k = 10
// Keep going:


// Step 4: next("abbcbccd") = "bcccddee" => word = "abbcbccdbcccddee" (len = 16)
// 👉 word[9] = 'c' ✅

// ✅ Constraints:
// 1 ≤ k ≤ 500

// So at most we do ~9 steps (512 characters)


//Approach

// The solution uses a StringBuilder to efficiently build the string through these operations:

// Start with the initial string "a"
// While the string is shorter than k:
// Get the current length
// For each character in the current string:
// Calculate its next character (with proper z→a wrapping)
// Append this next character
// Once the string is long enough, return the k-th character (adjusted for 0-based indexing)


var findKthCharacter = (k) => {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var word = ['a'];

    while (word.length < k) {
        var currentLength = word.length;
        for (var i = 0; i < currentLength; i++) {
            var ch = word[i];
            var idx = alphabet.indexOf(ch);
            var nextChar = alphabet[(idx + 1) % 26];
            word.push(nextChar);
        }
    }

    return word[k - 1];
};

// ✅ Example input
var k = 5;
console.log('Output: "' + findKthCharacter(k) + '"');  // Output: "b"