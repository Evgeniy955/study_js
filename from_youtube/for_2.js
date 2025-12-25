let arr = [5, 7, 3, 8, 9, "Hello"];
for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Элемент " + (i + 1) + ": " + arr[i]);
}

console.log("-----");

// let arr = [5, 7, 3, 8, 9, "Hello"];
arr.forEach((item, i, array) => {
    if (typeof item === "number") {
        array[i] = item * 2;
    }
    console.log("Элемент " + (i + 1) + ": " + array[i]);
});

console.log("-----");

let arr2 = [5, 7, 3, 8, 9, "Hello"];
let index = 0;
for (let value of arr2) {
    if (typeof value === "number") {
        arr2[index] = value * 2;
    }
    console.log("Элемент " + (index + 1) + ": " + arr2[index]);
    index++;
}

console.log("-----");

// Перебор массива с помощью forEach
let favoriteFruits4 = ["grapefruit", "orange", "lemon"];
favoriteFruits4.forEach((fruit, index) => {
    console.log(`Fruit ${index}: ${fruit}`);
});
