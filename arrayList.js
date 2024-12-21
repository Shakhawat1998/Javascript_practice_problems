function arrayListToArray() {

    let fruits = ["Mango", "Banana", "Litchi", "Jackfruit", "Guava"];


    console.log(fruits);

    // Convert the array to another array (using the spread operator, or just using the same array)
    let arr = [...fruits]; // or arr = fruits.slice(); 


    console.log(arr.length);


    console.log(arr[0]);
}

// Call the function to execute
arrayListToArray();
