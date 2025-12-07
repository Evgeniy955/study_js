const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sayHello() {
    rl.question("What's your name? ", (userName) => {
        if (userName) {
            console.log("Hello", userName + "!");
        }
        rl.close();
    });
}

sayHello();
