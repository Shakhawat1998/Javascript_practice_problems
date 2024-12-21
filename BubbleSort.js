function bubbleSort() {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    let n = arr.length;

    // Bubble sort algorithm
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Print sorted array
    console.log(arr.join(" "));
}

bubbleSort();
