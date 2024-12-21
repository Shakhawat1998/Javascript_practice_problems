const prompt = require("prompt-sync")();

function findTwoLowestHeightsOfBabies() {
    let height = [];
    
    
    console.log("Enter the heights of 10 babies (in cm): ");
    for (let i = 0; i < 10; i++) {
        height[i] = parseInt(prompt(`Enter height ${i + 1}: `));
    }
    
    
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[j] < height[i]) {
                let temp = height[i];
                height[i] = height[j];
                height[j] = temp;
            }
        }
    }

    
    console.log("The 2 lowest heights of babies: " + height[0] + " " + height[1]);
}


findTwoLowestHeightsOfBabies();
