function selectionSort() {
    let arr = [64, 25, 12, 22, 11];
    let n = arr.length;

    // Selection Sort Algorithm
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the minimum element in the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    // Print sorted array
    console.log(arr.join(" "));
}

selectionSort();
