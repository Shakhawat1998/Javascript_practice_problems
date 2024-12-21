let str = "I am a SQA Engineer";

let vowels = "aeiou";
let result = "";

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    let currentChar = str.charAt(i);


    if (vowels.indexOf(currentChar) === -1) {
        result += currentChar;
    }
}

let finalResult = "";
let prevChar = "";

for (let i = 0; i < result.length; i++) {
    let currentChar = result.charAt(i);


    if (currentChar === " " && prevChar === " ") {
        continue;
    } else {
        finalResult += currentChar;
    }

    prevChar = currentChar;
}

console.log(finalResult);
