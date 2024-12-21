// function countDigits(num) {
//     return String(num).length; // converts num to string and returns length 
// }

// const num = 12345;
// console.log(countDigits(num)); 



// without any method 

function countDigits(num) {
    let count = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);  // Remove the last digit
        count++;
    }
    return count;
}


const num = 12345;
console.log(countDigits(num));  


