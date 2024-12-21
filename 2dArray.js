function print2DArray() {
    
    let arr = [
        [1, 2],  
        [3, 4]   
    ];

    
    for (let i = 0; i < 2; i++) {

        for (let j = 0; j < 2; j++) {
            
            console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
        }
    }
}


print2DArray();


