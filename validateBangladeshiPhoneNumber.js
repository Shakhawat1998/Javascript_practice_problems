// write a program to validate given phone number is a bangladeshi number or not
// To validate whether a given phone number is a Bangladeshi number, we need to check the following criteria:

// A Bangladeshi phone number should have 11 digits.
// The phone number must start with one of the following prefixes:
// 01 (common prefix for mobile numbers).
// The valid prefixes for mobile operators in Bangladesh are 017, 018, 019, 013, 014, 015, 016.

// The program now checks if the phone number starts with the country code 88 (which corresponds to +88).
// After removing non-digit characters, it verifies if the phone number has 13 digits in total (2 digits for the country code and 11 digits for the phone number).
// It checks if the phone number has a valid mobile operator prefix from the set of valid prefixes (e.g., 017, 018, etc.).


// +8801712345678 — valid
// +8801912345678 — valid
// +88015123456789 — invalid (too many digits)


// Importing the prompt-sync module
const prompt = require('prompt-sync')();


function validateBangladeshiPhoneNumber(phoneNumber) {
    // Remove any non-digit characters
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the phone number starts with country code '88' and has 13 digits
    if (cleanedPhoneNumber.startsWith('88') && cleanedPhoneNumber.length === 13) {
        // Check if the phone number starts with a valid operator prefix after the country code
        const validPrefixes = ['017', '018', '019', '013', '014', '015', '016'];
        const operatorPrefix = cleanedPhoneNumber.substring(2, 5); // Get the 3 digits after +88

        if (validPrefixes.includes(operatorPrefix)) {
            return true;
        }
    }

    return false;
}

// Test the function
const phoneNumber = prompt("Enter a phone number:");
if (validateBangladeshiPhoneNumber(phoneNumber)) {
    console.log("The phone number is a valid Bangladeshi number.");
} else {
    console.log("The phone number is not a valid Bangladeshi number.");
}
