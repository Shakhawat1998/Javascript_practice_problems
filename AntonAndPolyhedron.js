// Anton loves regular polyhedrons, which are 3D shapes with all faces and angles equal. There are only five types:

// Name	Faces
// Tetrahedron	4
// Cube	6
// Octahedron	8
// Dodecahedron	12
// Icosahedron	20

// Anton has a collection of n such shapes. Each polyhedron is identified by name.

// Your Task:
// Calculate the total number of faces from all polyhedrons in Anton’s collection.

// Input Format:
// First line: integer n — number of polyhedrons (1 ≤ n ≤ 200,000)

// Next n lines: each line is the name of one polyhedron (Tetrahedron, Cube, etc.)

// Output Format:
// One number: total number of faces.

// Example 1:
// Input:


// 4
// Icosahedron
// Cube
// Tetrahedron
// Dodecahedron
// Breakdown:

// Icosahedron → 20 faces

// Cube → 6 faces

// Tetrahedron → 4 faces

// Dodecahedron → 12 faces

// Total: 20 + 6 + 4 + 12 = 42

// Output:


// 42
// Example 2:
// Input:


// 3
// Dodecahedron
// Octahedron
// Octahedron
// Breakdown:

// Dodecahedron → 12 faces

// Octahedron → 8 faces

// Octahedron → 8 faces

// Total: 12 + 8 + 8 = 28

// Output:

// 28

// Use prompt-sync to read input (install it via npm if needed)
const prompt = require('prompt-sync')();

// Read number of polyhedrons
let n = parseInt(prompt());
let ans = 0; // Total number of faces

// Loop through each polyhedron
while (n--) {
    const s = prompt(); // Read polyhedron name

    // Check the first letter to determine which shape it is
    if (s[0] === 'T') {
        // Tetrahedron → 4 faces
        ans += 4;
    } else if (s[0] === 'C') {
        // Cube → 6 faces
        ans += 6;
    } else if (s[0] === 'O') {
        // Octahedron → 8 faces
        ans += 8;
    } else if (s[0] === 'D') {
        // Dodecahedron → 12 faces
        ans += 12;
    } else {
        // Icosahedron → 20 faces (any other case)
        ans += 20;
    }
}

// Output the total number of faces
console.log(ans);
