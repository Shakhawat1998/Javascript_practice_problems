function findCommonElements(arr1, arr2) {
    let set = new Set();

    // Add all elements of arr1 to the set
    for (let num of arr1) {
        set.add(num);
    }

    // Check each element of arr2, and print if it exists in the set
    for (let num of arr2) {
        if (set.has(num)) {
            console.log(num + " ");
        }
    }
}


let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
findCommonElements(arr1, arr2);
