// A sentence is called dancing if its first letter is uppercase and the case of each subsequent letter is the
//  opposite of the previous letter. 
// Spaces should be ignored when determining the case of a letter. For example, "A b Cd" is a dancing sentence 
// because the first letter ('A') is uppercase, the next letter ('b') is lowercase, the next letter ('C') is uppercase, 
// and the next letter ('d') is lowercase.

// Input
// The input contains several test cases. Each test case is composed by one line that contais a string sentence. 
// This string will contain between 1 and 50 characters ('A'-'Z','a'-'z' or space ' '), inclusive, or at least, 
// one letter ('A'-'Z','a'-'z').

// Output
// Turn the sentence into a dancing sentence (like following examples) by 
// changing the cases of the letters where necessary. All spaces in the original 
// sentence must be preserved, ie, " sentence " must be converted in " SeNtEnCe ".

// Sample Input	
// This is a dancing sentence
//   This   is         a  dancing   sentence  
// aaaaaaaaaaa
// z


// Sample Output
// ThIs Is A dAnCiNg SeNtEnCe
//   ThIs   Is         A  dAnCiNg   SeNtEnCe  
// AaAaAaAaAaA
// Z


function toDancingSentence(sentence) {
    let result = "";
    let uppercase = true;
    
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (char !== ' ') {
            if (uppercase) {
                result += char.toUpperCase();
            } else {
                result += char.toLowerCase();
            }
            uppercase = !uppercase;
        } else {
            result += char; // Preserve spaces
        }
    }
    
    return result;
}

// Sample test cases
const inputs = [
    "This is a dancing sentence",
    "  This   is         a  dancing   sentence  ",
    "aaaaaaaaaaa",
    "z"
];

for (let i = 0; i < inputs.length; i++) {
    console.log(toDancingSentence(inputs[i]));
}
