
// //input: aabbbccccddddd
// output: a2b3c4d5



function compressString(str) {
    let result = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1; // reset the count for the next character
        }
    }
    
    return result;
}

let input = "aabbbccccddddd";
let output = compressString(input);
console.log(output);  // Output: a2b3c4d5
