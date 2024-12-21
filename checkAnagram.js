function checkAnagram(word1, word2) {
    let chars1 = word1.split('');
    let chars2 = word2.split('');

    chars1.sort();
    chars2.sort();

    chars1 = chars1.join('');
    chars2 = chars2.join('');

    if (chars1 === chars2)
        console.log("Anagram");
    else
        console.log("Not Anagram");
}






const word1 = "race";
const word2 = "care";
checkAnagram(word1, word2);