function sortStringCharacters(str) {
    let chars = str.split('');

    chars.sort();

    let sortedStr = chars.join('');
    console.log(sortedStr);

    // Using StringBuilder equivalent in JavaScript (concatenate characters)
    let sb = '';
    for (let char of chars) {
        sb += char;  // Append each character to the string
    }

    console.log(sb);  // Output the concatenated string



}





const myStr = "hello";
sortStringCharacters(myStr);