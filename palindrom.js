function reverseString(str){
    return str.split("").reverse().join("");
}




const originalString = "madam";
const reversedString = reverseString(originalString);
if(originalString === reversedString){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}