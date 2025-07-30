// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

 

// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

// Input: date = "2019-02-10"
// Output: 41
 

// Constraints:

// date.length == 10
// date[4] == date[7] == '-', and all other date[i]'s are digits
// date represents a calendar date between Jan 1st, 1900 and Dec 31st, 2019.

//approach

// Splitting the date string into year, month, and day.

// Keeping an array of days in each month.

// Handling leap years (for February).

// Summing days from previous months and adding the current day.



function dayOfYear(date) {
    const [year, month, day] = date.split('-').map(Number);
    
    // Days in each month (non-leap year)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year and adjust February
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    // Sum the days in previous months and add current day
    let dayCount = 0;
    for (let i = 0; i < month - 1; i++) {
        dayCount += daysInMonth[i];
    }

    return dayCount + day;
}

// Example usage
console.log(dayOfYear("2019-01-09")); // Output: 9
console.log(dayOfYear("2019-02-10")); // Output: 41
