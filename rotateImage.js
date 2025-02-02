// // You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// // You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
// // Example 1:

// // Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// // Output: [[7,4,1],[8,5,2],[9,6,3]]
// // Example 2:

// // Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// // Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// The problem requires rotating a given N × N matrix by 90 degrees clockwise. Observing the transformation, we can see that:

// The rows become columns.
// The order of elements in each row reverses after the transformation.
// A direct approach is:

// Transpose the matrix: Convert rows into columns by swapping matrix[i][j] with matrix[j][i].
// Reverse each row: Since transposing alone results in a vertical flip across the diagonal, reversing each row will complete the rotation.
// Approach
// Transpose the matrix
// Swap matrix[i][j] with matrix[j][i] for i < j to avoid double swapping.



function rotate(matrix){
    //step 1: Transpose the matrix
    for(let i=0; i<matrix.length-1; i++){
        for(let j= i+1; j<matrix[0].length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    //step 2: Reverse each row of the matrix
    for(let i=0; i<matrix.length;i++){
        reverse(matrix[i]);
    }

    // Helper function to reverse an array
    function reverse(arr){
        let i=0;
        let j= arr.length-1;
        while(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
}


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

rotate(matrix);
console.log(matrix);



