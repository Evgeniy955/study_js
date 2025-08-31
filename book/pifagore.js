let userName = prompt("Please enter your name:", "Guest");

if (userName !== null) {
    console.log("Hello, " + userName + "!");
} else {
    console.log("User cancelled the prompt.");
}
