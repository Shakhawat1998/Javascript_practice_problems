function removeDuplicates(arr) {
    let uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

const arr = [1, 2, 2, 3, 4, 4];
const result = removeDuplicates(arr);

console.log(result); 
