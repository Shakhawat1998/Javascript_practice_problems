function sumOfArray(arr) {
    let sum = 0;
    
    // Use forEach to iterate through the array and accumulate the sum
    arr.forEach(num => {
        sum += num;
    });
    
    // Print the sum
    console.log("Sum of all elements:", sum);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
sumOfArray(numbers);
