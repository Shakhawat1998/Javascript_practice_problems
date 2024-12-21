let message = "The price of this shirt is"
    + " 500 tk and VAT is 75 Tk";

// Replace all non-digit characters with space and trim the result
let str = message.replace(/\D/g, " ").trim();

// Replace multiple spaces with a single space
str = str.replace(/\s+/g, " ");

// Split the string into an array of numbers
let arr = str.split(" ");

//parse the numbers into floats 

let shirtPrice = parseFloat(arr[0]);
let vat = parseFloat(arr[1]);

let total = shirtPrice + vat;

console.log("Total price: " + total);