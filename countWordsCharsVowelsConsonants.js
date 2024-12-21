function countWordsCharsVowelsConsonants(str) {

    let s1 = str.toLowerCase();
    let s2 = "aeiou";
    let words = 0, chars = 0, vowel = 0, consonant = 0;


    for (let i = 0; i < s1.length; i++) {
        let currentChar = s1.charAt(i);


        if (currentChar === ' ') {
            words++;
        } else {
            chars++;
        }


        if (s2.indexOf(currentChar) !== -1) {
            vowel++;
        } else if (currentChar !== ' ') {
            consonant++;
        }
    }


    words++;


    console.log("Words: " + words);
    console.log("Chars: " + chars);
    console.log("Vowel: " + vowel);
    console.log("Consonant: " + consonant);
}


let inputStr = "I am a SQA Engineer";
countWordsCharsVowelsConsonants(inputStr);
