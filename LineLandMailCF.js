/*
Lineland cities are placed on a number line (Ox axis) at distinct positions x1, x2, ..., xn in ascending order.

Goal:
For each city i, find:

mini: the minimum distance to any other city,

maxi: the maximum distance to any other city.

Notes:

mini is the shortest distance from city i to a different city.

maxi is the longest distance from city i to a different city.

Distance = absolute difference of coordinates.

Example 1:
Input:
4
-5 -2 2 7

Positions: -5, -2, 2, 7

Calculations:
City 1 (-5):
mini = distance to closest city = |-5 - (-2)| = 3
maxi = distance to farthest city = |-5 - 7| = 12

City 2 (-2):
mini = min(|-2 - (-5)|, |-2 - 2|) = min(3, 4) = 3
maxi = max(|-2 - (-5)|, |-2 - 7|) = max(3, 9) = 9

City 3 (2):
mini = min(|2 - (-2)|, |2 - 7|) = min(4, 5) = 4
maxi = max(|2 - (-5)|, |2 - 7|) = max(7, 5) = 7

City 4 (7):
mini = distance to closest city = |7 - 2| = 5
maxi = distance to farthest city = |7 - (-5)| = 12

Output:
3 12
3 9
4 7
5 12

Example 2:
Input:
2
-1 1

City 1 (-1):
mini = maxi = | -1 - 1 | = 2

City 2 (1):
mini = maxi = | 1 - (-1) | = 2

Output:
2 2
2 2

*/


// Import prompt-sync for reading input from console
const prompt = require('prompt-sync')();

// Read number of cities
const n = parseInt(prompt());

// Read positions of cities as array of integers
const arr = prompt().split(' ').map(Number);

// Loop through each city
for (let i = 0; i < n; i++) {
    let mini, maxi;

    if (i === 0) {
        // For first city:
        // Minimum distance is to the next city
        mini = Math.abs(arr[i] - arr[i + 1]);
        // Maximum distance is to the last city
        maxi = Math.abs(arr[i] - arr[n - 1]);
    } else if (i === n - 1) {
        // For last city:
        // Minimum distance is to the previous city
        mini = Math.abs(arr[i] - arr[i - 1]);
        // Maximum distance is to the first city
        maxi = Math.abs(arr[i] - arr[0]);
    } else {
        // For middle cities:
        // Minimum distance is the smaller between left and right neighbor
        mini = Math.min(Math.abs(arr[i] - arr[i - 1]), Math.abs(arr[i] - arr[i + 1]));
        // Maximum distance is the larger between first and last city
        maxi = Math.max(Math.abs(arr[i] - arr[0]), Math.abs(arr[i] - arr[n - 1]));
    }

    // Output minimum and maximum distances for city i
    console.log(mini + " " + maxi);
}
