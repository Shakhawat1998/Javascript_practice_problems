const message = "Your secret code is 1234. don't share with anybody.\r\nBvwt3fpjs2S";

 // Replace all non-digit 
 // characters and get the first 4 digits
 const code = message.replace(/\D/g,"").substring(0,4);
 console.log(code);


//  message.replace(/\D/g, ""): In JavaScript, \D is used to match any character that
//   is not a digit. The g flag ensures it replaces all non-digit characters globally.
// .substring(0, 4): This retrieves
//  the first 4 characters from the resulting string of digits.