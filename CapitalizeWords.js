function main() {
    const str = "rahim lives in sylhet";  // Original string
    const words = str.split(" ");  // Split the string into words
    
    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        // Ensure that words[i] is a valid string
        if (words[i].length > 0) {
            // Capitalize the first letter and leave the rest of the word intact
            const firstLetter = words[i].charAt(0).toUpperCase();  // First letter in uppercase
            const othersLetter = words[i].slice(1);  // Remaining part of the word
            console.log(firstLetter + othersLetter);  // Print the formatted word
        }
    }
}

// Call the main function
main();
