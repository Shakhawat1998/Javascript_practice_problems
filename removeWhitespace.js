function removeWhitespaces(str) {
    let result = str.replace(/\s+/g, '');  // Using regex to remove all whitespaces
    console.log(result);
}

removeWhitespaces(" A u t o m a t i o n ");  // Output: "Automation"


// The replace() function in JavaScript is used with a regular expression /\s+/g to match all
//  whitespace characters (spaces, tabs, newlines, etc.) and remove them.
// The g flag ensures that the replacement happens globally (across the entire string).
