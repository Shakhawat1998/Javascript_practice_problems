// There are n people, each has a name, a surname and a year of birth. Sort them first lexicographically by surname, then by name. If there are several people with the same surname and name, then arrange them in descending order of their year of birth.

// Input
// The first line contains the number of people n (1≤n≤100). Each of the next n lines contains name, surname and year of birth of one person. Name and surname contain no more that 20 characters.

// Output
// Print the data about people according to the sorting condition.

// Examples
// Input #1
// 6
// Mila Catron 1977
// Ivan Mendel 1956
// Mihail Egorov 1980
// Eric Catron 1977
// Mihail Egorov 1988
// Petr Mendel 1990
// Answer #1
// Eric Catron 1977
// Mila Catron 1977
// Mihail Egorov 1988
// Mihail Egorov 1980
// Ivan Mendel 1956
// Petr Mendel 1990


// Import prompt-sync for taking input from the terminal
const prompt = require("prompt-sync")();

// Take the number of people as input
let n = parseInt(prompt("Enter number of people: "));

// Array to store people
let people = [];

// Loop to take input for each person
for (let i = 0; i < n; i++) {
    // Take one line input: name surname year
    let line = prompt(`Enter name, surname, year for person ${i + 1}: `);

    // Split the line into name, surname, year
    let [name, surname, year] = line.split(" ");

    // Store as object in people array
    people.push({ name, surname, year: parseInt(year) });
}

// Sort the array based on conditions
people.sort((a, b) => {
    // Compare by surname lexicographically
    if (a.surname < b.surname) return -1;
    if (a.surname > b.surname) return 1;

    // If surname is same, compare by name lexicographically
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    // If surname and name are same, sort by year in descending order
    return b.year - a.year;
});

// Print sorted people
console.log("\nSorted list:");
for (let person of people) {
    console.log(`${person.name} ${person.surname} ${person.year}`);
}
