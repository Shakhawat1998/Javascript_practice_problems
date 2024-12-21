function countVowels(myStr) {
    const vowels = "aeiou";
    let count = 0;
    let uniqueVowels = new Set();

    const chars = myStr.toLowerCase().split('');

    for (let c of chars) {
        if (vowels.includes(c)) {
            count++;
            uniqueVowels.add(c)
        }
    }

    console.log("Total vowels found: " + count);
    console.log("Total unique vowels found: " + uniqueVowels.size);


}







const myStr = "I am a SQA Engineer";
countVowels(myStr);