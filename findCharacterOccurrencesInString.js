function findCharacterOccurrencesInString() {
    let s = "I live in Dhaka";
    let s2 = s.toLowerCase();  
    let count = {};  

    
    for (let char of s2) {
        if (char !== ' ') {  
            
            count[char] = (count[char] || 0) + 1;
        }
    }

    
    for (let char in count) {
        console.log(char + " " + count[char]);
    }
}


findCharacterOccurrencesInString();
