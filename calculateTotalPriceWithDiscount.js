// The message is processed to extract all digits using message.replace(/[^\d]/g, " "). 
// This replaces all non-digit characters with spaces.
// The string is then trimmed and extra spaces are replaced with a single space 
// using .trim().replace(/\s+/g, " ").
// The resulting string is split into an array of numbers using .split(" ").

function calculatePrice() {
    let message = "A core i 7 laptop price is 85000 tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece mouse, what will be my total cost after giving 15% discount?";

    // Use a regular expression to extract all digits from the message
    let digits = message.replace(/[^\d]/g, " ").trim().replace(/\s+/g, " ");
    let arr = digits.split(" ");

    // Extract the laptop price, mouse price, mouse quantity, and discount
    let laptopPrice = parseInt(arr[1]);
    let mousePrice = parseInt(arr[2]);
    let mouseQuantity = parseInt(arr[3]);
    let discount = parseInt(arr[4]);

    // Calculate total price before discount
    let totalPriceBeforeDiscount = laptopPrice + (mousePrice * mouseQuantity);

    // Calculate the discount
    let totalDiscount = totalPriceBeforeDiscount * (discount / 100.0);

    // Calculate the final price after applying the discount
    let totalPrice = totalPriceBeforeDiscount - totalDiscount;

    // Output the final price
    console.log("Total Price " + totalPrice + " Taka");
}

// Call the function to calculate the price
calculatePrice();
