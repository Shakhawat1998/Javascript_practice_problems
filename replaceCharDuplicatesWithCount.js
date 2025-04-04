// Given a string, count the occurance
//  of each character and replace duplicates:

// Input: "Automation"
// Output: "2u22m22i2n"


function replaceAllDuplicates(str) {
    const lower = str.toLowerCase();
    const countMap = {};
    let result = '';

    // Count each character
    for (let ch of lower) {
        countMap[ch] = (countMap[ch] || 0) + 1;
    }

    // Replace each character based on count
    for (let ch of lower) {
        if (countMap[ch] > 1) {
            result += countMap[ch];
        } else {
            result += ch;
        }
    }

    return result;
}

// Example
console.log(replaceAllDuplicates("Automation"));  // Output: "2u22m22i2n"


