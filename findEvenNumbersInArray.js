function findEvenNumbers(arr) {
    // Filter the even numbers from the array
    let evenNumbers = arr.filter(num => num % 2 === 0);
    
    // Print the even numbers
    console.log(evenNumbers);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findEvenNumbers(numbers);
