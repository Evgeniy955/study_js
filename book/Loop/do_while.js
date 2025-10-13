// let number;
// do {
//     number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));


// Import the readline module
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for a number between 0 and 100
function askNumber() {
    rl.question('Please enter a number between 0 and 100: ', (input) => {
        const number = Number(input);
        if (number >= 0 && number < 100) {
            console.log('You entered:', number);
            rl.close();
        } else {
            askNumber(); // Ask again if input is invalid
        }
    });
}

askNumber();
