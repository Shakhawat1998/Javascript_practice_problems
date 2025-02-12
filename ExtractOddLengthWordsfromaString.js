// initializing string
let testStr = "gfg is best of geeks";

// printing original string
console.log("The original string is: " + testStr);

// Extract odd length words in String using loop
let res = [];
let words = testStr.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
        res.push(words[i]);
    }
}

// printing result
console.log("The odd length strings are: " + res.join(", "));
