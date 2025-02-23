// I have a list {apple, bat, banana, cat,dog, orange} I want to 
// store it in a hashmap so that the elements are grouped according 
// to their length. Write a program for it.
// output :
// [bat, cat,dog]
// [apple]
// [banana, orange]

// GroupWordsByLengthWithoutObjectValues.js

function groupByLength(arr) {
    let lengthMap = {}; // Initialize an empty hashmap

    // Iterate over each word in the array
    for (let word of arr) {
        let wordLength = word.length; // Get the length of the word

        // If the length key doesn't exist, create an array for that length
        if (!lengthMap[wordLength]) {
            lengthMap[wordLength] = [];
        }

        // Add the word to the corresponding length group
        lengthMap[wordLength].push(word);
    }

    // Manually collect the grouped words into an array
    let groupedWords = [];
    for (let key in lengthMap) {
        groupedWords.push(lengthMap[key]);
    }

    return groupedWords;
}

const words = ['apple', 'bat', 'banana', 'cat', 'dog', 'orange'];
console.log(groupByLength(words));

