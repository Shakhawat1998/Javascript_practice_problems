// We'll say that a positive int divides itself
//  if every digit in the number divides into the number
//   evenly. So for example 128 divides itself since 1, 2,
//    and 8 all divide into 128 evenly. We'll say that 0 does not
//     divide into anything evenly, so no number with a 0 digit divides 
//     itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit.


// dividesSelf(128) → true
// dividesSelf(12) → true
// dividesSelf(120) → false


function dividesSelf(n) {
    let num = n;

    while (num > 0) {
        let digit = num % 10;
        if (digit === 0 || n % digit !== 0) {
            return false;
        }
        num = Math.floor(num / 10); // Remove the rightmost digit
    }

    return true;
}

// Example calls:
console.log(dividesSelf(128)); // true
console.log(dividesSelf(12));  // true
console.log(dividesSelf(120)); // false
