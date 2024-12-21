function mergeArrays(arr1, arr2) {

    let merged = [];
    let index = 0;


    for (let i = 0; i < arr1.length; i++) {
        merged[index] = arr1[i];
        index++;
    }


    for (let i = 0; i < arr2.length; i++) {
        merged[index] = arr2[i];
        index++;
    }

    return merged;
}


let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];


let merged = mergeArrays(arr1, arr2);


console.log(merged);
