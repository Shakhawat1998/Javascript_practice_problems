// given an array arr[] of n integers
//construct a product array res[] 
//such that res[i] is equal to the 
//product of all elements of arr[] except
//arr[i]

//input: arr[] = [10,3,5,6,2]
//output: [180,600,360,300,900]


//using prefix and suffix array - O(n) time and O(n) space 
//product of array except i-th element= prefProduct[i]*suffProduct[i]

// prefProduct[i] stores product of all elements before i-th index in the array
//suffProduct[i] stores product of all elements after i-th index in the array 


function productExceptSelf(arr){
    const n = arr.length;
    const prefProduct = new Array(n).fill(1);
    const suffProduct = new Array(n).fill(1);
    const res = new Array(n);


    //construct the prefProduct array
    for(let i=1;i<n;i++){
        prefProduct[i] = arr[i-1]*prefProduct[i-1];
    }

    //construct the suffProduct array
    for(let j=n-2;j>=0; j--){
        suffProduct[j]= arr[j+1]*suffProduct[j+1];
    }

    //construct the result array using prefProduct[] and 
    //suffProduct[]

    for(let i=0;i<n;i++){
        res[i] = prefProduct[i]* suffProduct[i];
    }

    return res;
}

const arr = [10,3,5,6,2];
const res = productExceptSelf(arr);
console.log(res.join(" "));