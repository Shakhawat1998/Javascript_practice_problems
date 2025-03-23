// given two integers find sum of cubes of all numbers in the range of n and m 
// i/p n=4,m=9
// o/p 1989


function sumOfCubes(n, m) {
    let start = Math.min(n, m);
    let end = Math.max(n, m);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i ** 3; // Cube each number and add to sum
    }

    return sum;
}

// Example usage
console.log(sumOfCubes(4, 9)); // Output: 1989
