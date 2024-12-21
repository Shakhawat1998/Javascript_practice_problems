// // Write a program to check password validation if there matched following combinations:
// //  Min 8 chars long, at least 1 capital letter, 
// // 1 small letter, 1 special chars and 1 digit

// Regex: The regular expression checks for:
// (?=.*[0-9]): At least one digit.
// (?=.*[a-z]): At least one lowercase letter.
// (?=.*[A-Z]): At least one uppercase letter.
// (?=.*[@#$%^&+=]): At least one special character.
// (?=\S+$): No whitespace characters allowed.
// .{8,20}: The password must be between 8 and 20 characters in length.

function isValid(password){
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
    return regex.test(password);
}


console.log(isValid("Password123@"));
console.log(isValid("password"));