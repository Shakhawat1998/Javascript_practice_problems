
// The parameter weekday is true if it is a weekday, 
// and the parameter vacation is true if we are on vacation. 
// We sleep in if it is not a weekday or we're on vacation. 
// Return true if we sleep in.


// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
    return !weekday || vacation;
}

// Example calls:
console.log(sleepIn(false, false)); // true
console.log(sleepIn(true, false));  // false
console.log(sleepIn(false, true));  // true


// Explanation:
// You sleep in if it’s not a weekday (!weekday) or you’re on vacation (vacation).