// To limit the number of decimal places in JavaScript, use the toFixed() method.
// Example: limit to 2 decimal places.
function converter(miles) {
    return (miles * 1.60934).toFixed(2);
}

console.log(converter(130)); // Output: "209.21"


// This returns a string with 2 digits after the decimal point.
// If you need a number, use parseFloat():

function converter2(miles) {
    return parseFloat((miles * 1.60934).toFixed(2));
}

console.log(converter(131));


const randomTyme = new Date().getTime();
console.log(randomTyme);


const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber); // число от 0 до 100
