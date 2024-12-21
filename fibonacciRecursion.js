// Recursive function to calculate Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n; // Base case: if n is 0 or 1, return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: sum of the two previous Fibonacci numbers
    }
}

// Print Fibonacci series up to nth term
function printFibonacciSeries(n) {
    for (let i = 0; i < n; i++) {
        process.stdout.write(fibonacci(i) + ' '); // Print each Fibonacci number
    }
}

let n = 10; // Define the number of terms to print
printFibonacciSeries(n);
