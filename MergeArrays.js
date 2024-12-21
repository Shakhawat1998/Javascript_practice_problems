function mergeArrays(arr1, arr2) {
    let merged = arr1.concat(arr2);
    return merged;
}


let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];


let merged = mergeArrays(arr1, arr2);


console.log(merged);
