function countNotesForGivenAmount(amount) {
    const notes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    
    
    for (let i = 0; i < notes.length; i++) {
        const count = Math.floor(amount / notes[i]); 
        if (count > 0) {
            console.log(notes[i] + " " + count);  
            amount = amount % notes[i];  
        }
    }
}


const amount = 1876;  
countNotesForGivenAmount(amount);
