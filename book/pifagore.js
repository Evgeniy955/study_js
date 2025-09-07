const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', (userName) => {
    if (userName) {
        console.log('Hello, ' + userName + '!');
    } else {
        console.log('User cancelled the prompt.');
    }
    rl.close();
});
