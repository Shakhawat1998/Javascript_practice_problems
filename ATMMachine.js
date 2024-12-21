
const prompt = require("prompt-sync")();1
function atmBooth() {
    let balance = 5000;
    let exit = false;


    while (!exit) {
        console.log('\nATM Menu:');
        console.log("1. Check Balance");
        console.log("2. Withdraw Money");
        console.log("3. Exit");


        const option = parseInt(prompt("Select an option (1-3): "));

        switch (option) {
            case 1: // Check Balance
                console.log(`Current Balance: ${balance}`);
                break;
            case 2:
                const withdrawAmount = parseInt(prompt("Enter the amount to withdraw: "));
                if (withdrawAmount > balance) {
                    console.log("Insufficient Balance");
                }
                else if (withdrawAmount <= 0) {
                    console.log("Invalid amount. Enter a positive number.");

                }
                else {
                    balance -= withdrawAmount;
                    console.log(`Withdraw successful. Remaining Balance: ${balance}`);
                }
                break;

            case 3:
                console.log("Thank you for using our ATM service!");
                exit = true;
                break;

            default:
                console.log("Invalid Option. Try Again");

        }

    }
}














atmBooth();