// Given an array of integers arr[] of size n 
//rotate the array elements to the left by k position 

// input: arr[] = {1,2,3,4,5,6} k=2
//output: {3,4,5,6,1,2}

//Explanation: After first left rotation, arr[] becomes {2,3,4,5,6,1}
//and after the second rotation, arr[] becomes {3,4,5,6,1,2}


//We will use reversal algorithm - O(n) time 
// O(1) space 

// the idea is based on the observation that if we left rotate the array by 
// d positions, the last (n-k) elements will be at the front and the first k 
//elements will be at the end 


//Reverse the subarray containing the first k elements of the array 
//Reverse the subarray containing the last (n-k) elements of the array 
//finally, reverse all the elements of the array


function rotateArray(arr,k){
    let n=arr.length;

    //handle the case where k>size of array 
    k%=n;

    reverse(arr,0,k-1);
    reverse(arr,k,n-1);
    reverse(arr,0,n-1);

}

function reverse(arr,start,end){
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
}

const arr = [1,2,3,4,5,6];
const k = 2;

rotateArray(arr,k);


console.log(arr.join(" "));